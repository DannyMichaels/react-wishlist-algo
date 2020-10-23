import React, {useState} from 'react'
// import { items } from '../services/itemsList.js'
import Item from './Item'

const itemsList = [
  { "item": "Apple iPad Mini" },
  { "item": "Vespa Scooter" },
  { "item": "Shake Shack Milkshake" },
  { "item": "12oz Stumptown Coffee" }
]





function WishList() {
  
  const [inventory, setInventory] = useState(itemsList)
  
  const downVote = (index) => {
    const removedElement = inventory.splice(index, + -1, 1, inventory[index])
    inventory.splice(index, 1, removedElement[0])
    setInventory([...inventory])
  }

  const upVote = (index) => {
    const removedElement = inventory.splice(index, + 1, 1, inventory[index])
    inventory.splice(index, 1, removedElement[0])
    setInventory([...inventory])
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{ backgroundColor: '#ebb44c', margin: '20px', width: '70vw', textAlign: 'center', boxShadow: '2px 2px #919191', padding: '10px'}}> Your List </h1>
      {inventory.map((itemSelect, index) => 
        <Item inventory={itemSelect.item}
          index={index} upVote={upVote} 
          downVote={downVote}
        />
      )}
      
    </div>
 )
}
  export default WishList;
