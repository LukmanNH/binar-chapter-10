import User from "../models/User.js";

export const getUser = async (req, res) => {
  const getAllUser = await User.find();
  res.status(200).json({
    status: 200,
    data: getAllUser,
  });
};

export const updateProfile = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
