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
      <h1 style={{ backgroundColor: '#ebb44c', marginTop: '20px', width: '40vw', textAlign: 'center', boxShadow: '2px 2px #919191', padding: '10px'}}> Your List</h1>
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
