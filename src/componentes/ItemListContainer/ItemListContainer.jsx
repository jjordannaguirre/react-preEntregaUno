import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {


  return (
    <div>
        <h2 style={{color:"blue"}}>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer