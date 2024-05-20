require("dotenv").config();
const express = require('express')
const admin = require('firebase-admin');
const cors = require('cors');
const app = express()
const port = process.env.port || 8000;

const serviceAccount = require('./key.json');

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors());

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

app.post('/deleteUser', async (req, res) => {
  const {uid} = req.body
  try {
    await admin.auth().deleteUser(uid)
    res.status(200).send({msg: 'Succesfully deleted' + uid});
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})

