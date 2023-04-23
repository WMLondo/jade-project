import { OverlayContainer } from "./Overlay.styles";
import ReactDOM from "react-dom";

const Overlay = ({
  isOpen,
  children,
  exitHandler,
  justifyContent,
  alignItems,
}) => {
  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <OverlayContainer
          onClick={exitHandler}
          justifyContent={justifyContent}
          alignItems={alignItems}
        >
          {children}
        </OverlayContainer>
      )}
    </>,
    document.getElementById("overlay-root")
  );
};

export default Overlay;
