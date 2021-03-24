'use strict';

const e = React.createElement;

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      {},
      this.props.current + ' - Time Button'
    );
  }
}

