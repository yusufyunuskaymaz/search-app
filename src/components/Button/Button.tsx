import React from "react";
import styles from "./styles.module.scss";
import { ButtonProps } from "../../types";

const Button = (props: ButtonProps) => {
  const { text, handleClick } = props;
  return (
    <div>
      <button onClick={()=>handleClick?.()} className={styles.button}>{text}</button>
    </div>
  );
};

export default Button;
