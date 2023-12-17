import React from "react";
import styles from "./option.module.scss";

export const OptionResponse = (props: any) => {
  return (
    <div className={styles.container_option}>
      <p>
        <span>{props.letter}:</span>
        {props.option}
      </p>
    </div>
  );
};
