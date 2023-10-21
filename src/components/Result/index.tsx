import React from 'react'

type SearchResultProps = {
  results:any[]
}

export const SearchResult = (props:SearchResultProps) => {
  const {results} = props
  console.log(results,"ress");
  return (
    <div>
      {results?.map((item) => (
        <p key={item.id}>{item.nameSurname}</p>
      ))}
    </div>
  )
}

