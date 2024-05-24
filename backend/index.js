// server.js
import dotenv from 'dotenv';
import express from 'express';
import admin from 'firebase-admin';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

const serviceKey = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
    "universe_domain": process.env.UNIVERSE_DOMAIN
};

admin.initializeApp({
    credential: admin.credential.cert(serviceKey)
});

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
});
