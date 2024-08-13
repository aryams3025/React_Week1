import React, { useState, useContext, createContext } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemeComponent() {
  const { theme, setTheme } = useContext(ThemeContext);


  const backgroundColor = theme === 'light' ? '#fff' : '#333';
  const color = theme === 'light' ? '#000' : '#fff';

  return (
    <div style={{ backgroundColor, color, height: '100vh', transition: 'background-color 0.3s' }}>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change theme
      </button>
    </div>
  );
}

// App component
function App() {
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
}

export default App;
