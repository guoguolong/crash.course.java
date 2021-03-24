import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class JQueryApp extends React.Component {
  constructor(props) {
    super(props);
  }
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };
  render() {
    return (
      <div className="long-desc">
        <ul className="profile-info">
          <li><span className="info-title">User Name : </span> Shuvo Habib</li>
        </ul>
        <ul className="profile-info additional-profile-info-list" ref="toggle">
          <li><span className="info-email">Office Email</span> me@shuvohabib.com</li>
        </ul>
        <button className="ellipsis-click" onClick={this.handleToggle}>
          Toggle Contact.
      </button>
      </div>
  );
  }
}