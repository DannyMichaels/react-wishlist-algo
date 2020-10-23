import React from 'react'
// import { items } from '../services/itemsList.js'
import Item from './Item'

const itemsList = [
  { "item": "Apple Ipad Mini" },
  { "item": "Vespa Scooter" },
  { "item": "Shake Shack Milkshake" },
  { "item": "12oz Stumptown Coffee" }
]

const downVote = (index) => {
  itemsList.splice(index, - 1, itemsList)
}
const upVote = (index) => {
  itemsList.splice(index, + 1, itemsList)
}

function WishList() {
    
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      {itemsList.map((itemSelect, index) => 
        <Item itemsList={itemSelect.item}
          index={index} upVote={upVote} 
          downVote={downVote}
        />
      )}
      
    </div>
 )
}
  export default WishList;
