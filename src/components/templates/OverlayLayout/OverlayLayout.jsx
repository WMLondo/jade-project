import { OverlayContainer } from "./OverlayLayout.styles";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  const { isOpen, children, justifyContent, alignItems } = props;

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
