import React, {useState} from 'react'
import {ThemeContext, themes} from './ThemeContext';
import Toolbar from './Toolbar';
import ThemedButton from './ThemedButton';

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.dark
      ? themes.light
      : themes.dark
    );
  }

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} /><br/>
        <ThemedButton >Inside Context</ThemedButton>
      </ThemeContext.Provider>
      <section>
        <ThemedButton>Outside Context</ThemedButton>
      </section>
    </div>
  );
}
