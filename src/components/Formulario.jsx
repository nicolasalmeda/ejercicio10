import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import '../css/formulario.css'


const Formulario = () => {
  console.log('formulario')

  const [showAlert, setShowAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if(data.nombre && data.descripcion && data.genero){
      const citasLocalStorage = JSON.parse(localStorage.getItem('peliculas')) || [];
      const nuevaPelicula = { id: Date.now(), ...data };
      const nuevasPeliculas = [...citasLocalStorage, nuevaPelicula];
      localStorage.setItem('peliculas', JSON.stringify(nuevasPeliculas));
      setShowAlert(true);
    }else{
      alert('Complete todos los campos')
    }
  }
  return (
    <div className='container-formulario'>
      {showAlert && (
        <div className='alert'>
          <span>Se ha creado una nueva Pelicula</span>
          <button onClick={() => setShowAlert(false)}>Cerrar</button>
        </div>
      )}
      <div className='subtitle'>
        <h4>Llenar formulario para crear una Pelicula</h4>
      </div>
       <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <label>
          Nombre de Pelicula:
          <input {...register("nombre",{ required: true })} />
          {errors.nombre && <span>Este campo es obligatorio</span>}
        </label>
        <label>
          Descripcion:
          <input {...register("descripcion",{ required: true })} />
          {errors.descripcion && <span>Este campo es obligatorio</span>}
        </label> 
        <label>Generos:</label>
        <select {...register("genero", {required: true})}>
        <option value="comedia">Comedia</option>
        <option value="drama">Drama</option>
        <option value="infatil">Infantil</option>
        </select>
        {errors.genero && <span>Este campo es obligatorio</span>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}


export default Formulario