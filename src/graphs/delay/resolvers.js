import db from "../../utils/firebase";

export default {
  Query: {
    delay: obj => {
      let docRef = db.ref("delay");
      return docRef.once("value").then(snap => snap.val());
    }
  },
  Mutation: {
    setDelay: (obj, { delay }) => {
      let docRef = db.ref("delay");
      docRef.set(delay);
      return delay;
    }
  }
};
