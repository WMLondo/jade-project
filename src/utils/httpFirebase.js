import { child, get, onValue, ref } from "firebase/database";
import { database } from "../firebase";

export const httpGetObject = (collectionPath, objectId) => {
  const dbRef = ref(database);
  return get(child(dbRef, `${collectionPath}/${objectId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return {};
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const httpGetData = (collectionPath) => {
  const dbRef = ref(database);
  return get(child(dbRef, collectionPath))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const httpGetRealtime = (collectionPath) => {
  try {
    const dbRef = ref(database, collectionPath);
    return onValue(dbRef, (snapshot) => {
      if (snapshot.exists) {
        const array = [];
        snapshot.val().forEach((value) => {
          array.push(value);
        });
        return array;
      } else {
        return [];
      }
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};
