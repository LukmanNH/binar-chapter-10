import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    const { password, ...dataUser } = newUser._doc;
    res.status(201).json({
      status: 201,
      message: "Success created new user",
      data: dataUser,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      error: err.message,
    });
  }
};

export const signIn = async (req, res, next) => {
  try {
    const getUser = await User.findOne({ username: req.body.username });
    const comparePassword = bcrypt.compareSync(
      req.body.password,
      getUser.password
    );
    const token = jwt.sign({ id: getUser._id }, process.env.JWT);
    const { password, ...others } = getUser._doc;
    if (comparePassword) {
      // res
      //   .cookie("access_token", token, {
      //     httpOnly: true,
      //   })
      //   .status(200)
      //   .json(others);
      res.status(200).json({ token: token, user: others });
    } else {
      res.status(400).json({
        status: 400,
        message: "Username or Password is incorrect!",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};

export const logout = async (req, res, next) => {
  res.cookie("access_token", "none", {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ message: "User logged out successfuly" });
};
