import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from './firebase'
import { collection, doc, setDoc, getDocs, query, where, onSnapshot, } from "firebase/firestore"; 

export const useAlumniStore = defineStore('alumni', () => {
  const alumni = ref();

  const alumniRefs = collection(db, "alumni");
  
  const filteredAlumni = () => {
    return new Promise((resolve, reject) => {
        try {
            onSnapshot(query(alumniRefs, where("campus", "==", "San Carlos City")), (querySnapshot) => {
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
   }
})
