import Time from './time.js';
// import Widget from './widget.jsx';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    const time = e(
      Time,
      { current: (new Date()).toString() },
      ''
    )
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      time
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);