import React from "react";
import styles from "./style.module.scss"
import { useNavigate } from "react-router-dom";


export type SearchInputProps = {
  setSearchInput(val:string):void;
  searchInput?:string;
  results?: any[]
}

export const SearchInput = (props:SearchInputProps) => {
  const {setSearchInput,results} = props
  const navigate =  useNavigate()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim();
    if (searchValue.length >= 2) {
      setSearchInput(searchValue);
    }else if(searchValue === ""){
      setSearchInput("")
    }
  };
  return (
    <div className={styles.inputContainer}>
      <input className={styles.searchInput} type="text" onChange={(e) => handleChange(e)} />
      <button onClick={()=>navigate("/results",{state:results})} className={styles.searchButton} >Search</button>
    </div>
  );
};
