import Train from "../models/Train.js";
export const addTrain = async (req,res)=>{

    try {
        const existingTrain = await Train.findOne({ number: req.body.number });
        if (existingTrain) {
          return res.status(200).json({
            success: false,
            message: "Train already exists",
          });
        }
        const newTrain = new Train(req.body);
        await newTrain.save();
        return res.status(200).send({
          success: true,
          message: "Train added successfully",
        });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
}

export const getAllTrains = async (req, res) => {
        try {
          const Traines = await Train.find(req.body);
          return res.status(200).send({
            success: true,
            message: "Traines fetched successfully",
            data: Traines,
          });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
      };

export const getTrain = async(req,res) =>{
    try {
        const Train = await Train.findById(req.body._id);
        return res.status(200).send({
          success: true,
          message: "Train fetched successfully",
          data: Train,
        });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
}
