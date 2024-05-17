import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { db } from './firebase'
import { collection, doc, setDoc, getDocs, query, where, onSnapshot, } from "firebase/firestore"; 

export const useAdminStore = defineStore('admin', () => {
    const admin = ref();
    const adminDialog = ref(false)

    const admninRefs = collection(db, "admin");
  
    const getAdmin = () => {
        return new Promise((resolve, reject) => {
            try {
                onSnapshot(admninRefs, (querySnapshot) => {
                    let a = [];
                    querySnapshot.forEach((doc) => {
                        a.push({...doc.data()})
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

    

  return {
    getAdmin,
    admin,
    adminDialog
   }
})
