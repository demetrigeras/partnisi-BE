import AttendanceSchema from "../models/attendance.js";
import EventSchema from "../models/event.js";


export const getattendances = async (req, res) => {
    try {
      const attendance = await AttendanceSchema.find();
      res.json(attendance);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getAttendance = async (req, res) => {
    try {
      const { id } = req.params;
      const attendance = await AttendanceSchema.findById(id);
      res.json(attendance);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

  export const getAttendancesByUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const attendances = await AttendanceSchema.find({ user: userId }).populate('event', 'title');
      res.json(attendances);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
   };

   export const getAttendancesByProfileName = async (req, res) => {
    try {
        // Extracting profilename from request parameters
        const { profilename } = req.params;
       

        // Finding all attendance requests for the given profile name
        // Populating 'event' with its title and 'user' with its name
        const attendances = await AttendanceSchema.find({ profilename })
            .populate({
                path: 'event',
                select: 'title' , type: String
            })
          //   .populate({
          //     path: 'user',
          //     select: 'name'
          // });

        // Sending the found attendances as a response
        res.json(attendances);
    } catch (error) {
        // Logging the error and sending an error response
        console.error('Error fetching attendances by profilename:', error);
        res.status(500).json({ error: error.message });
    }
};


  

  export const createAttendance = async (req, res) => {
    try {
      const attendance = new AttendanceSchema(req.body);
      await attendance.save();
      console.log(req.body)
      res.status(201).json(attendance); 
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };

  export const updateAttendance = async (req, res) => {
    const { id } = req.params;
    const attendance = await AttendanceSchema.findByIdAndUpdate(id, req.body);
    res.status(200).json(attendance);
  };


  export const deleteAttendance = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await AttendanceSchema.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Attendace req Deleted!");
      }
  
      throw new Error("Attendace req found");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
  };