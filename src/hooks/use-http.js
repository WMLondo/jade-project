import { database } from "../firebase";
import { ref as databaseRef, get } from "firebase/database";
import { useState, useEffect } from "react";

const useHttp = (collectionPath) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      const ref = databaseRef(database, collectionPath);
      get(ref)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const array = [];
            snapshot.forEach((el) => {
              array.push(el.val());
            });
            setData(array);
          } else {
            setData([]);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  }, [collectionPath]);

  return { data, error, isLoading };
};

export default useHttp;
