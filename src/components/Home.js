import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="welcome-box">
        <h1>WELCOME TO ChurnIT</h1>
      </div>
      <div className="content-box">
        <p>Explaining Churn IT</p>
        <p>1M+ customers satisfied</p>
        <Link to="/upload">
          <button className="upload-button">Upload Data</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
