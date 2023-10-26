import React from "react";
import styles from "./styles.module.scss";
import { ButtonProps } from "../../types";

const Button = (props: ButtonProps) => {
  const { text, handleClick, type, disabled=false } = props;

  
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={() => handleClick?.()}
        className={styles.button}
        style={{background: disabled ? '#4F75C2': '#204080'}}
        data-test="main-button"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
