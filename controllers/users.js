import express from "express";
const router = express.Router();
import UserCol from "../models/users.js";

/* GET */

export async function getAll(req, res) {
  try {
    const users = await UserCol.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/* GET BY ID */
// router.get("/:id", getUser, (req, res) => {
//   res.json(res.user);
// });

/* ADD NEW USER */
// router.post("/", async (req, res) => {
//   const userData = new UserCol({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     age: req.body.age,
//   });
//   try {
//     const newUser = await userData.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

/* Update BY ID */

// router.patch("/:id", getUser, (req, res) => {});

/* DELETE */

// router.delete("/:id", getUser, async (req, res) => {
//   try {
//     // res.send(res.user);
//     await res.user.deleteOne();
//     res.json({ message: "User Deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

/* Middleware */

export async function getUser(req, res, next) {
  let user;
  try {
    user = await UserCol.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot Find User" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}


