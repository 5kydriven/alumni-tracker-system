import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useModalStore = defineStore('modal', () => {
    const alumni = ref();


  return {
    filteredAlumni,
    alumni,
   }
})
