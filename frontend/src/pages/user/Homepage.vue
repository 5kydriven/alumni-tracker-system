<template>
    <UserLayout>
        <Dialog  modal :style="{ width: '25rem' }">
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
        <!-- Main content -->
        <div class="py-5">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <!-- Left Sidebar -->
                    <aside class="lg:col-span-3">
                        <div class="bg-white overflow-hidden shadow rounded-lg">
                            <div class="px-4 py-5 sm:p-6">
                                <!-- Profile Information -->
                                <div class="flex items-center space-x-4">
                                    <img class="h-12 w-12 rounded-full" src="/cpsuLogo.png" alt="User Avatar">
                                    <div class="space-y-1">
                                        <div class="text-base font-medium text-gray-900">User Name</div>
                                        <div class="text-sm font-medium text-gray-500">Student at Central Philippine
                                            State
                                            University</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Additional sections like groups, events can be added here -->
                    </aside>

                    <!-- Main Feed -->
                    <main class="lg:col-span-6">
                        <!-- <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="px-4 py-5 sm:p-6">
                            <div class="flex space-x-4">
                                <img class="h-12 w-12 rounded-full" src="" alt="User Avatar">
                                <div class="min-w-0 flex-1">
                                    <form action="#">
                                        <div class="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
                                            <label for="comment" class="sr-only">Comment</label>
                                            <textarea rows="3" name="comment" id="comment"
                                                class="block w-full py-2 px-3 border-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
                                                placeholder="Start a post..."></textarea>
                                            <div class="py-2 px-3 border-t border-gray-300 bg-gray-50">
                                                <div class="flex justify-between space-x-4">
                                                    <div class="flex-shrink-0">
                                                        <button type="submit"
                                                            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Post</button>
                                                    </div>
                                                    <div class="flex items-center space-x-5">
                                                        <div
                                                            class="flex items-center text-gray-400 hover:text-gray-500">
                                                            <button type="button" class="inline-flex space-x-2">
                                                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none" viewBox="0 0 24 24"
                                                                    stroke="currentColor" aria-hidden="true">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="M14.752 11.168l-4.586-4.586a2.225 2.225 0 00-3.142 3.142l4.586 4.586a2.225 2.225 0 003.142-3.142zM7.2 15H6v-1.2a.6.6 0 00-.6-.6h-.6a.6.6 0 00-.6.6V15h-1.2a.6.6 0 00-.6.6v.6a.6.6 0 00.6.6H6v1.2a.6.6 0 00.6.6h.6a.6.6 0 00.6-.6V16.2h1.2a.6.6 0 00.6-.6v-.6a.6.6 0 00-.6-.6H7.2v-1.2a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6V15z" />
                                                                </svg>
                                                                <span>Photo</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> -->
                        <!-- Feed posts -->
                        <div class="mt-0">
                            <!-- Single post -->
                            <div class="bg-white overflow-hidden shadow rounded-lg mb-4" v-for="i in 10">
                                <div class="px-4 py-5 sm:p-6">
                                    <div class="flex space-x-3">
                                        <img class="h-10 w-10 rounded-full" src="/cpsuLogo.png" alt="User Avatar">
                                        <div class="min-w-0 flex-1">
                                            <p class="text-sm font-medium text-gray-900">User Name</p>
                                            <p class="text-sm text-gray-500">2h ago</p>
                                            <p class="mt-1 text-sm text-gray-700">Post content goes here.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- More posts can be added similarly -->
                        </div>
                    </main>

                    <!-- Right Sidebar -->
                    <!-- <aside class="lg:col-span-3">
                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="px-4 py-5 sm:p-6">
                            <h2 class="text-lg leading-6 font-medium text-gray-900">Add to your feed</h2>
                            <div class="mt-6">
                                <div class="flex items-center space-x-4">
                                    <img class="h-10 w-10 rounded-full" src="" alt="Suggested User">
                                    <div class="space-y-1">
                                        <div class="text-sm font-medium text-gray-900">Suggested User</div>
                                        <div class="text-sm text-gray-500">Job Title</div>
                                    </div>
                                    <button type="button"
                                        class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside> -->
                </div>
            </div>
        </div>
        <!-- <div class="fixed bottom-0 right-8 ">

        <div class="bg-white border border-gray-300 rounded-lg  w-[300px] shadow-lg">
            <div class="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300">
                <h2 class="text-lg font-medium text-gray-900">Messaging</h2>
                <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M6.293 14.707a1 1 0 010-1.414L10.586 9l-4.293-4.293a1 1 0 011.414-1.414L12 7.586l4.293-4.293a1 1 0 011.414 1.414L13.414 9l4.293 4.293a1 1 0 01-1.414 1.414L12 10.414l-4.293 4.293a1 1 0 01-1.414 0z" />
                    </svg>
                </button>
            </div>

            <div class="p-4">
                <div class="mb-4">
                    <p class="text-sm text-gray-500">Franklin Tavarez</p>
                    <p class="mt-1 text-sm text-gray-700">I'd like to offer you a free trial of LinkedIn Premium...</p>
                </div>
                <input type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Type a message...">
            </div>
        </div>
    </div>
 -->


        <!-- drawer component -->
        <div class="fixed z-40 w-[300px] overflow-y-auto bg-white border-t border-gray-200 rounded-t-lg transition-transform bottom-0 right-8"
            :class="isOpen ? 'transform-none' : ' translate-y-full bottom-[60px]'">

            <div class="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between bg-gray-100 border-b border-gray-300"
                @click="toggle">
                <h2 class="text-lg font-medium text-gray-900">Messaging</h2>
                <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M6.293 14.707a1 1 0 010-1.414L10.586 9l-4.293-4.293a1 1 0 011.414-1.414L12 7.586l4.293-4.293a1 1 0 011.414 1.414L13.414 9l4.293 4.293a1 1 0 01-1.414 1.414L12 10.414l-4.293 4.293a1 1 0 01-1.414 0z" />
                    </svg>
                </button>
            </div>

            <div class="p-4">
                <div class="mb-4">
                    <p class="text-sm text-gray-500">Franklin Tavarez</p>
                    <p class="mt-1 text-sm text-gray-700">I'd like to offer you a free trial of LinkedIn Premium...</p>
                </div>
                <input type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Type a message...">
            </div>
        </div>
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

const isOpen = ref(false)

const toggle = () => {
    isOpen.value = !isOpen.value
}

</script>
