import React from 'react';
import mockData from  "./mockData/mock-data.json"


interface MockData {
  cols: string[];
  data: (string | number)[][];
}

const data: MockData = mockData;

const newData = data.data.map((item,index)=>{
  const newObject: any = {};
  data.cols.forEach((col, colIndex) => {
    newObject[col] = item[colIndex];
  });
  return newObject;
})

console.log(mockData,"mock");
console.log(newData[0].name,"neww");

  

function App() {
  return (
    <div className="App">
      {newData[0].city}
    </div>
  );
}

export default App;
