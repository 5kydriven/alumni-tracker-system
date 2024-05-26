import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db } from './firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";

export const useAlumniStore = defineStore('alumni', () => {
    const dialogPosition = ref('center');
    const dialogVisible = ref(false);
    const dialogLoading = ref(false)
    const alumni = ref()

    const openDialog = (pos) => {
        dialogPosition.value = pos;
        dialogVisible.value = true;
        
    }

    const getAlumni = () => {
        try {
            onSnapshot(collection(db, "alumni"), (querySnapshot) => {
                const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({...doc.data()});
                });
                alumni.value = data
            });
        } catch(err) {
            console.log(err)
        }
    }
    
    return { 
        dialogPosition,
        dialogVisible,
        openDialog,
        dialogLoading,
        alumni,
        getAlumni,
     }
})
