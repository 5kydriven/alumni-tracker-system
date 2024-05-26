// controllers/userController.js
import admin from 'firebase-admin';

export const importAlumni = async (req, res) => {
    const data = req.body;

    try {
        const db = admin.firestore();
        const batch = db.batch();

        // Iterate over each object in the data array
        for (const obj of data) {
            if (obj.Name && obj.Name.trim() !== '') {
                const name = obj.Name;
                const words = name.split(' '); // Split the name into words
                const lastName = words[words.length - 1]; // Get the last word
                const email = `${lastName.toLowerCase() + obj.Batch}cpsu@example.com`; // Generate email based on the last word
                const password = '123456'; // Default password

                // Create user with generated email and default password
                const userRecord = await admin.auth().createUser({
                    email: email,
                    password: password
                });

                // Add the user's UID and email to the document data
                obj.email = email;

                // Add document creation to the batch
                const docRef = db.collection('alumni').doc(userRecord.uid);
                batch.set(docRef, {
                    ...obj,
                    dateUploaded: admin.firestore.Timestamp.now(),
                });
            }
        }

        // Commit the batch operation
        await batch.commit();

        res.status(200).send({ message: 'Users created and documents uploaded successfully' });
    } catch (error) {
        console.error('Error importing users:', error);
        res.status(500).send({ error: 'Failed to import users' });
    }
}
