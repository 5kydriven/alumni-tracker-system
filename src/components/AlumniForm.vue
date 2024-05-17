<template>
    <form @submit.prevent="addAlumni(data)">
        <!-- Personal Information -->
        <div class="grid gap-4 mb-4 sm:grid-cols-3">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                    Name</label>
                <input type="text" v-model="data.firstname" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle
                    Name</label>
                <input type="text" v-model="data.middlename"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                    Name</label>
                <input type="text" v-model="data.lastname" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>

        </div>

        <!-- Contact Details -->
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact
                    Number</label>
                <input type="number" v-model="data.contactnumber" require
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                    Address</label>
                <input type="text" v-model="data.email" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>
        </div>

        <!-- School Details -->
        <div class="grid gap-4 mb-4 sm:grid-cols-3">
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus
                    Graduated</label>
                <select v-model="data.campus" required name="campus"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value=''>Please select</option>
                    <option value="San Carlos City">San Carlos City</option>
                    <option value="Kabankalan City">Kabankalan City</option>
                </select>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
                <select v-model="data.course" required name="course"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value=''>Please select</option>
                    <option value="BSIT">BSIT</option>
                    <option value="BSCRIM">BSCRIM</option>
                    <option value="BSBA">BSBA</option>
                </select>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year
                    Graduated</label>
                <input type="number" v-model="data.batch" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>
        </div>

        <div class="grid gap-4 mb-4 sm:grid-cols-3">
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employment
                    Status</label>
                <select v-model="data.employment.status" required name="employment_status"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option disabled value=''>Please select</option>
                    <option value="Not Track">Not Track</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Employed">Employed</option>
                </select>
            </div>

            <div v-if="data.employment.status == 'Employed'">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type Of
                    Employment</label>
                <select v-model="data.employment.type" required name="employment_type"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value='' disabled>Please select</option>
                    <option value="formal">Formally Employed</option>
                    <option value="self">Self Employed</option>
                </select>
            </div>

            <div v-show="data.employment.status == 'Employed'">
                <label for=" brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                    data.employment.type == "formal" ? 'Company Name' : 'Type of Business' }}</label>
                <input type="text" :disabled="!data.employment.type" v-if="data.employment.type == 'formal'"
                    v-model="data.employment.company" :required="data.employment.type == 'formal'"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <input type="text" :disabled="!data.employment.type" v-else v-model="data.employment.business" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            </div>

            <div v-show="data.employment.status == 'Employed'" :class="data.employment.status == 'Unemployed' || !data.employment.status ? 'col-span-2' : 'col-span-full'
            ">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
                    Proof</label>
                <input :disabled="!data.employment.type" @change="detectImage"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer p-2.5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" accept="image/*
                ">
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
                    A proof picture is useful but if not available is alright
                </div>
            </div>
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" @click="emit('cancel')"></Button>
            <Button type="submit" label="Add" severity="success" :loading="loading"></Button>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useAlumniStore } from '@/stores/AlumniStore';
import { db, storage } from '@/stores/firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, setDoc, addDoc, doc } from 'firebase/firestore'
import { useToast } from 'primevue/usetoast';

const store = useAlumniStore();
const toast = useToast();

const emit = defineEmits(['cancel'])

const loading = ref(false)
let path;
let file

const data = ref({
    firstname: '',
    middlename: '',
    lastname: '',
    contactnumber: 0,
    batch: 0,
    email: '',
    course: '',
    employment: {
        type: '',
        proof: '',
        status: '',
        company: '',
        business: '',
    },
})

const addAlumni = async (cred) => {
    loading.value = true
    try {
        if (file) {
            await uploadBytes(storageRef(storage, path), file).then((snapshot) => {
                console.log("added image");
            });
            await getDownloadURL(storageRef(storage, path)).then((url) => {
                data.value.employment.proof = url;
            })
        }
        await addDoc(collection(db, "alumni"), { ...cred, fullname: cred.firstname + " " + cred.middlename + " " + cred.lastname });
        store.alumniDialog = !store.alumniDialog
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Alumni has been added', life: 2000 });
        loading.value = false
    } catch (err) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong', life: 2000 });
        console.log(err)
    }
}

const detectImage = (e) => {
    file = e.target.files[0];
    data.value.employment.proof = file.name;
    path = 'attachments/' + file.name;
}

</script>