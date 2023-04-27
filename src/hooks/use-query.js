import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchItems } from "../features/items/itemsSlices";
import { useEffect, useState } from "react";

const useQuery = () => {
  const filteredItems = useSelector((state) => state.items.filterItems);
  const [isResult, setIsResult] = useState(false);
  const [search] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const query = search.get("query");
    const sort = search.get("sort");
    dispatch(searchItems({ query, sort }));

    if (filteredItems && filteredItems.length > 0) {
      setIsResult(true);
    }
  }, [search]);

  return { isResult, filteredItems };
};

export default useQuery;
