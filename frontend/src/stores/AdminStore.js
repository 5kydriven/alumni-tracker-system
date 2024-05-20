import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from './firebase'
import { getDoc, doc, collection, query, where, onSnapshot } from 'firebase/firestore'

export const useAdminStore = defineStore('Store', () => {
    const totalAlumni = ref()
    const employedAlumni = ref()
    const unemployedAlumni = ref()
    const admin = ref();
    const adminDialog = ref(false)
    

    const admninRefs = collection(db, "admin");


    const getAllAlumni = async (adminId) => {
        try {
            const getAdmin = await getDoc(doc(db, 'admin', adminId));
            if (!getAdmin.exists()) {
                console.error('Admin not found');
                return;
            }
            const campus = getAdmin.data().campus;

            const q = query(collection(db, "alumni"), where("campus", "==", campus));
            onSnapshot(q, (querySnapshot) => {
                const alumni = [];
                let employedCount = 0;
                let unemployedCount = 0;

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    alumni.push(data);
                    if (data.employment.status == 'Employed') {
                        employedCount++;
                    } else if (data.employment.status == 'Unemployed') {
                        unemployedCount++;
                    }
                });

                totalAlumni.value = alumni.length;
                employedAlumni.value = employedCount;
                unemployedAlumni.value = unemployedCount;
            });
        } catch (err) {
            console.log(err);
        }
    };


    const getAdmin = () => {
        return new Promise((resolve, reject) => {
            try {
                onSnapshot(admninRefs, (querySnapshot) => {
                    let a = [];
                    querySnapshot.forEach((doc) => {
                        a.push({...doc.data(), id: doc.id})
                    });
                    admin.value = a;
                    resolve(); // Resolve the promise when the data is fetched
                });
            } catch (err) {
                console.log(err);
                reject(err); // Reject the promise if there's an error
            }
        });
    }

    const getOverallAlumni = () => {
        try {
            onSnapshot(collection(db, "alumni"), (querySnapshot) => {
                const alumni = [];
                let employedCount = 0;
                let unemployedCount = 0;

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    alumni.push(data);
                    if (data.employment.status == 'Employed') {
                        employedCount++;
                    } else if (data.employment.status == 'Unemployed') {
                        unemployedCount++;
                    }
                });

                totalAlumni.value = alumni.length;
                employedAlumni.value = employedCount;
                unemployedAlumni.value = unemployedCount;
            });
        } catch (err) {
            console.log(err);
        }
    }

    

    const openAdminDialog = () => {
    adminDialog.value = !adminDialog.value;
};

    return {
        getAllAlumni,
        totalAlumni,
        employedAlumni,
        unemployedAlumni,
        getAdmin,
        admin,
        getOverallAlumni,
        openAdminDialog,
        adminDialog,
    }
})
