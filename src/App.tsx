import React, { useEffect, useState } from "react";
import mockData from "./mockData/mock-data.json";
import useDebounce from "./hooks/useDebounce";
import { SearchInput } from "./components/SearchInput";
import { SearchResult } from "./components/Result";

interface MockData {
  cols: string[];
  data: (string | number)[][];
}

const data: MockData = mockData;

const newData = data.data.map((item, index) => {
  const newObject: any = {};
  data.cols.forEach((col, colIndex) => {
    newObject[col] = item[colIndex];
  });
  return newObject;
});

function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const debounceResult = useDebounce(searchInput, 1000);

  const results = newData.filter((item) => {
    return item.nameSurname
      .toLocaleLowerCase()
      .includes(debounceResult.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <SearchInput setSearchInput={setSearchInput} />
      <SearchResult results={results} />
    </div>
  );
}

export default App;
