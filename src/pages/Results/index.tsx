import React from 'react'
import { useLocation } from 'react-router-dom'
import { IUser } from '../../types';

export const Results = () => {
  let {state:data} = useLocation() as { state: IUser[] };
  data = data.slice(0,5)
  console.log(data);
  return (
    <div>
      {
        data.map(item=>{
          return (
            <div>
              <p>{item.nameSurname}</p>
            </div>
          )
        })
      }
    </div>
  )
}

