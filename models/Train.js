import mongoose from "mongoose";

//train schema
const trainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        default:80
      },
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      fare: {
        type: Number,
        required: true,
      },
      seatsBooked: {
        type: Array,
        default: [],
      },
      status: {
        type: String,
        default: "Yet To Start",
      },

},{ collection:'train-info-data',timestamps:true});

const Train = mongoose.model('Train',trainSchema);

export default Train;