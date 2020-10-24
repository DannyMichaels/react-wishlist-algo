import React, {useState} from 'react'
import data from '../data'
import Item from '../Components/Item'
import '../App.css'



function WishList() {
  
  const [list, setList] = useState(data)
  
  const downVote = (index) => {
    const removedElement = list.splice(index, +  1, 1, list[index])
    list.splice(index, 1, removedElement[0])  
    setList([...list])
  }

  const upVote = (index) => {
    const removedElement = list.splice(index, - 1, 1, list[index])
    list.splice(index, 1, removedElement[0])
    setList([...list])
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1 className="home__h1"> Your List </h1>
      {list.map((itemSelect, index) => 
        <Item list={itemSelect.item}
          index={index} upVote={upVote} 
          downVote={downVote}
        />
      )}
      
    </div>
 )
}
  export default WishList;
