import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h3>Counter</h3>
      <p>{count ? `You click ${count} times` : 'click please'}</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}
export default Counter;
