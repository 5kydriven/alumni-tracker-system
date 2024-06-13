import { ref } from 'vue';
import { defineStore } from 'pinia';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
    const loading = ref(false);
    const role = ref('');
    const router = useRouter();

    const init = () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const roles = await getDoc(doc(db, 'accountRoles', user.uid));
                const info = await getDoc(doc(db, 'alumni', user.uid));

                localStorage.setItem('uid', user.uid);
                localStorage.setItem('isUpdated', info.data().isAccountUpdated);
                role.value = roles.data().role;
                // loading.value = true;

                if (role.value === 'registrar') {
                    router.push('/registrar');
                } else {
                    router.push('/jobseekers');
                }

            } else {
                router.push('/'); // Redirect to homepage if not authenticated
            }
            // loading.value = false;
        });
    };

    const logoutUser = async () => {
        try {
            await signOut(auth);
            localStorage.clear();
            console.log("User logged out successfully");
        } catch (err) {
            console.error("Error logging out:", err);
        }
    };

    return {
        loading,
        init,
        logoutUser,
    };
});
