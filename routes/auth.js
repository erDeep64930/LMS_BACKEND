import express from "express";
const router = express.Router();

// CONTROLLERS
import { register } from "../controllers/auth";
router.get("/register", register);
// you will get the routes via localhost:8000/api/register

module.exports = router;
