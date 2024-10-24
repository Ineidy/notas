import { useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import ListaDeNotas from './components/ListaDeNotas.jsx'
import BotonAgregarNota from './components/BotonAgregarNota.jsx'
import './App.css'

export default function App() {
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
    <div className="min-h-screen bg-gray-900 text-white p-4 contenedor-principal">
      <div className="max-w-4xl mx-auto contenedor-app">
        <Encabezado />
        <ListaDeNotas notas={notas} />
        <BotonAgregarNota alAgregar={agregarNota} />
      </div>
    </div>
  )
}