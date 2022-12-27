import express from 'express';
import dotenv from 'dotenv';
import db from './config/mongoose.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'
import seatRoutes from './routes/seatRoutes.js'

dotenv.config();
db();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use('/api/users',userRoutes);
app.use('/api/seats',seatRoutes);
app.listen(port,()=>{
    console.log('listening on port '+port);
});