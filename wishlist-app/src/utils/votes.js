const onUpVote = async (idx) => {
  // swap upwards
  if (idx === 0) return;

  let temp = '';

  temp = items[idx - 1];

  items[idx - 1] = items[idx];

  items[idx] = temp;

  setItems(items);
};

const onDownVote = (idx) => {
  // swap downwards
  if (idx === items.length - 1) return;

  let temp = '';

  temp = items[idx + 1];

  items[idx + 1] = items[idx];

  items[idx] = temp;

  setItems(items);
};
