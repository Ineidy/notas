import express from 'express';
import cors from 'cors'
const app = express()

app.use(cors());

import notasRouter from './routes/notasRouter.js'

app.use(express.json());

app.use('/notes', notasRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
    
})
