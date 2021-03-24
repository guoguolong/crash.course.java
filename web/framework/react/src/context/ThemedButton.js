import React, {useContext} from 'react'
import {ThemeContext} from './ThemeContext';

export default function ThemedButton(props) {
  const ctxData: any = useContext(ThemeContext);
  console.log('Run ....');
  return (
    <button
      {...props}
      style={{backgroundColor: ctxData.background, color:"red", margin: "10px"}}
    >{props.children || 'Default Button'}</button>
  );
}
