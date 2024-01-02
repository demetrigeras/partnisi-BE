import Profile from "../models/profile.js"


export const getProfiles = async (req, res) => {
  try {
    const profile = await Profile.find();
    res.json(profile);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// export const getProfile = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const profile = await Profile.findById(id);
//     res.json(profile);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ error: error.message });
//   }
// };
export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};


export const createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    console.log(req.body)
    res.status(201).json(profile); 
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id } = req.params;
  const profile = await Profile.findByIdAndUpdate(id, req.body);
  res.status(200).json(profile);
};

export const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Profile.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Profile Deleted!");
    }

    throw new Error("Profile not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};