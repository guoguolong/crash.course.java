import React from "react";
import PropTypes from "prop-types";

class User extends React.PureComponent {
  render() {
    const {user, onDeleteClick} = this.props;
    console.log(this.props.user.name + ' just rendered');
    return (
      <li>
        <input 
          type="button" 
          value="Delete" 
          onClick={() =>{onDeleteClick(user.id)}} 
        />
        &nbsp;[{user.name}]
      </li>
    );
  }
}

// User.propTypes = {
//   user: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default User;