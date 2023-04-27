import { StylesLink } from "./StylesLink.styles";

const StyledLink = (props) => {
  return (
    <StylesLink to={props.to} {...props}>
      {props.children}
    </StylesLink>
  );
};

export default StyledLink;
