import db from "../../utils/firebase";

export default {
  Query: {
    delay: (obj, arg, { ref }) => {
      let docRef = ref.child("delay");
      return docRef.once("value").then(snap => snap.val());
    }
  },
  Mutation: {
    setDelay: (obj, { delay }, { ref }) => {
      let docRef = ref.child("delay");
      docRef.set(delay);
      return delay;
    }
  }
};
