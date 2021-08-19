import React, { useState } from 'react';
const Counter = () => {
  React.createElement('h1');

  const [count, setCount] = useState(0);

  // const tags = ['tag1', 'tag2', 'tag3'];

  // const renderTags = () => {
  //   if (tags.length === 0) return 'Тегов не найдено';
  //   return tags.map((tag) => <li key={tag}>{tag}</li>);
  // };

  const formCount = () => {
    return count === 0 ? 'Ноль' : count;
  };

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-';
    classes += count === 0 ? 'danger' : 'primary';
    return classes;
  };

  const handleIncrement = (productId) => {
    // console.log(productId);
    setCount(count + 1);
  };

  const handleDecrement = (productId) => {
    // console.log(productId);
    if (count > 0) setCount(count - 1);
  };

  return (
    <React.Fragment>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button onClick={() => handleDecrement({ id: 1 })} className='btn btn-secondary btn-sm'>
        Decrement
      </button>
      <button onClick={() => handleIncrement({ id: 1 })} className='btn btn-secondary btn-sm'>
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
