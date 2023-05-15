import React from "react";
import { IoStar } from "react-icons/io5";

const Stars = (props) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <IoStar
            key={crypto.randomUUID()}
            color={
              ratingValue <= props.rate
                ? "var(--primary-color)"
                : "var(--neutral-color-min-400)"
            }
            width={props.w}
            height={props.h}
          />
        );
      })}
    </>
  );
};

export { Stars };
