import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">MyApp</div>
      <div className="sidebar-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload Data</Link>
      </div>
    </div>
  );
}

export default Sidebar;