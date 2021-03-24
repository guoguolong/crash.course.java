import React from 'react';

// const FancyButton = React.forwardRef((props, ref)=>(
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ))


class FancyButton extends React.Component {
  render() {
    return (
      <button className="FancyButton" ref={this.props.forwardedRef}>
        {this.props.children}
      </button>
    )
  }
}

function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Old props:', prevProps);
      console.log('New props:', this.props);
    }

    render() {
      return <Component {...this.props} />;
    }
  }
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

export default logProps(FancyButton)