import { StylesLink } from "./StylesLink.styles";

const StyledLink = (props) => {
  return (
    <StylesLink to={props.path} {...props}>
      {props.children}
    </StylesLink>
  );
};

export default StyledLink;
