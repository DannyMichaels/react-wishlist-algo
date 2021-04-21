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

  // I kinda like this approach more, easier to read.
  //  it was fun to make a swap algo with splice though.

  const onUpVote = async (idx) => {
    // swap upwards
    if (idx === 0) return;

    let temp = '';
    let newItems = [...items];

    temp = newItems[idx - 1];
    console.log('temp:', temp);

    console.log(
      `putting ${JSON.stringify(newItems[idx - 1])} where ${JSON.stringify(
        newItems[idx]
      )} was`
    );

    newItems[idx - 1] = newItems[idx];

    console.log(`so now items look like: ${JSON.stringify(newItems)}`);

    console.log(
      `replacing newItems[${idx}]: ${JSON.stringify(
        newItems[idx]
      )} with temp: ${JSON.stringify(temp)}`
    );

    newItems[idx] = temp;

    console.log('final state after all operations:', newItems);

    setItems(newItems);
  };

  const onDownVote = (idx) => {
    // swap downwards
    if (idx === items.length - 1) return;

    let temp = '';
    let newItems = [...items];

    temp = newItems[idx + 1];

    console.log('temp:', temp);

    console.log(
      `putting ${JSON.stringify(newItems[idx + 1])} where ${JSON.stringify(
        newItems[idx]
      )} was`
    );

    newItems[idx + 1] = newItems[idx];

    console.log(`so now items look like: ${JSON.stringify(newItems)}`);

    console.log(
      `replacing newItems[${idx}]: ${JSON.stringify(
        newItems[idx]
      )} with temp: ${JSON.stringify(temp)}`
    );

    newItems[idx] = temp;

    console.log('final state after all operations:', newItems);

    setItems(newItems);
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
          upVote={onUpVote}
          downVote={onDownVote}
        />
      ))}
    </div>
  );
}
export default WishList;
