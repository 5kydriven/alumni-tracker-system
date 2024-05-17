<template>
    <form @submit.prevent="addAlumni(data)">
        <!-- Personal Information -->
        <div class="grid gap-2 mb-4 sm:grid-cols-3">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                    Name</label>
                <InputText type="text" v-model="data.firstname" :invalid="invalid.firstname" />
                <small v-if="invalid.firstname" class="p-error">First name is required.</small>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle Name</label>
                <InputText type="text" v-model="data.middlename" :invalid="invalid.middlename" />
                <small v-if="invalid.middlename" class="p-error">Middle name is required.</small>
            </div>
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <InputText type="text" v-model="data.lastname" :invalid="invalid.lastname" />
                <small v-if="invalid.lastname" class="p-error">Last name is required.</small>
            </div>
        </div>

        <!-- Contact Details -->
        <div class="grid gap-2 mb-4 sm:grid-cols-3">
            <div>
                <label for="suffix" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Suffix</label>
                <InputText type="text" v-model="data.suffix" />
            </div>
            <div>
                <div class="flex-auto">
                    <label for="contactnumber" class="font-medium block text-sm mb-2 text-gray-900">Mobile
                        Number</label>
                    <InputMask id="contactnumber" v-model="data.contactnumber" mask="99999999999"
                        placeholder="99999999999" :invalid="invalid.contactnumber" />
                    <small v-if="invalid.contactnumber" class="p-error">Valid mobile number is required.</small>
                </div>
            </div>
            <div>
                <label for="studentID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student
                    ID</label>
                <InputText type="text" v-model="data.studentID" :invalid="invalid.studentID" />
                <small v-if="invalid.studentID" class="p-error">Student ID is required.</small>
            </div>
        </div>

        <!-- School Details -->
        <div class="grid gap-2 mb-4 sm:grid-cols-3">
            <div>
                <label for="campus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus
                    Graduated</label>
                <Dropdown v-model="data.campus" :options="campuses" placeholder="Select a Campus"
                    class="w-full md:w-14rem" :invalid="invalid.campus" />
                <small v-if="invalid.campus" class="p-error">Campus is required.</small>
            </div>
            <div>
                <label for="course" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
                <Dropdown v-model="data.course" :options="course" placeholder="Select a Course"
                    class="w-full md:w-14rem" :invalid="invalid.course" />
                <small v-if="invalid.course" class="p-error">Course is required.</small>
            </div>
            <div>
                <label for="batch" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year
                    Graduated</label>
                <InputText type="text" v-model="data.batch" :invalid="invalid.batch" />
                <small v-if="invalid.batch" class="p-error">Year graduated is required.</small>
            </div>
        </div>

        <div class="grid gap-2 mb-4 sm:grid-cols-3">
            <div>
                <label for="employment_status"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employment Status</label>
                <Dropdown v-model="data.employment.status" :options="status" placeholder="Select a Status"
                    class="w-full md:w-14rem" :invalid="invalid.employment.status" />
                <small v-if="invalid.employment.status" class="p-error">Employment status is required.</small>
            </div>

            <div v-if="data.employment.status == 'Employed'">
                <label for="employment_type"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employment Type</label>
                <Dropdown v-model="data.employment.type" :options="type" placeholder="Select employment type"
                    class="w-full md:w-14rem" :invalid="invalid.employment.type" />
                <small v-if="invalid.employment.type" class="p-error">Employment type is required.</small>
            </div>

            <div v-show="data.employment.status == 'Employed'">
                <label for="employment_detail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
                    data.employment.type == "Formally Employed" ? 'Company Name' : 'Type of Business' }}</label>
                <InputText type="text" :disabled="!data.employment.type" v-if="data.employment.type == 'Formally Employed'"
                    v-model="data.employment.company" :invalid="invalid.employment.company" />

                <InputText type="text" :disabled="!data.employment.type" v-else v-model="data.employment.business"
                    :invalid="invalid.employment.business" />
                <small v-if="invalid.employment.company" class="p-error">Company name is required.</small>
                <small v-if="invalid.employment.business" class="p-error">Type of business is required.</small>
            </div>

            <div v-show="data.employment.status == 'Employed'"
                :class="data.employment.status == 'Unemployed' || !data.employment.status ? 'col-span-2' : 'col-span-full'">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
                    Proof</label>
                <input :disabled="!data.employment.type" @change="detectImage"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer p-2.5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help" id="user_avatar" type="file" accept="image/*">
                <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A proof picture is
                    useful but if not available is alright</div>
            </div>
        </div>
        <div class="flex justify-end gap-2">
            <Button type="submit" label="Add" severity="success" :loading="loading"></Button>
        </div>
    </form>
</template>


<script setup>
import { ref } from 'vue';
import { useAlumniStore } from '@/stores/AlumniStore';
import { db, storage } from '@/stores/firebase';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, setDoc, addDoc, doc } from 'firebase/firestore';
import { useToast } from 'primevue/usetoast';

const store = useAlumniStore();
const toast = useToast();

const loading = ref(false);
const campuses = ref([
    'San Carlos City',
    'Kabangkalan City'
]);
const course = ref([
    'BSIT',
    'BSCRIM',
    'BSBA',
])
const status = ref([
    'Employed',
    'Unemployed',
    'Not Track',
])
const type = ref([
    'Formally Employed',
    'Self Employed'
])
let path;
let file;

const data = ref({
    firstname: '',
    middlename: '',
    lastname: '',
    contactnumber: '',
    batch: '',
    studentID: '',
    course: '',
    suffix: '',
    campus: '',
    employment: {
        type: '',
        proof: '',
        status: '',
        company: '',
        business: '',
    },
});

const invalid = ref({
    firstname: false,
    middlename: false,
    lastname: false,
    contactnumber: false,
    batch: false,
    studentID: false,
    course: false,
    campus: false,
    employment: {
        status: false,
        type: false,
        company: false,
        business: false,
    },
});

const validateForm = () => {
    let valid = true;
    invalid.value.firstname = !data.value.firstname;
    invalid.value.middlename = !data.value.middlename;
    invalid.value.lastname = !data.value.lastname;
    invalid.value.contactnumber = !data.value.contactnumber;
    invalid.value.batch = !data.value.batch;
    invalid.value.studentID = !data.value.studentID;
    invalid.value.course = !data.value.course;
    invalid.value.campus = !data.value.campus;
    invalid.value.employment.status = !data.value.employment.status;

    if (data.value.employment.status === 'Employed') {
        invalid.value.employment.type = !data.value.employment.type;
        invalid.value.employment.company = data.value.employment.type === 'Formally Employed' && !data.value.employment.company;
        invalid.value.employment.business = data.value.employment.type === 'Self Employed' && !data.value.employment.business;
    }

    for (const key in invalid.value) {
        if (typeof invalid.value[key] === 'object') {
            for (const subKey in invalid.value[key]) {
                if (invalid.value[key][subKey]) valid = false;
            }
        } else if (invalid.value[key]) {
            valid = false;
        }
    }

    return valid;
};

const addAlumni = async (cred) => {
    loading.value = true;
    if (!validateForm()) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Please fill out all fields.', life: 2000 });
        loading.value = false;
        return;
    }

    try {
        if (file) {
            await uploadBytes(storageRef(storage, path), file).then(snapshot => {
                console.log("Added image");
            });
            await getDownloadURL(storageRef(storage, path)).then(url => {
                data.value.employment.proof = url;
            });
        }
        await addDoc(collection(db, "alumni"), { ...cred, fullname: cred.firstname + " " + cred.middlename + " " + cred.lastname });
        store.alumniDialog = !store.alumniDialog;
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Alumni has been added', life: 2000 });
        loading.value = false;
    } catch (err) {
        toast.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong', life: 2000 });
        console.log(err);
        loading.value = false;
    }
};

const detectImage = (e) => {
    file = e.target.files[0];
    data.value.employment.proof = file.name;
    path = 'attachments/' + file.name;
};
</script>
