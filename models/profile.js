import mongoose from "mongoose";


const Profile = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
    profilename: { type: String},
    dob: { type: Date },
    bio: { type: String },
    photo: { type: String },

});

export default mongoose.model('profile', Profile);