import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlumniStore = defineStore('alumni', () => {
    const dialogPosition = ref('center');
    const dialogVisible = ref(false);
    const dialogLoading = ref(false)

    const openDialog = (pos) => {
        dialogPosition.value = pos;
        dialogVisible.value = true;
        
    }

    return { 
        dialogPosition,
        dialogVisible,
        openDialog,
        dialogLoading,
     }
})
