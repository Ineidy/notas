import { Plus } from 'lucide-react'
import '../styles/BotonAgregarNota.css'

export default function BotonAgregarNota({ alAgregar }) {
  const manejarClic = () => {
    const titulo = prompt('Ingrese el título de la nota:')
    if (titulo) alAgregar(titulo)
  }

  return (
    <button
      onClick={manejarClic}
      className="boton-agregar-nota"
      aria-label="Agregar nueva nota"
    >
      <Plus className="icono-agregar" />
    </button>
  )
}