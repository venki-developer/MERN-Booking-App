import express from 'express';
import dotenv from 'dotenv';
import db from './config/mongoose.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'
import SeatRoutes from './routes/SeatRoutes.js'

dotenv.config();
db();
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use('/api/users',userRoutes);
app.use('/api/seats',SeatRoutes);
app.listen(port,()=>{
    console.log('listening on port '+port);
});