export const downVote = (index) => {
  if (index >= items.length - 1) return;

  const [removedElement] = items.splice(index + 1, 1, items[index]);

  items.splice(index, 1, removedElement);

  setItems([...items]);
};

export const upVote = (index) => {
  if (index === 0) return;

  const [removedElement] = items.splice(index - 1, 1, items[index]); // say we select item in index 3, we take index 2 and movie it from index 2 to 3, but at this step it's going to stay at both indexes.

  items.splice(index, 1, removedElement);

  setItems([...items]);
};
