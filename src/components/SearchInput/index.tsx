import React from "react";

type SearchInputProps = {
  setSearchInput(val:string):void
}

export const SearchInput = (props:SearchInputProps) => {
  const {setSearchInput} = props
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim();
    if (searchValue.length >= 2) {
      setSearchInput(searchValue);
    }else if(searchValue === ""){
      setSearchInput("")
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} />
    </div>
  );
};
