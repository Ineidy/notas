import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/NotaDetalle.css';

const NotaDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [nota, setNota] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/notes/${id}`)
      .then(response => response.json())
      .then(data => setNota(data[0]))
      .catch(error => console.error('Error al obtener la nota:', error));
  }, [id]);

  const eliminarNota = async () => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta nota?");
    if (!confirmacion) {
      return; 
    }
    try {
      const response = await fetch(`http://localhost:4000/notes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Error al eliminar la nota:', errorData.message);
      }
    } catch (error) {
      console.error('Error al eliminar la nota:', error);
    }
  };

  if (!nota) {
    return <div className='cargando'>Cargando...</div>;
  }

  return (
    <div className='notaDentro'>
      <div className="atras">
        <a href={`/`}>
          <img src="https://cdn-icons-png.freepik.com/512/1174/1174444.png" alt="volver" />
        </a>
        <div className="options"></div>
        <a className='editar' href="#"><img src="https://cdn-icons-png.freepik.com/512/1166/1166931.png" alt="editar" /></a>
        <a className='eliminar' onClick={eliminarNota}>
          <img src="https://cdn-icons-png.freepik.com/512/6099/6099611.png" alt="eliminar" />
        </a>
      </div>
      <h1>{nota.titulo}</h1>
      <p>{nota.contenido}</p>
    </div>
  );
};

export default NotaDetalle;
