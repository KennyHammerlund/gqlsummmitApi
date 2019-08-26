import db from "../../utils/firebase";

export default {
  Query: {
    application: async (obj, { input }, ctx) => {
      return {
        online: true
      };
    },
    game: async (obj, { id }) => {
      const delayRef = db.ref("delay");
      const delay = await delayRef.once("value").then(snap => snap.val());
      console.log(`*--delay`, delay);
      return new Promise((res, rej) => {
        const ref = db.ref("games").child(id);
        ref.once("value").then(snap => {
          const snapVal = snap.val();
          const keys = Object.keys(snapVal).filter(k => k !== "name");
          res({ name: snapVal.name, actionIds: keys, gameId: id });
        });
      });
    },
    games: obj => {
      const ref = db.ref("games");
      return ref.once("value").then(snap => {
        const snapVal = snap.val();
        return Object.keys(snapVal).map(key => ({
          id: key,
          ...snapVal[key]
        }));
      });
    }
  },
  Game: {
    actions: obj => {
      if (!obj.actionIds) return null;
      const ref = db.ref("games").child(obj.gameId);
      return ref.once("value").then(snap => {
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
    addGameAction: (obj, { input }) => {
      const { value, type, game } = input;
      let docRef = db.ref("games");
      if (game) {
        docRef.child(game).push({
          type,
          value
        });
      } else {
        const gameRef = docRef.push();
        gameRef.push({
          type,
          value
        });
      }
    },
    addGame: (obj, { input }) => {
      let docRef = db.ref("games");
      const newItem = docRef.push({
        name: input.name
      });

      return {
        name: input.name,
        id: newItem.key
      };
    }
  }
};
