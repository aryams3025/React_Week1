import React, { useCallback, useState } from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('Button rendered');
  return (
    <button onClick={onClick}>Click me</button>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button onClick={increment} />
      <p>Current count: {count}</p>
    </div>
  );
}

export default App;
