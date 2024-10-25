import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotasList.css'

const NotasList = () => {
  const [notas, setNotas] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/notes')
      .then(response => response.json())
      .then(data => setNotas(data))
      .catch(error => console.error('Error al obtener las notas:', error));
  }, []);

  return (
    <div className='notaPrimero'>
      <div className="arriba">
        <div className="titulo">
      <h1>Notes</h1>
        </div>
      <div className="icons">
        <a href="#"><img src="https://cdn-icons-png.freepik.com/512/17139/17139022.png" alt="nueva" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/13124/13124946.png" alt="buscar" /></a>
      </div>
      </div>
      <ul>
        {notas.map(nota => (
          <div className='nota' key={nota._id}>
            <Link to={`/notes/${nota._id}`}>
              {nota.titulo}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NotasList;

