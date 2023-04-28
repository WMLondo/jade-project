import {
  SearchBarContainer,
  ExitIcon,
  ModalContainer,
  OptionResults,
  OptionResult,
} from "./SearchBarModal.styles";
import React from "react";
import Field from "../../Input/Field/Field";
import Button from "../../Button/Button";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import useHttp from "../../../../hooks/useHttp";
import Divider from "../../Divider/Divider";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const SearchBarModal = React.forwardRef(
  ({ exitHandler, searchSubmitHandler }, ref) => {
    const [inputSearch, setInputSeach] = useState("");
    const { data, error } = useHttp("items");
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const onSearchChangeHandler = (e) => {
      setInputSeach(e.target.value);
    };

    const searchSimilarItemsHandler = async () => {
      setLoading(false);
      await setItems(data.filter((item) => item.product === inputSearch));
      setLoading(true);
      if (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      searchSimilarItemsHandler;
    }, [inputSearch]);

    return (
      <ModalContainer ref={ref}>
        <SearchBarContainer>
          <ExitIcon onClick={exitHandler} />
          <Field
            style={{ width: "448px", height: "52px" }}
            value={inputSearch}
            onChange={onSearchChangeHandler}
            placeholder="Buscar Producto"
            onKeyPress={(e) => {
              if (e.key === "Enter") searchSubmitHandler(inputSearch);
            }}
          />
          <Button
            style={{ width: "204px", height: "52px" }}
            onClick={() => searchSubmitHandler(inputSearch)}
          >
            BUSCAR
            <IoSearch />
          </Button>
        </SearchBarContainer>
        {loading && <LoadingSpinner />}
        {items.length > 0 && (
          <OptionResults>
            <Divider />
            {items.map((item) => {
              return (
                <OptionResult
                  onClick={() => setInputSeach(item.product.productName)}
                >
                  {item.product.productName}
                </OptionResult>
              );
            })}
          </OptionResults>
        )}
      </ModalContainer>
    );
  }
);

export default SearchBarModal;
