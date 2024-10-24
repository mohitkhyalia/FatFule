import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './container.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const BASE_URL = 'https://raw.githubusercontent.com/mohitkhyalia/FatFule/refs/heads/main/exercises.json';
const IMGBASE_URL = 'https://raw.githubusercontent.com/mohitkhyalia/FatFule/refs/heads/main/exercises/';

const getExercisesByMuscleGroup = async (muscle) => {
  try {
    const response = await axios.get(BASE_URL);
    const exercises = response.data;

    const filteredExercises = exercises.filter(exercise =>
      exercise.primaryMuscles.includes(muscle)
    );

    return filteredExercises;
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return [];
  }
};

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscle] = useState('chest'); // default muscle group

  const muscles = [
    'abdominals', 'calves', 'hamstrings', 'shoulders', 'adductors', 'glutes',
    'quadriceps', 'biceps', 'forearms', 'abductors', 'triceps', 'chest',
    'lower back', 'traps', 'middle back', 'lats'
  ];

  const levels = ['beginner', 'intermediate', 'advanced'];

  useEffect(() => {
    const fetchExercises = async () => {
      const data = await getExercisesByMuscleGroup(muscle);
      setExercises(data);
    };
    fetchExercises();
  }, [muscle]);

  // Handler for button clicks to set muscle group or level
  const handleButtonClick = (selectedMuscle) => {
    setMuscle(selectedMuscle);
  };

  return (
    <>
    <NavBar/>
    <div className='content'>
      <h1>Exercise Library</h1>

      {/* Muscle Group and Level Buttons */}
      <div className="button-group">
        <h3>Select Muscle Group</h3>
        <div className="muscle-buttons">
          {muscles.map((muscleGroup, index) => (
            <Link
              key={index}
              className="muscle-btn "
              onClick={() => handleButtonClick(muscleGroup)}
            >
              {muscleGroup}
            </Link >
          ))}
        </div>

       
      </div>
          <h1>{muscle}</h1>
      {/* Displaying exercises */}
      <div className="content">
        {exercises.length > 0 ? ( 
          exercises.map((exercise, index) => (
            <div key={index} className='card'>
              <div className='card-content'>
                <img src={`${IMGBASE_URL}${exercise.images[0]}`} alt={exercise.name} />
              </div>
              <Link  className='btn' to={`/exercise/${exercise.name}`}>
                View
              </Link>
            </div>
          ))
        ) : (
          <p>No exercises found for {muscle}.</p>
        )}
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Exercises;
