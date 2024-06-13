<template>
    <UserLayout>
        <Dialog :visible="!isUpdated" modal :style="{ width: '25rem' }">
            <template #container="{ closeCallback }">
                <form @submit.prevent="updateAccount" class="w-full space-y-4 md:space-y-5 p-5">
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
                        <p v-if="showPasswordValidation && !isPasswordValid" class="text-red-500 text-sm mt-2">Password
                            must
                            be at least 6 characters long</p>
                    </div>
                    <div>
                        <label for="confirm-password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                            password</label>
                        <input v-model="account.confirmPassword" type="password" name="confirm-password"
                            id="confirm-password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            :class="{ 'border-red-500': showConfirmPasswordValidation && !isPasswordMatching }"
                            @input="onConfirmPasswordInput" required>
                        <p v-if="showConfirmPasswordValidation && !isPasswordMatching"
                            class="text-red-500 text-sm mt-2">
                            Passwords do not match</p>
                    </div>
                    <Button type="submit" :disabled="!isFormValid" label="Update Account" class="w-full" />
                </form>
                <!-- <div v-show="!user.emailVerified">
                    <p v-if="!isEmailVerified">Please verify your new email. A verification email has been sent to {{
                        account.email }}.</p>
                    <p v-else>Hello, your account has been updated.</p>
                </div> -->
            </template>
        </Dialog>
        <div>Welcome</div>
    </UserLayout>
</template>

<script setup>
import UserLayout from '@/layouts/UserLayout.vue';
import { ref, computed, onBeforeMount } from 'vue';
import { auth, db } from '@/stores/firebase.js';
import { updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider, sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

// User account data
const account = ref({
    email: '',
    password: '',
    confirmPassword: ''
});

// Flags for form validation
const showPasswordValidation = ref(false);
const showConfirmPasswordValidation = ref(false);

// Computed properties for form validation
const isPasswordValid = computed(() => account.value.password.length >= 6);
const isPasswordMatching = computed(() => account.value.password === account.value.confirmPassword);
const isFormValid = computed(() => isPasswordValid.value && isPasswordMatching.value);

// Handlers for input events
const onPasswordInput = () => {
    if (account.value.password) showPasswordValidation.value = true;
};
const onConfirmPasswordInput = () => {
    if (account.value.confirmPassword) showConfirmPasswordValidation.value = true;
};

// Flags to handle email verification state
const isUpdated = ref(localStorage.getItem('isUpdated') === 'true');
const isEmailVerified = ref(false);

// Function to update user account
const updateAccount = async () => {
    const { email, password } = account.value;
    const defaultPass = '123456'; // Consider using environment variables for sensitive data

    try {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, defaultPass);
        await reauthenticateWithCredential(auth.currentUser, credential);
        console.log("Reauthenticated");

        await updateEmail(auth.currentUser, email);
        console.log('Email updated to:', email);

        await sendEmailVerification(auth.currentUser);
        console.log('Email verification sent');
        alert('A verification email has been sent to your new email address. Please verify it before logging in.');

        await updatePassword(user, password);
        console.log('Password updated');

        await setDoc(doc(db, 'alumni', auth.currentUser.uid), {
            isAccountUpdated: true,
            email: auth.currentUser.email,
        });
        console.log('Account update recorded in Firestore');

    } catch (error) {
        console.error('Error updating account:', error);
    }
};

</script>
