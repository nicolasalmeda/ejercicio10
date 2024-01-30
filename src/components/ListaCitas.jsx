import React from 'react'
import '../css/listCitas.css'

const ListaCitas = ({peliculas,onDelete}) => {
  return (
    <div className="lista-citas">
      <div className='subtitle'>
      <h4>Lista de Peliculas</h4>
      </div>
      <div className='cita-container'>

    {peliculas.length === 0 ? (
      <p>No hay Peliculas disponibles</p>
      ) : (
        peliculas.map((pelicula) => (
          <div key={pelicula.id} className="cita-card">
              <div className='card-title'>
                <h3>{pelicula.nombre}</h3>
              </div>
            <div className='card-body'>
            <p>{`Desripcion: ${pelicula.descripcion}`}</p>
            <p>{`Genero:: ${pelicula.genero}`}</p>
          </div>
          <div className='card-button'>
          <button className='button-cita' onClick={() => onDelete(pelicula.id)}>Eliminar</button>
          </div>
        </div>
      ))
      )}
      </div>
  </div>
  )
}

export default ListaCitas