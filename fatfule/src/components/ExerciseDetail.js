import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Footer from './Footer';

const BASE_URL = 'https://raw.githubusercontent.com/mohitkhyalia/FatFule/refs/heads/main/exercises.json';
const IMGBASE_URL = 'https://raw.githubusercontent.com/mohitkhyalia/FatFule/refs/heads/main/exercises/';

const getExercisesname = async (name) => {
    try {
      const response = await axios.get(BASE_URL);
      const exercises = response.data;

      const decodedName = decodeURIComponent(name);
        
        const filteredExercises = exercises.find(exercise => 
            exercise.name === decodedName
          );
      
      
      return filteredExercises;
    } catch (error) {
      console.error('Error fetching exercises:', error);
      return [];
    }
  };


const ExerciseDetail = () => {
  const { name } = useParams(); 
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      const data = await getExercisesname(name);
      setExercise(data);
    };
    fetchExercises();
  }, [name]);

  if (!exercise) {
    return <p>Loading exercise details...</p>;
  }
  

  return (
    <>
    <NavBar/>
    <div className='content'>
      
      <h1>{exercise.name}</h1>
      <img src={`${IMGBASE_URL}${exercise.images[1]}`} alt={exercise.name} />
      <h2>How To Apply</h2>
      <h3>{exercise.instructions}</h3>
      <br/>

    </div>
    <Footer/>
    </>
  );
};

export default ExerciseDetail;
