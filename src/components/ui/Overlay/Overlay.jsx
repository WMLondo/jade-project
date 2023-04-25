import { OverlayContainer } from "./Overlay.styles";
import ReactDOM from "react-dom";

const Overlay = ({
  isOpen,
  children,
  justifyContent,
  alignItems,
}) => {

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <OverlayContainer
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
