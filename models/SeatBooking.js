import mongoose from "mongoose";

//train schema
const seatBookingSchema = new mongoose.Schema({
  seatNumber: {
    type: Number,
    required: true
  },
  occupied: {
    type: Boolean,
    required: true,
    default: false
  },
  passenger: {
    type: Object,
    default: null
  }

},{ collection:'train-booking-data',timestamps:true});

const Seat = mongoose.model('Seat',seatBookingSchema);

export default Seat;