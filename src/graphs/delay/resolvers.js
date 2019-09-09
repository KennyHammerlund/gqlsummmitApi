import { ApolloError } from "apollo-server";

const refError = new ApolloError("no user/email attached", "EMAIL_ERROR");

export default {
  Query: {
    delay: async (obj, arg, { asyncRef }) => {
      const ref = await asyncRef;
      if (!ref) return refError;
      let docRef = ref.child("delay");
      return docRef.once("value").then(snap => snap.val());
    }
  },
  Mutation: {
    setDelay: async (obj, { delay }, { asyncRef }) => {
      const ref = await asyncRef;
      if (!ref) return refError;
      let docRef = ref.child("delay");
      docRef.set(delay);
      return delay;
    }
  }
};
