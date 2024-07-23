import { useState } from "react";

// Define the reusable Profile component
function Profile({ name, email, backgroundColor }) {
  return (
    <div className="profile" style={{ backgroundColor }}>
    <center><h5>{name}</h5></center>
      <center><h5>{email}</h5></center>
    </div>
  );
}

function App() {
  // Create an array of profile data with background colors
  const profiles = [
    { id: 1, name: "Arya MS", email: "arya@gmail.com", backgroundColor: "#f8b400" },
    { id: 2, name: "Arun MS", email: "arun@gmail.com", backgroundColor: "#f8b400"}
  ];

  return (
    <div className="App">
      {profiles.map(profile => (
       
        <Profile
          key={profile.id}
          name={profile.name}
          email={profile.email}
          backgroundColor={profile.backgroundColor}
        />
      ))}
    </div>
  );
}

export default App;
