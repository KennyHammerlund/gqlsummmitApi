import { ApolloError } from "apollo-server";
import db from "../../utils/firebase";
import { firestore } from "firebase-admin";

const refError = new ApolloError("no Ref found", "EMAIL_ERROR");

export default {
  Query: {
    viewer: async (obj, arg, { asyncRef, deviceId }) => {
      const ref = await asyncRef;
      if (!ref) return refError;
      return ref.once("value").then(snap => ({ id: deviceId, ...snap.val() }));
    }
  },
  Viewer: {
    actions: ({ actions }) => {
      if (!actions) return [];
      return Object.keys(actions).map(k => ({ id: k, ...actions[k] }));
    }
  },
  Mutation: {
    reset: async (obj, { deviceId }, ctx) => {
      if (!deviceId) return false;
      const ref = db.ref(deviceId);
      const result = await ref.set(firestore.FieldValue.delete());
      return { id: deviceId };
    },
    setViewer: async (
      obj,
      { input: { delay, name } },
      { asyncRef, deviceId }
    ) => {
      const ref = await asyncRef;
      if (!ref) return refError;
      let delayRef = ref.child("delay");
      let nameRef = ref.child("name");

      await Promise.all([nameRef.set(name), delayRef.set(delay)]);
      const viewer = await ref.once("value").then(snap => snap.val());
      return { id: deviceId, ...viewer };
    }
  }
};
