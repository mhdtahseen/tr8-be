import { getAll, getUser ,getSingleUser, addUser } from "../controllers/users.js";
import express from "express";
const router = express.Router();

/* GET */
router.get("/", getAll);
router.get("/:id", getUser, getSingleUser);
router.post("/", addUser)

export default router
