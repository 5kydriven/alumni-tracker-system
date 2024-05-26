import admin from 'firebase-admin';

export const importAlumni = async (req, res) => {
    const data = req.body;

    // Function to scramble a string randomly
    const scrambleString = (str) => {
        const arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    };

    try {
        const db = admin.firestore();
        const batch = db.batch();

        // Iterate over each object in the data array
        for (const obj of data) {
            if (obj.Name && obj.Name.trim() !== '') {
                const name = obj.Name;
                const words = name.split(' '); // Split the name into words
                const lastName = words[words.length - 1]; // Get the last word
                const scrambledLastName = scrambleString(lastName); // Scramble the last word
                const email = `${scrambledLastName.toLowerCase() + obj.Batch}cpsu@example.com`; // Generate email based on the scrambled last word
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
        res.status(200).send({ message: 'File imported successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to import users' });
    }
};