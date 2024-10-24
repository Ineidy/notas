import { MongoClient } from 'mongodb';

export default class connect {
    conection;
    db;
    static instanceConnect;

    constructor() {
        if (connect.instanceConnect) return connect.instanceConnect;
        connect.instanceConnect = this;
        return this;
    }

    async open() {
        const uri = `mongodb://mongo:aUOKhWWBjUpuadetjYuuaojcthHNVyFN@autorack.proxy.rlwy.net:29641`;
        
        try {
            this.conection = new MongoClient(uri);
            await this.conection.connect();
            this.db = this.conection.db("notas");
            this.dbAdmin = this.conection.db('admin');
            this.conection = { status: 200, message: "Conectado", db: this.db };
            console.log(this.conection.message);
            return this.conection;
        } catch (error) {
            this.conection = { status: 400, message: "Error en la uri" };
            console.log(this.conection.message);
            return this.conection;
        }
    }
}
