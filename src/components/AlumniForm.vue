<template>
    <!-- Personal Information -->
    <div class="grid gap-4 mb-4 sm:grid-cols-3">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                Name</label>
            <input type="text" name="name" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name" required="">
        </div>
        <div>
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                Name</label>
            <input type="text" name="brand" id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand" required="">
        </div>
        <div>
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle
                Name</label>
            <input type="text" name="brand" id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand" required="">
        </div>
    </div>

    <!-- Contact Details -->
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact
                Number</label>
            <input type="text" name="name" id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name" required="">
        </div>
        <div>
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                Address</label>
            <input type="text" name="brand" id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand" required="">
        </div>
    </div>

    <!-- School Details -->
    <div class="grid gap-4 mb-4 sm:grid-cols-3">
        <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campus
                Graduated</label>
            <select id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
            </select>
        </div>
        <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course</label>
            <select id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
            </select>
        </div>
        <div>
            <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year
                Graduated</label>
            <input type="text" name="brand" id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand" required="">
        </div>
    </div>

    <div class="grid gap-4 mb-4 sm:grid-cols-3">
        <div>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employment
                Status</label>
            <select id="countries" v-model="status"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled value="">Please select</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Employed">Employed</option>
            </select>
        </div>
        <div v-show="status == 'Employed'">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type Of
                Employment {{ type.value }}</label>
            <select id="countries" v-model="type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled value="">Please select</option>
                <option value="formal">Formally Employed</option>
                <option value="self">Self Employed</option>
            </select>
        </div>
        <div v-show="status == 'Employed'">
            <label for=" brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ type == formal ?
                'Type of Business' : 'Company Name' }}</label>
            <input type="text" name="brand" id="brand"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand" required="">
        </div>
        <div v-show="status == 'Employed'" :class="status == 'Unemployed' || !status ? 'col-span-2' : 'col-span-full'">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
                Proof</label>
            <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer p-2.5 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help" id="user_avatar" type="file" accept="image/*">
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A proof picture is useful
                but if not available is alright</div>
        </div>
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="emit('cancel')"></Button>
        <Button type="button" label="Save" @click=""></Button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['cancel'])

const status = ref('')
const type = ref('')
console.log(status.value)
</script>