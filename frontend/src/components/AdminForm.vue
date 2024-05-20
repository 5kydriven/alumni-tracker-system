<template>
    <form @submit.prevent="addAdmin(adminData)">
        <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="col-span-2 sm:col-span-1">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" v-model="adminData.name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus</label>
                <select required v-model="adminData.campus"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option disabled value="">Select category</option>
                    <option value="San Carlos City">San Carlos City</option>
                    <option value="Kabankalan City">Kabankalan City</option>
                </select>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" v-model="adminData.email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" v-model="adminData.password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required>
            </div>

            <div class="col-span-2">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                <input @change="detectImage"
                    class="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="file">
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300">A profile picture is
                    useful to confirm you're logged in</div>
            </div>

        </div>
        <div class="w-full flex justify-end">
            <Button type="submit" label="Add" severity="success" :loading="loading" />
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { db, storage, auth } from '@/stores/firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, setDoc, addDoc, doc } from 'firebase/firestore'
import { useToast } from 'primevue/usetoast';
import { useAdminStore } from '@/stores/AdminStore';

const store = useAdminStore();
const toast = useToast();
const loading = ref(false)
let file;
let path;


const adminData = ref({
    name: "",
    email: "",
    campus: "",
    password: "",
    image: ""
});



const addAdmin = async (cred) => {
    loading.value = true
    try {
        const response = await fetch('http://localhost:8000/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: cred.email,
                password: cred.password,
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (!file) {
            await getDownloadURL(storageRef(storage, 'profiles/defaultuser.png')).then((url) => {
                adminData.value.image = url;
            })
        } else {
            await uploadBytes(storageRef(storage, path), file).then((snapshot) => {
                console.log("added image");
            });
            await getDownloadURL(storageRef(storage, path)).then((url) => {
                adminData.value.image = url;
            })
        }
        await setDoc(doc(db, "accountRoles", data.uid), { role: 'admin', campus: cred.campus });
        await setDoc(doc(db, "admin", data.uid), {
            name: cred.name,
            email: cred.email,
            campus: cred.campus,
            image: cred.image,
        });
        
        store.adminDialog = !store.adminDialog
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Admin has been added', life: 2000 });
        loading.value = false
    } catch (err) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong', life: 2000 });
        console.log(err)
    }
}

const detectImage = (e) => {
    file = e.target.files[0];
    adminData.value.image = file.name;
    path = 'profile/' + file.name;
}
</script>