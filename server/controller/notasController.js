import Notas from '../model/notasModel.js'

export const obtenerTodasLasNotas2 = async (req, res) =>{
    try {
        let notas = new Notas();
        let response = await notas.obtenerTodasLasNotas(); 
        if (response.status === 200) return response.status(200).json(response)
    } catch (error) {
        let err = JSON.parse(error.message)
        if(err.status===500) return  res.status(500).json(err)
    }
} 