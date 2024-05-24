// controllers/userController.js
import admin from 'firebase-admin';

export const createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await admin.auth().createUser({
            email: email,
            password: password,
        });
        res.status(200).send({ uid: user.uid });
    } catch (error) {
        res.status(400).send(error.message);
    }
}
