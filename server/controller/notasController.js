import Notas from '../model/notasModel.js'

export const obtenerTodasLasNotas2 = async (req, res) => {
    try {
        let notas = new Notas();
        let response = await notas.obtenerTodasLasNotas(); 
        if (response.status === 200) {
            return res.status(200).json(response.data); 
        } else {
            return res.status(response.status).json({ message: response.message }); 
        }
    } catch (error) {
        console.error("Error al obtener notas:", error.message);
        return res.status(500).json({ message: "Error interno del servidor", detail: error.message });
    }
};

export const obtenerNotaPorId2 = async (req, res) => {
    try {
        let nota = new Notas();
        let response = await nota.obtenerNotaPorId(req.params.id);
        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(response.status).json({ message: response.message });
        }
    } catch (error) {
        console.error("Error al obtener la nota:", error.message);
        return res.status(500).json({ message: "Error interno del servidor", detail: error.message });
    }
}