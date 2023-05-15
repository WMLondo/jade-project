import React from "react";
import Button from "../../../atoms/Button/StandardButton/StandardButton";
import classes from "./OptionCard.module.css";
import Image from "../../../atoms/Image/Image";

const OptionCard = (props) => {
  return (
    <div className={`${classes.container} ${props.optionClassName}`}>
      <Image
        width="100%"
        imgWidth="100%"
        imgHeight="auto"
        borderRadius="5px 5px 0px 0px"
        url={props.src}
        alt={props.alt}
      />
      <div className={classes["content-container"]}>
        <div className={classes["text-container"]}>
          <h3
            className={classes.title}
            style={{ margin: `${props.contentMargin}` }}
          >
            {props.title}
          </h3>
          {props.paragraph && (
            <p className={classes.content}>{props.paragraph}</p>
          )}
        </div>
        <div className={classes[`${props.justifyActions || "js-end"}`]}>
          <Button onClick={props.buttonClick}>{props.buttonLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
