import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
  title: { type: String, required: true },
  description: { type: String},
  dateTime: { type: Date, required: true },
  location: String,
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  numberOfAttendees: { type: Number, default: 0 }
});

export default mongoose.model('Event', EventSchema);