require("dotenv").config();
const express = require('express')
const admin = require('firebase-admin');
// const cors = require('cors');
const app = express()
const port = process.env.port || 8000;

const serviceAccount = {
  "type": process.env.FIREBASE_TYPE,
  "project_id": process.env.FIREBASE_PROJECT_ID,
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
};

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE,
  databaseURL: process.env.FIREBASE_URL,
});

// app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running");
});

app.post('/createUser', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({
      email: email,
      password: password,
    });
    res.status(200).send({ uid: user.uid });
  } catch (error) {
    res.status(400).send(error.message);
    res.status(400).send("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

