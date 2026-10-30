import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export async function registerUser(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully!!!",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Invalid user data",
        error: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Error in registering account",
      error: error.message,
    });
  }
}
