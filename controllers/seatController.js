import Seat from "../models/SeatBooking.js";
import User from "../models/User.js";
export const allotseats = async (req, res) => {
  // Save the seats to the database
  try {
    console.log(req.body);
    const seats = [];
    const highestSeatNumber = await Seat.find({}).sort({ seatNumber: -1 }).limit(1);
    let seatNumber = 0;
  
  if (highestSeatNumber.length > 0) {
     [{ seatNumber }] = highestSeatNumber;
  }
    let seatAllottedData =[];
    // Create an array of seat objects
    for (let i = 0; i < req.body.seatsbooked; i++) {
      seats.push({
        seatNumber:seatNumber + i + 1,
        occupied: true,
        passenger: null
      });
      seatAllottedData.push(seatNumber+i+1);
    }
    const totalData = await Seat.find({});

    if(totalData.length+seats.length<=80){
        const newSeats = await Seat.create(seats);
        return res.send({message:`Seat Nos:${seatAllottedData.join(',')} is/are allotted`,success:true,data:totalData});
    }else{
        return res.send({
        message:(totalData.length+seats.length)>80? `Seats are not available`:`${80-totalData.length} Seats are available`,
        success: false,
        data: null})
    }
    
  } catch (err) {
    return res.send(err);
  }
};

export const getAllSeats = async(req,res)=>{
  
    try {
      const Seats = await Seat.find().sort({ seatNumber: 1 });;
      return res.status(200).send({
        success: true,
        message: "Traines fetched successfully",
        data: Seats,
      });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
