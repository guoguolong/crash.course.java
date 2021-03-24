import React from 'react'
import {ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';

let isFirst = 1;
// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

function Inter(props) {
  return (
    <ThemedButton />
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: () => {
        this.setState(state => {
          let theme = state.theme === themes.dark ? themes.light : themes.dark;
          if (isFirst) {
            isFirst = false;
            theme = themes.green;
          }

         return {theme}
       });
      }
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Inter />
        </ThemeContext.Provider>
      </div>
    );
  }
}
