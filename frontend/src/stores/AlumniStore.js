import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db, auth } from './firebase'
import { collection, doc, setDoc, getDoc, query, where, onSnapshot, } from "firebase/firestore"; 

export const useAlumniStore = defineStore('alumni', () => {
    const alumni = ref();
    const allAlumni = ref()
    const alumniDialog = ref(false)

    const alumniRefs = collection(db, "alumni");
  
    const filteredAlumni = (campus) => {
        return new Promise(async (resolve, reject) => {
            try {
                    // Query the alumni collection based on the admin's campus
                    const alumniQuery = query(alumniRefs, where("campus", "==", campus));
                    onSnapshot(alumniQuery, (querySnapshot) => {
                        let alumniList = [];
                        querySnapshot.forEach((doc) => {
                            alumniList.push({ ...doc.data() });
                        });
                        alumni.value = alumniList;
                        resolve(); // Resolve the promise with the filtered alumni
                    });

            } catch (err) {
                console.log(err);
                reject(err); // Reject the promise if there's an error
            }
        });
    };

    const getAlumni = () => {
        return new Promise((resolve, reject) => {
            try {
                onSnapshot(alumniRefs, (querySnapshot) => {
                    let a = [];
                    querySnapshot.forEach((doc) => {
                        a.push({...doc.data()})
                    });
                    alumni.value = a;
                    resolve(); // Resolve the promise when the data is fetched
                });
            } catch (err) {
                console.log(err);
                reject(err); // Reject the promise if there's an error
            }
        });
    }

  return {
    filteredAlumni,
    alumni,
    alumniDialog,
    getAlumni,
   }
})
