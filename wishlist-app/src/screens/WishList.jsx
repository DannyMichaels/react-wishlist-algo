import React, { useState } from 'react';
import Item from '../Components/Item';
import '../App.css';

function WishList() {
  const [items, setItems] = useState([
    { name: 'Apple iPad Mini' },
    { name: 'Vespa Scooter' },
    { name: 'Shake Shack Milkshake' },
    { name: '12oz Stumptown Coffee' },
  ]);

  const handleVote = (direction, index) => {
    let stopIndex = direction === 'up' ? 0 : items.length - 1;

    if (index === stopIndex) return;

    let oneIndexDown = index - 1,
      oneIndexUp = index + 1;

    const itemToBeMovedIndex = direction === 'up' ? oneIndexDown : oneIndexUp;

    let newItemsState = swap(index, itemToBeMovedIndex);
    setItems(newItemsState);
  };

  const swap = (currentIndex, nextIndex) => {
    let newItems = [...items];
    let temp;

    temp = newItems[nextIndex];

    newItems[nextIndex] = newItems[currentIndex];

    newItems[currentIndex] = temp;

    return newItems;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1 className="home__h1"> Your List </h1>
      {items.map(({ name }, index) => (
        <Item
          itemName={name}
          index={index}
          key={index}
          handleVote={handleVote}
        />
      ))}
    </div>
  );
}
export default WishList;
