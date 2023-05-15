import {
  SearchBarContainer,
  ExitIcon,
  ModalContainer,
  SearchBarField,
  ResultContainer,
  Result,
  ResultLink,
  ResultLabel,
  ResultIcon,
} from "./SearchBarModal.styles";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../../atoms/Button/StandardButton/StandardButton";
import { IoSearch } from "react-icons/io5";
import Image from "../../../atoms/Image/Image";
import { H3 } from "../../../atoms/Title/Title";
import LoadingSpinner from "../../../atoms/LoadingSpinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { searchItems } from "../../../../../features/items/itemsSlices";

const SearchBarModal = React.forwardRef(
  ({ exitHandler, searchSubmitHandler }, ref) => {
    const items = useSelector((state) => state.items);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const searchFieldRef = useRef();

    const onSearchChangeHandler = () => {
      setSearch(searchFieldRef.current.value);
    };

    useEffect(() => {
      dispatch(searchItems({ query: search }));
    }, [search]);

    return (
      <ModalContainer
        ref={ref}
        $isExtended={
          search && items?.filterItems && items?.filterItems?.length > 0
        }
      >
        <ExitIcon onClick={exitHandler} />
        <SearchBarContainer>
          <SearchBarField
            w="auto"
            h="52px"
            placeholder="Buscar productos..."
            ref={searchFieldRef}
            value={search}
            onChange={onSearchChangeHandler}
          />
          <Button
            w="204px"
            h="52px"
            type="button"
            onClick={searchSubmitHandler}
          >
            BUSCAR
            <IoSearch />
          </Button>
        </SearchBarContainer>
        {search && items?.filterItems && items?.filterItems?.length > 0 && (
          <>
            <H3 style={{ alignSelf: "flex-start" }}>
              Resultados de la búsqueda:
            </H3>
            <ResultContainer>
              {items?.isLoading && <LoadingSpinner />}
              {items?.filterItems?.map((resultItem) => (
                <Result key={resultItem.itemId}>
                  <ResultLink to={`/tienda/${resultItem.itemId.toLowerCase()}`}>
                    <Image
                      alt={resultItem.itemSku}
                      url={resultItem.product.productImage}
                      width="48px"
                      height="48px"
                      borderRadius="5px"
                    />
                    <ResultLabel>{resultItem.product.productName}</ResultLabel>
                    <ResultIcon />
                  </ResultLink>
                </Result>
              ))}
            </ResultContainer>
          </>
        )}
      </ModalContainer>
    );
  }
);

export default SearchBarModal;
