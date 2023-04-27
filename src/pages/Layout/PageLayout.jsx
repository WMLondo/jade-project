import React from "react";
import {
  Outlet,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { toggleCart } from "../../features/cart/cartSlice";
import Overlay from "../../components/ui/Overlay/Overlay";
import Cart from "../../components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import SearchBarModal from "../../components/ui/Overlay/SearchBarModal/SearchBarModal";
import { useState } from "react";
import ScrollToTop from "../../helpers/ScrollToTop";

const PageLayout = () => {
  const dispatch = useDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const cartIsOpen = useSelector((state) => state.cart.isOpen);
  const cartStatus = useSelector((state) => state.cart.cartStatus);
  ScrollToTop();

  const toggleSearch = () => {
    setIsSearchOpen((isOpen) => !isOpen);
  };

  const querySearchHandler = (searchValue) => {
    if (searchValue.length !== 0)
      navigate({
        pathname: "tienda",
        search: createSearchParams({
          query: searchValue.toLowerCase(),
        }).toString(),
      });
    else
      navigate({
        pathname: "tienda",
      });
    toggleSearch();
  };

  return (
    <>
      <Overlay isOpen={cartIsOpen} justifyContent="flex-end">
        <Cart title={cartStatus} exitHandler={() => dispatch(toggleCart())} />
      </Overlay>
      <Overlay isOpen={isSearchOpen}>
        <SearchBarModal
          exitHandler={toggleSearch}
          searchSubmitHandler={querySearchHandler}
        />
      </Overlay>
      <NavBar toggleSearch={toggleSearch} />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
