import React from 'react';

const FancyButton = React.forwardRef((props, ref)=> {
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  )
})


export default class RefApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ref = React.createRef();
    return (
      <div>
        <FancyButton ref={ref}>Fancy Button</FancyButton>
        <button onClick={() => ref.current.style.background='green'}>Change Fancy</button>
      </div>
    );
  }
}