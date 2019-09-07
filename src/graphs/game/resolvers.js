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

export default {
  Query: {
    application: async (obj, { input }, ctx) => {
      return {
        online: true
      };
    },
    game: async (obj, { id }, { ref }) => {
      const gameRef = ref.child("games").child(id);

      const snap = await gameRef.once("value");
      const snapVal = snap.val();
      const keys = Object.keys(snapVal).filter(k => k !== "name");
      return { name: snapVal.name, actionIds: keys, gameId: id };
    },
    games: async (obj, arg, { ref }) => {
      const gameRef = ref.child("games");
      const snap = await gameRef.once("value");
      const snapVal = snap.val();
      console.log(`*--snapVal`, snapVal);
      if (!snapVal) return [];
      return Object.keys(snapVal).map(key => ({
        id: key,
        ...snapVal[key]
      }));
    }
  },
  Game: {
    actions: (obj, arg, { ref }) => {
      if (!obj.actionIds) return null;
      const gameRef = ref.child("games").child(obj.gameId);
      return gameRef.once("value").then(snap => {
        const snapVal = snap.val();
        const gameArr = Object.keys(snapVal).map(key => ({
          id: key,
          ...snapVal[key]
        }));

        return gameArr.filter(action => obj.actionIds.includes(action.id));
      });
    }
  },
  Mutation: {
    addGameAction: (obj, { input }, { ref }) => {
      const { value, type, gameId, timeStamp } = input;
      let docRef = ref
        .child("games")
        .child(gameId)
        .child("actions");
      return addDelay(ref, async () => {
        const newRef = await docRef.push({
          type,
          value,
          timeStamp
        });

        const snap = await docRef.once("value");
        const actions = snap.val();
        return Object.keys(actions).map(k => ({ id: k, ...actions[k] }));
      });
    },
    addGame: async (obj, { input }, { ref }) => {
      let docRef = ref.child("games");

      const snap = await docRef.once("value");
      const games = snap.val();
      Object.keys(games).map(k => {
        if (games[k].name === input.name) {
          console.log(`*--match`, games[k]);
          throw new ApolloError(
            "There is already a game with this name",
            "NO_DUPLICATE"
          );
        }
      });

      const newItem = docRef.push({
        name: input.name
      });
      return addDelay(ref, async () => ({
        name: input.name,
        id: newItem.key
      }));
    }
  }
};
