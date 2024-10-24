import { useState } from 'react'
import ListaDeNotas from './ListaDeNotas'
import BotonAgregarNota from './BotonAgregarNota'
import '../styles/ContenedorNotas.css'

export default function ContenedorNotas() {
  const [notas, setNotas] = useState([
    { id: 1, titulo: 'Conceptos de UI que valen la pena', color: 'fondo-rosa' },
    { id: 2, titulo: 'Reseña: El diseño de las cosas cotidianas por Don Norman', color: 'fondo-rojo' },
    { id: 3, titulo: 'Animes producidos por Ufotable', color: 'fondo-verde' },
    { id: 4, titulo: 'Mangas planeados para leer', color: 'fondo-amarillo' },
    { id: 5, titulo: 'Colección de tweets increíbles', color: 'fondo-azul' },
  ])

  const agregarNota = (titulo) => {
    const nuevaNota = {
      id: notas.length + 1,
      titulo,
      color: `fondo-${['rosa', 'rojo', 'verde', 'amarillo', 'azul'][Math.floor(Math.random() * 5)]}`
    }
    setNotas([...notas, nuevaNota])
  }

  return (
    <div className="contenedor-notas-principal">
      <ListaDeNotas notas={notas} />
      <BotonAgregarNota alAgregar={agregarNota} />
    </div>
  )
}