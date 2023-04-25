import { storage } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import useJsonToArray from "./useJsonToArray";

const useHttp = (collectionPath) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const jsonToArray = useJsonToArray();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const dataRef = ref(storage, collectionPath);
      let snapshotData = null;
      await onValue(dataRef, (snapshot) => {
        snapshotData = snapshot.val();
      });

      if (snapshotData != null) {
        const jsonTranformer = jsonToArray(snapshotData);
        setData(jsonTranformer);
      } else {
        setData([]);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [collectionPath]);

  return { data, error, isLoading };
};

export default useHttp;
