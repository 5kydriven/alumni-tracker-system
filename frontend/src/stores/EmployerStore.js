import { ref } from 'vue';
import { defineStore } from 'pinia';
import { db } from './firebase';
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

export const useEmployerStore = defineStore('employer', () => {
    const visible = ref(false);
    const loading = ref(false)
    const jobData = ref({
        title: '',
        type: '',
        description: '',
        salary: '',
        hours: '',
        email: '',
        person: '',
    })

    const postJob = async () => {
        loading.value = true
        try {
            await setDoc(doc(collection(db, "job-post")), { ...jobData.value, timestamp: serverTimestamp() });
            console.log('submited')
        } catch (error) {
            console.log(error)
        }
        visible.value = false
        loading.value = false
    }

    return {
        jobData,
        postJob,
        visible,
        loading
    }
})