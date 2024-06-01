<template>
    <UserLayout>
        <div class="w-4/5 mx-auto">
            <form @submit.prevent="updateAccount" class="mt-4 w-2/4 mx-auto space-y-4 lg:mt-10 md:space-y-5"
                v-if="isUpdated">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                        email</label>
                    <input v-model="account.email" type="email" name="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com" required>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
                        Password</label>
                    <input v-model="account.password" type="password" name="password" id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :class="{ 'border-red-500': showPasswordValidation && !isPasswordValid }"
                        @input="onPasswordInput" required>
                    <p v-if="showPasswordValidation && !isPasswordValid" class="text-red-500 text-sm mt-2">Password must
                        be at least 6 characters long</p>
                </div>
                <div>
                    <label for="confirm-password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input v-model="account.confirmPassword" type="password" name="confirm-password"
                        id="confirm-password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :class="{ 'border-red-500': showConfirmPasswordValidation && !isPasswordMatching }"
                        @input="onConfirmPasswordInput" required>
                    <p v-if="showConfirmPasswordValidation && !isPasswordMatching" class="text-red-500 text-sm mt-2">
                        Passwords do not match</p>
                </div>
                <Button type="submit" :disabled="!isFormValid" label="Update Account" />
                </form>
            <div v-else>
                Hello
            </div>
        </div>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { ref, computed } from 'vue';
import { auth } from '@/stores/firebase.js';
import { updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const account = ref({
    email: '',
    password: '',
    confirmPassword: ''
});

const showPasswordValidation = ref(false);
const showConfirmPasswordValidation = ref(false);

const isPasswordValid = computed(() => {
    return account.value.password.length >= 6;
});

const isPasswordMatching = computed(() => {
    return account.value.password === account.value.confirmPassword;
});

const isFormValid = computed(() => {
    return isPasswordValid.value && isPasswordMatching.value;
});

const onPasswordInput = () => {
    if (account.value.password) {
        showPasswordValidation.value = true;
    }
};

const onConfirmPasswordInput = () => {
    if (account.value.confirmPassword) {
        showConfirmPasswordValidation.value = true;
    }
};

const updateAccount = async () => {
    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('No user is signed in');
        }

        // Re-authenticate the user before updating email or password
        const credential = EmailAuthProvider.credential(user.email, '123456');
        await reauthenticateWithCredential(user, credential);

        if (account.value.email) {
            await updateEmail(user, account.value.email);
        }

        if (account.value.password && isFormValid.value) {
            await updatePassword(user, account.value.password);
        } else {
            throw new Error('Passwords do not match or are not valid');
        }

        await setDoc(doc(db, 'alumni', uid), {
            isAccountUpdated: true
        });

        localStorage.setItem('isUpdated', true);
        alert('Account updated successfully');
    } catch (error) {
        console.error('Error updating account:', error);
        alert(error.message);
    }
};

const isUpdated = localStorage.getItem('isUpdated');
const uid = localStorage.getItem('uid');
</script>

