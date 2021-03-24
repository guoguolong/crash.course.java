import React from 'react'

export default function Toolbar(props) {
  return (
    <div>
        <button onClick={props.changeTheme}>
          Change Theme
        </button>
    </div>
  );
}