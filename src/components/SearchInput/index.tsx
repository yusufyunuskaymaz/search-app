import React from "react";
import styles from "./style.module.scss"
import { useNavigate } from "react-router-dom";
import { SearchInputProps } from "../../types";
import Button from "../Button/Button";





export const SearchInput = (props:SearchInputProps) => {
  const {setSearchInput,results,searchInput} = props
  const navigate =  useNavigate()
  let searchValue:string = ""
  console.log(searchInput,"searchIII");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const trimValue = e.target.value.trim();
    if (trimValue.length >= 2 && trimValue !== "") {
      searchValue = trimValue
      setSearchInput(searchValue);
    }
  };
  return (
    <div className={styles.inputContainer}>
      <input defaultValue={searchInput} className={styles.searchInput} type="text" onChange={(e) => handleChange(e)} />
      <Button handleClick={()=>navigate("/results",{state:{results,searchValue}})} text="Search" />
      
    </div>
  );
};
