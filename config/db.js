import mongo from 'mongoose'
import dotenv from 'dotenv'

mongo.Promise = global.Promise;
dotenv.config();

// Credencials
const userDB = process.env.USER_DB;
const passwordDB = process.env.PASSWORD_DB;

const connectDB = async () => {
    try {
        await mongo.connect(`mongodb+srv://${userDB}:${passwordDB}@cluster0.mgqhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Conectado ao MongoDB');
    } catch(err) {
        console.log('Erro ao tentar estabelecer conexão com o banco de dados', err);
    }
};

export default connectDB;