import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { SearchInputProps } from "../../types";
import Button from "../Button/Button";
import zoom from "../../assets/images/Vector.png";

export const SearchInput = (props: SearchInputProps) => {
  const { setSearchInput, results, searchInput } = props;
  const navigate = useNavigate();
  let searchValue: string = "";
  console.log(searchInput, "searchIII");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimValue = e.target.value.trim();
    if (trimValue.length >= 2 && trimValue !== "") {
      searchValue = trimValue;
      setSearchInput(searchValue);
    } else if (trimValue === "") {
      setSearchInput("");
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
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Button
        handleClick={() =>
          navigate("/results", { state: { results, searchValue } })
        }
        text="Search"
      />
    </div>
  );
};
