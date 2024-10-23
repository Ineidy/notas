import express from 'express';
const router = express.Router();
import * as notasController from '../controller/notasController.js'

router.get('/', notasController.obtenerTodasLasNotas2)

export default router;