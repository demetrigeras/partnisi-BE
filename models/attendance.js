import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  profilename: { type: String, required: true },
  username: { type: String, required: true },
});

export default mongoose.model('AttendanceRequest', AttendanceSchema);
