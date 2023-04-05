import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(1);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    } else {
      //TODO
      //remove item from cart
    }
  };

  return (
    <div className='w-counter h-counter px-2 bg-mainGrey flex items-center justify-between'>
      <p
        className='w-4 h-4 text-sm text-center text-grey font-bold cursor-pointer opacity-30 select-none hover:text-darkOrange hover:opacity-100'
        onClick={decreaseCount}
      >
        -
      </p>
      <p className='h-4 text-sm font-bold select-none'>{count}</p>
      <p
        className='w-4 h-4 text-sm text-center text-grey font-bold cursor-pointer opacity-30 select-none hover:text-darkOrange hover:opacity-100'
        onClick={increaseCount}
      >
        +
      </p>
    </div>
  );
};

export default Counter;
