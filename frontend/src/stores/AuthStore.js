import { ref } from 'vue'
import { defineStore } from 'pinia'
import { db, auth } from './firebase'
import { collection, doc, setDoc, getDoc, query, where, onSnapshot, } from "firebase/firestore"; 
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router'


export const useAuthStore = defineStore('auth', () => {
  const userId = ref();
  const campus = ref();

  const router = useRouter();

  const init = () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await getDoc(doc(db, "accountRoles", user.uid)).then((data) => {
          localStorage.setItem('role', data.data().role);
          if(data.data().campus) {
            localStorage.setItem('campus', data.data().campus);
          }
        })
        localStorage.setItem('uid', user.uid);
        const role = localStorage.getItem('role')
        if(role  == 'superAdmin') {
          router.push('/superAdmin');
        } else if (role == 'admin') {
          router.push('/admin');
        } else {
          router.push('/survey');
        }
      } else {
        localStorage.clear();
        router.replace('/');
      }
    });
  }


  return {
    userId,
    init,
    userId,
    campus,
   }
})
