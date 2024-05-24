// server.js
import dotenv from 'dotenv';
import express from 'express';
import admin from 'firebase-admin';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

const serviceKey = process.env.SERVICE_KEY;

admin.initializeApp({
    credential: admin.credential.cert(serviceKey)
});

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
});
