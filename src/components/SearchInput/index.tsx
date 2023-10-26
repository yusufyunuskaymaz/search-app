import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { SearchInputProps } from "../../types";
import Button from "../Button/Button";
import zoom from "../../assets/images/Vector.png";

export const SearchInput = (props: SearchInputProps) => {
  const {
    setSearchInput,
    setToLocalStorage,
    searchInput,
    isResultPage=false,
    searchResults
  } = props;
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimValue = e.target.value.trim();
    if (trimValue.length >= 2 && trimValue !== "") {
      setSearchInput(trimValue);
    } else if (trimValue === "") {
      setSearchInput("");
    }
  };


  const handleClick = () => {
    if (searchInput === "") {
      window.alert("Please type something...");
    } else {
      navigate("/results");
      setToLocalStorage?.();
    }
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputDiv}>
        <img src={zoom} alt="zoom-icon" />
        <input
          defaultValue={searchInput}
          className={styles.searchInput}
          type="text"
          onChange={handleChange}
          data-test="main-input"
        />
      </div>
      <Button data-test="main-button" type="button" handleClick={handleClick} text="Search" />
    </div>
  );
};
