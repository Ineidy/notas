import '../styles/ListaDeNotas.css'
import { useEffect, useState } from 'react';


export default function ListaDeNotas() {
  const [notas, setNotas] = useState([]);
  useEffect(() => {
    const obtenerNotas = async () => {
      try {
        const response = await fetch('http://localhost:4000/notes/');
        const data = await response.json(); 
        if (data.status === 200) {
        } else {
          console.error('Error en la respuesta:', data.message);
        }
      } catch (error) {
        console.error('Error al obtener las notas:', error);
      }
    };

    obtenerNotas(); 
  }, []); 


  return (
    <div className="contenedor-notas">
      {notas.map((nota) => (
        <div key={nota.id} className={`tarjeta-nota ${nota.color}`}>
          <h2 className="titulo-nota">{nota.titulo}</h2>
        </div>
      ))}
    </div>
  )
}