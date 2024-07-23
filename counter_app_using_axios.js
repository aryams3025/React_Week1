import { useState, useEffect } from "react";
import axios from "axios";

// Define the ProfileCard component
function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      {user ? (
        <>
          <h5>{user.name}</h5>
          <h5>{user.email}</h5>
          <h5>{user.phone}</h5>
          <h5>{user.website}</h5>
        </>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data whenever the count changes
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
        setData(response.data);
      } catch (err) {
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <ProfileCard user={data} />}
      <button onClick={incrementCount}> + </button>
      <button onClick={decrementCount}> - </button>
    </div>
  );
}

export default App;
