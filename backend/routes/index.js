// routes/index.js
import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { importAlumni } from '../controllers/importAlumni.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("server running");
});

router.post("/createUser", createUser);

router.post("/uploadFile", importAlumni);

export default router;
