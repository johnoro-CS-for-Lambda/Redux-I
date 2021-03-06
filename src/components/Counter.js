import React from 'react';

const Counter = props => {
  return (
    <p className="counter">
      Count: {props.count}
      <button onClick={props.increment}>
				+
			</button>
      <button onClick={props.decrement}>
				-
			</button>
      <button onClick={props.incrementIfOdd}>
				Increment if odd
			</button>
      <button onClick={props.incrementAsync}>
				Increment async
			</button>
    </p>
  );
};

export default Counter;
