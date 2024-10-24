import express from 'express';
const router = express.Router();
import * as notasController from '../controller/notasController.js'

router.get('/', notasController.obtenerTodasLasNotas2)
router.get('/:id', notasController.obtenerNotaPorId2)
router.get('/search', notasController.buscarTituloOContenido2)
router.get('/:id/historial', notasController.obtenerHistorial2)

export default router;