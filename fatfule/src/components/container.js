import React from 'react';
import { Link } from "react-router-dom";
import './container.css';
import Exercises from './Exer';


function Card({ imageUrl, title }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <button>Start Workout</button>
    </div>
  );
}

const Container = () => {
  return (
    <div className="app-container">
      
        <Exercises/>
        
    </div>
    
  );
}; 

export default Container;
