import User from "../models/User.js";

export const getUser = async (req, res) => {
  const getAllUser = await User.find();
  res.status(200).json({
    status: 200,
    data: getAllUser,
  });
};

export const updateProfile = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
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
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};
