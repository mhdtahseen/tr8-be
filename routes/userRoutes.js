import { getAll } from "../controllers/users.js";
import express from "express";
const router = express.Router();

/* GET */
router.get("/", getAll);

export default router
