import express from 'express';
import { allotseats, getAllSeats } from '../controllers/seatController.js';
//seat routes
const router = express.Router();

router.route('/book-seats').post(allotseats);

router.route('/').get(getAllSeats);


export default router;