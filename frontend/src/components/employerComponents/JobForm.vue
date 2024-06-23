<script setup>
import { ref } from 'vue';
import { useEmployerStore } from '@/stores/EmployerStore.js';

const store = useEmployerStore();
</script>

<template>
    <form @submit.prevent="store.postJob">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job
                    Title</label>
                <InputText type="text" v-model="store.jobData.title" variant="filled" placeholder="Who do you need?"
                    class="w-full" />
            </div>
            <div>
                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of
                    employment</label>
                <InputText type="text" v-model="store.jobData.type" variant="filled" placeholder="Any" class="w-full" />
            </div>
            <div class="sm:col-span-2">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job
                    Description</label>
                <Textarea variant="filled" v-model="store.jobData.description" rows="5" cols="30"
                    placeholder="Describe the job to be done" class="w-full" />
            </div>


        </div>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wage/Salary
                    per month</label>
                <InputText type="text" v-model="store.jobData.salary" variant="filled"
                    placeholder="Indicate currency (e.g. Php 20,000/mo, $400/mo)" class="w-full" />
            </div>
            <div>
                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desired No.
                    of hours per week</label>
                <InputText type="text" v-model="store.jobData.hours" variant="filled"
                    placeholder="Input desired hours per week" class="w-full" />
            </div>
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <InputText type="text" variant="filled" v-model="store.jobData.email" placeholder="email" class="w-full" />
            </div>
            <div>
                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact
                    Person</label>
                <InputText type="text" v-model="store.jobData.person" variant="filled" placeholder="name" class="w-full" />
            </div>
        </div>
        <div class="w-full flex justify-end">
            <Button type="submit" label="Post Job" :loading="store.loading"/>
        </div>
    </form>
</template>