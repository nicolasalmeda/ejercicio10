import React, { useState, useEffect } from 'react';
import ListaCitas from './ListaCitas';

const CitaContainer = () => {
  const [peliculas, setPeliculas] = useState([]);
  
  useEffect(() => {
    const peliculasLocalStorage = JSON.parse(localStorage.getItem('peliculas')) || [];
    updatePeliculasState(peliculasLocalStorage);
  }, [peliculas]);

  const updatePeliculasState = (newPeliculas) => {
    if (JSON.stringify(peliculas) !== JSON.stringify(newPeliculas)) {
      setPeliculas(newPeliculas);
    }
  };

  const handleDeletePeliculas = (id) => {
    const nuevasPeliculas = peliculas.filter((cita) => cita.id !== id);
    setPeliculas(nuevasPeliculas);
    localStorage.setItem('peliculas', JSON.stringify(nuevasPeliculas));
  }
  return (
    <div>
      <ListaCitas peliculas={peliculas} onDelete={handleDeletePeliculas} />
    </div>
  )
}


export default CitaContainer