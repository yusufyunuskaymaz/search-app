import React,{useState} from "react";
import AppRouter from "./routing/AppRouter";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="container">
      <AppRouter searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
}

export default App;
