import { ApolloError } from "apollo-server";

const addDelay = async (ref, callback) => {
  const delayRef = ref.child("delay");
  const delay = await delayRef.once("value").then(snap => snap.val());
  return new Promise((res, rej) => {
    setTimeout(
      () =>
        callback()
          .then(res)
          .catch(rej),
      delay * 1000
    );
  });
};

const refError = new ApolloError("no user/email attached", "EMAIL_ERROR");

export default {
  Mutation: {
    addGameAction: async (obj, { input }, { asyncRef }) => {
      const ref = await asyncRef;
      if (!ref) return refError;
      const { value, type, timeStamp } = input;
      let docRef = ref.child("actions");
      return addDelay(ref, async () => {
        const newRef = await docRef.push({
          type,
          value,
          timeStamp
        });

        const newSnap = await newRef.once("value");
        if (!newSnap) return new ApolloError("No snap found");
        return { id: newRef.key, ...newSnap.val() };
      });
    }
  }
};
