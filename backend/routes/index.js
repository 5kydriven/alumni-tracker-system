// routes/index.js
import express from 'express';
import { createUser } from '../controllers/createUser.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("server running");
});

router.post("/createUser", createUser);

export default router;
