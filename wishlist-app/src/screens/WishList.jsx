import React, { useState } from 'react';
import Item from '../Components/Item';
import '../App.css';

function WishList() {
  const [items, setItems] = useState([
    { item: 'Apple iPad Mini' },
    { item: 'Vespa Scooter' },
    { item: 'Shake Shack Milkshake' },
    { item: '12oz Stumptown Coffee' },
  ]);

  const downVote = (index) => {
    if (index >= items.length - 1) return;
    console.log('initial state of items:', items);

    let newItems = [...items];

    console.log(
      `replacing element at index ${index + 1}: ${JSON.stringify(
        items[index + 1]
      )} with element at index ${index}: ${JSON.stringify(
        items[index]
      )} and taking the replaced ${JSON.stringify(
        items[index + 1]
      )} element into a variable, this removedelement variable isn't going to be present in the array until the next operation`
    );

    const [removedElement] = newItems.splice(index + 1, 1, newItems[index]);

    console.log({ removedElement });
    console.log(`so now the items look like ${JSON.stringify([...newItems])}`);

    console.log(
      `replace item at index ${index}: ${JSON.stringify(
        items[index]
      )} with the saved variable removedElement item at ${items.indexOf(
        removedElement
      )}: ${JSON.stringify(
        items.find((_, idx) => idx === items.indexOf(removedElement))
      )}`
    );

    newItems.splice(index, 1, removedElement);

    console.log(
      `after all operations: item at index ${index}`,
      newItems[index]
    );
    console.log(
      `after all operations: item at index ${index + 1}`,
      newItems[index + 1]
    );

    console.log('final state after all operations:', newItems);

    setItems([...newItems]);
  };

  const upVote = (index) => {
    if (index === 0) return;
    console.log('initial state of items:', items);

    let newItems = [...items];

    console.log(
      `replacing element at index ${index - 1}: ${JSON.stringify(
        items[index - 1]
      )} with element at index ${index}: ${JSON.stringify(
        items[index]
      )} and taking the replaced ${JSON.stringify(
        items[index - 1]
      )} element into a variable, this removedElement variable isn't going to be present in the array until the next operation`
    );

    const [removedElement] = newItems.splice(index - 1, 1, newItems[index]); // say we select item in index 3, we take index 2 and movie it from index 2 to 3, but at this step it's going to stay at both indexes.

    console.log({ removedElement });
    console.log(`so now the items look like ${JSON.stringify([...newItems])}`);

    console.log(
      `replace item at index ${index}: ${JSON.stringify(
        items[index]
      )} with the saved variable removedElement item at ${items.indexOf(
        removedElement
      )}: ${JSON.stringify(
        items.find((_, idx) => idx === items.indexOf(removedElement))
      )}`
    );

    newItems.splice(index, 1, removedElement);

    console.log(
      `after all operations: item at index ${index}`,
      newItems[index]
    );
    console.log(
      `after all operations: item at index ${index - 1}`,
      newItems[index - 1]
    );

    console.log('final state after all operations:', newItems);

    setItems([...newItems]);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1 className="home__h1"> Your List </h1>
      {items.map(({ item }, index) => (
        <Item
          item={item}
          index={index}
          key={index}
          upVote={upVote}
          downVote={downVote}
        />
      ))}
    </div>
  );
}
export default WishList;
