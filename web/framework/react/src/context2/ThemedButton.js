import React from 'react'
import {ThemeContext} from './ThemeContext';

export default class ThemedButton extends React.Component {
  static contextType = ThemeContext
  render() {
    let props = this.props;
    let context = this.context;
    return (
      <ThemeContext.Consumer>
        {
          (context) => {
            return <button {...props}
              style={{backgroundColor: context.theme.background, color: context.theme.foreground}}
              onClick={context.toggleTheme}
            >BUTTON</button>
          }
        }
      </ThemeContext.Consumer>
    );
  }
}
