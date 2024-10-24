import { ObjectId } from 'mongodb';
import Conexion from '../helper/db.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Notas extends Conexion{
    constructor(){
        super();
    }

    async obtenerTodasLasNotas() {
        let connection;
        try {
            connection = await this.open();
            if (connection.status !== 200) { 
                throw new Error(connection.message);
            }
            const notas = await connection.db.collection('nota').find().toArray();
            console.log("Notas obtenidas:", notas);
            return { status: 200, message: "Lista de todas las notas", data: notas };
        } catch (error) {
            console.error("Error al obtener notas:", error);
            return { status: 500, message: "Error al obtener las notas" };
        }
    }

    async obtenerNotaPorId(id){
        let connection;
        try {
            connection = await this.open();
            const objectId = new ObjectId(id);
            if (connection.status !== 200) { 
                throw new Error(connection.message);
            }
            const notas = await connection.db.collection('nota').find({_id: objectId}).toArray()
            console.log("Notas obtenidas:", notas);
            return {status: 200, message: "Nota buscada", data: notas}
        } catch (error) {
            console.error(error);
            return {status: 500, message: "Error al obtener la nota"}
        }
    }

    async buscarTituloOcontenido(terminoBusqueda) {
        let connection;
        try {
            connection = await this.open();
            const query = {
                $or: [
                    { titulo: { $regex: terminoBusqueda, $options: 'i' } }, 
                    { contenido: { $regex: terminoBusqueda, $options: 'i' } } 
                ]
            };
            const notas = await connection.db.collection('nota').find(query).toArray();
            return { status: 200, message: "Notas encontradas", data: notas };
        } catch (error) {
            console.error(error);
            return { status: 500, message: "Error al buscar las notas" };
        }
    }

    async obtenerHistorial(id){
        let connection;
        try {
            connection= await this.open()
            const notas = await connection.db.collection('historial').find(id).toArray();
            return {status: 200, message: "Historial obtenido", data:notas}
        } catch (error) {
            console.error(error);
            return {status:500, message: "Error al obtener el historial"}
        }
    }
    
    async eliminarNota(id){
        let connection;
        try {
            connection = await this.open();
            const notas = await connection.db.collection('nota').deleteOne(id)
            return {status: 200, message: "Nota eliminada", data: notas}
        } catch (error) {
            console.error(error);
            return {status:500, message: "error al eliminar la nota",}
        }
    }

    async eliminarUsuarioEspecifico(id){
        let connection;
        try {
            connection = await this.open();
            const notas = await connection.db.collection('usuario').deleteOne(id)
            return {status: 200, message: "Usuario eliminado", data: notas}
        } catch (error) {
            console.error(error);
            return {status:500, message: "Error al eliminar el usuario",}
        }
    }

    async crearNota(titulo, contenido){
        let connection;
        try {
            connection = await this.open();
            const notas = await connection.db.collection('nota').insertOne({ titulo, contenido });
            return {status: 200, message: "Nota creada", data: notas}
        } catch (error) {
            console.error(error);
            return {status: 500, message: "Error al crear la nota" }
        }
    }

    async actualizarNota(id, titulo, contenido) {
        let connection;
        try {
            connection = await this.open();
            const notas = await connection.db.collection('nota').updateOne(
                { _id: new ObjectId(id) },
                { $set: { titulo, contenido } } 
            );
            if (notas.matchedCount === 0) {
                return { status: 404, message: "Nota no encontrada" };
            }
            return { status: 200, message: "Nota actualizada correctamente", data: notas };
        } catch (error) {
            console.error(error);
            return { status: 500, message: "Error al actualizar la nota" };
        }
    }

    async crearUsuario(username, email, password) {
        let connection;
        try {
            connection = await this.open();
            const hashedPassword = await bcrypt.hash(password, 10);
            const nuevoUsuario = await connection.db.collection('usuario').insertOne({ username, email, password: hashedPassword });
            const token = jwt.sign({ userId: nuevoUsuario.insertedId }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
            return { status: 201, message: "Usuario creado", token };
        } catch (error) {
            console.error(error);
            return { status: 500, message: "Error al crear el usuario" };
        }
    }

    async iniciarSesion(email, password) {
        let connection;
        try {
            connection = await this.open();
            const usuario = await connection.db.collection('usuario').findOne({ email });
            if (!usuario) {
                return { status: 404, message: "Usuario no encontrado" };
            }
            const esValido = await bcrypt.compare(password, usuario.password);
            if (!esValido) {
                return { status: 401, message: "Credenciales incorrectas" };
            }
    
            const token = jwt.sign({ userId: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { status: 200, message: "Inicio de sesión exitoso", token };
        } catch (error) {
            console.error(error);
            return { status: 500, message: "Error al iniciar sesión" };
        }
    }

    async actualizarUsuario(id, username, email, role) {
        let connection;
        try {
            connection = await this.open();
            const resultado = await connection.db.collection('usuario').updateOne(
                { _id: new ObjectId(id) },
                { $set: { username, email, role } }
            );
            if (resultado.matchedCount === 0) {
                return { status: 404, message: "Usuario no encontrado" };
            }
            return { status: 200, message: "Usuario actualizado correctamente", data: resultado };
        } catch (error) {
            console.error(error);
            return { status: 500, message: "Error al actualizar el usuario" };
        }
    }
    
    

}

export default Notas;