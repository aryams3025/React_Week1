import React, { useMemo, useState } from 'react';

const ExpensiveComponent = React.memo(({ value }) => {
  console.log('ExpensiveComponent rendered');
  return <div>Value: {value}</div>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const computedValue = useMemo(() => count * 2, [count]);

  return (
    <div>
      <ExpensiveComponent value={computedValue} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
