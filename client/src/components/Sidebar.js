import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/bookmarks">Bookmarks</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;

