import dotenv from 'dotenv';
import fs from 'fs';
import express from 'express';
import admin from 'firebase-admin';
import cors from 'cors';
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

const serviceKeyPath = process.env.SERVICE_KEY;

const serviceKey = JSON.parse(fs.readFileSync(serviceKeyPath, 'utf8'));

admin.initializeApp({
    credential: admin.credential.cert(serviceKey)
});

app.use(cors());
app.use(express.json());

// Endpoint to check Firebase connection status
app.get("/checkFirebaseConnection", async (req, res) => {
    try {
        // Check if Firebase is initialized
        if (admin.apps.length > 0) {
            res.status(200).json({ message: 'Firebase connection is active' });
        } else {
            res.status(500).json({ message: 'Firebase connection is not active' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error checking Firebase connection', error: error.message });
    }
});


app.get("/", (req, res) => {
    res.send("server running");
});

app.post("/createUser", async (req,res) => {
    const { email, password } = req.body;
    try {
        const user = await admin.auth().createUser({
            email: email,
            password: password,
        });
        res.status(200).send({ uid: user.uid });
    } catch (error) {
        res.status(400).send(error.message);
        // res.status(400).send("error");
    }
})

app.listen(port, () => {
    // console.log(serviceKey)
    console.log(`Server app listening on port ${port}`)
})