<template>
    <div v-if="loading" class="text-center h-screen flex items-center justify-center">
        <div role="status">
            <svg aria-hidden="true" class="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>

    </div>

    <div class="px-4 mx-auto max-w-3xl mt-20 mb-5" v-show="!data.isDone && !loading">
        <form @submit.prevent="updateData(data)">
            <div class="flex flex-col gap-1 sm:grid sm:grid-cols-12  sm:gap-y-5 sm:gap-x-2 h-full sm:grid-rows-5">
                <div class=" sm:col-span-4">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                        Name</label>
                    <input type="text" v-model="data.firstname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required>
                </div>
                <div class=" sm:col-span-4">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle
                        Name</label>
                    <input type="text" v-model="data.middlename"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required>
                </div>
                <div class=" sm:col-span-4">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                        Name</label>
                    <input type="text" v-model="data.lastname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required>
                </div>

                <div class="col-span-6 grid sm:grid-cols-6 gap-2 sm:row-span-3">
                    <div class="sm:col-span-3">
                        <label for="name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suffix</label>
                        <input type="text" v-model="data.suffix"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </div>
                    <div class="sm:col-span-3">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student
                            ID</label>
                        <input type="text" v-model="data.studentId"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required disabled>
                    </div>
                    <div class="sm:col-span-3">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact
                            Number</label>
                        <input type="text" v-model="data.contactnumber"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required>
                    </div>
                    <div class="sm:col-span-3">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
                        <select id="category" v-model="data.course"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option disabled value="">Select category</option>
                            <option value="BSIT">BSIT</option>
                            <option value="BSCRIM">BSCRIM</option>
                            <option value="BSBA">BSBA</option>
                        </select>
                    </div>
                    <div class="sm:col-span-3">
                        <label for="category"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus</label>
                        <select id="category" v-model="data.campus"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option disabled value="">Select category</option>
                            <option value="San Carlos City">San Carlos City</option>
                            <option value="Kabankalan City">Kabankalan City</option>
                        </select>
                    </div>
                    <div class="sm:col-span-3">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch</label>
                        <input type="text" v-model="data.batch"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required>
                    </div>
                </div>

                <div class="col-span-6 grid grid-cols-auto gap-2 row-span-5">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employement
                            Status</label>
                        <select id="category" v-model="data.employment.status"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option disabled value="">Select category</option>
                            <option value="Employed">Employed</option>
                            <option value="Unemployed">Unemployed</option>
                        </select>
                    </div>
                    <div v-show="data.employment.status == 'Employed'">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of
                            employment</label>
                        <select id="category" v-model="data.employment.type"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option disabled value="">Select category</option>
                            <option value="formal">Formally Employed</option>
                            <option value="self">Self Employed</option>
                        </select>
                    </div>
                    <div v-show="data.employment.status == 'Employed'">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                            data.employment.type == 'formal' ? 'Company Name' : 'Type of Business' }}</label>
                        <input type="text" v-model="data.employment.company" v-if="data.employment.type == 'formal'"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required>
                        <input type="text" v-model="data.employment.business" v-else
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            required>
                    </div>
                    <div v-show="data.employment.status == 'Employed'">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="file_input">Upload
                            any proof</label>
                        <input
                            class="block w-full text-sm text-gray-900 border p-2.5 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help" id="file_input" type="file">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">If no proof
                            it's
                            alright.</p>
                    </div>
                </div>
            </div>
            <Button type="submit" label="Submit" severity="success" :loading="loading" />

        </form>
    </div>

    <div class="mt-20 mx-auto max-w-3xl flex flex-col justify-center items-center h-96 gap-4"
        v-show="data.isDone && !loading">
        <img src="/check.jpeg" height="100px" width="100px" />
        <h1 class="text-3xl font-bold">
            Thank you for completing the form.
        </h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db, auth } from '@/stores/firebase';
import { getDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const loading = ref(false)
const data = ref({
    firstname: '',
    middlename: '',
    lastname: '',
    suffix: '',
    studentId: '',
    contactnumber: '',
    course: '',
    campus: '',
    batch: '',
    employment: {
        status: '',
        type: '',
        company: '',
        proof: '',
        business: '',
    },
    isDone: null,
})

const id = localStorage.getItem('uid') //temporary id

onMounted(async () => {
    loading.value = true
    const docSnap = await getDoc(doc(db, "alumni", id));
    data.value = { ...docSnap.data() }
    loading.value = false
})

const updateData = async (cred) => {
    loading.value = true
    cred.isDone = true
    try {
        await setDoc(doc(db, 'alumni', id), {
            ...cred, updated: serverTimestamp()
        })
        loading.value = false
    } catch (err) {
        console.log(err)
    }
}
</script>