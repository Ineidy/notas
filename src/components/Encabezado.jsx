import { Search, Info } from 'lucide-react'
import '../styles/Encabezado.css'

export default function Encabezado() {
  return (
    <header className="encabezado-principal">
      <h1 className="titulo-principal">Notas</h1>
      <div className="contenedor-botones-encabezado">
        <button aria-label="Buscar" className="boton-buscar">
          <Search className="icono-buscar" />
        </button>
        <button aria-label="Información" className="boton-informacion">
          <Info className="icono-informacion" />
        </button>
      </div>
    </header>
  )
}