import React from "react";
import Button from "../../Button/Button";
import classes from "./OptionCard.module.css";

const OptionCard = (props) => {
  return (
    <div className={`${classes.container} ${props.optionClassName}`}>
      <div style={{ width: `${props.imgWidth}`, height: `${props.imgHeight}` }}>
        <img
          src={props.src}
          alt="option image"
          className={classes.img}
          style={{ height: `${props.imgHeight}`, width: `${props.imgWidth}` }}
        />
      </div>
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
        <Button
          variant={classes.variant}
          style={{ margin: `${props.contentMargin}` }}
          onClick={props.buttonClick}
        >
          {props.buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default OptionCard;
