import React from 'react'
import { useState } from 'react'
const Searchmodal = ({products}) => {
    const [inputValue, setInputValue] = useState('');

    const HandleInputValue = (e)=>{
        setInputValue(e.target.value)
    }

    console.log(products)
 
  


    
  return (
    <div>
      <input type="text" value={inputValue} onChange={HandleInputValue} />
      {
        searchresult.map(item=>{
            return(
                <h2 key={item}>{item.name}</h2>
            )
        })
      }
    </div>
  )
}

export default Searchmodal
