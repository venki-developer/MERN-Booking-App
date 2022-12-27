import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({path:'./.env'});

const database = process.env.DATABASE;
mongoose.set('strictQuery', false);
// console.log(database);
const db = ()=>{
    mongoose.connect(database,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    });
}

export default db;