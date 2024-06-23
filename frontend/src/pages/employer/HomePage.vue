<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
<template>
    <div class="w-[900px] mx-auto px-4">
        <div>
            <h1 class="text-2xl font-bold py-2">Welcome, Peso</h1>
        </div>
        <div>
            <h1 class="text-lg font-bold mb-2">Your Job Post</h1>
            <div class="w-full flex gap-2">
                <!-- <div class="bg-gray-50 flex flex-col justify-center items-center h-72 gap-2 rounded">
                    <div>
                        <img src="/postJob.png">
                    </div>
                    <label class="text-gray-400">Your Job post will appear here</label>
                    <Button @click="visible = true" label="add my first job" icon="pi pi-plus" size="small" />
                </div> -->
                <Card style="width: 20rem">
                    <template #title>Nuxt js developer</template>
                    <template #subtitle>Created on 2024-06-23</template>
                    <template #content>
                        <div class="flex gap-4 font-semibold">
                            <label>0 Applicants</label>
                            <label>0 Hits</label>
                        </div>
                    </template>
                    <template #footer>
                        <div class="flex gap-3 mt-1">
                            <Button label="Edit" severity="secondary" outlined size="small" />
                            <Button label="Delete" severity="danger" size="small" />
                        </div>
                    </template>
                </Card>
                <Card style="width: 20rem" @click="visible = true" :pt="{
                    root: {
                        class: [
                            'flex flex-col cursor-pointer hover:text-blue-500',

                            //Shape
                            'rounded-[12px]',
                            'shadow-md',

                            //Color
                            'bg-gray-50 dark:bg-surface-900',
                            'text-surface-700 dark:text-surface-0']
                    },
                    body: {
                        class: 'h-full flex justify-center items-center '
                    }
                }">
                    <template #content>
                        <div class="flex flex-col items-center gap-2 font-semibold">
                            <i class="pi pi-plus"></i>
                            <label class="cursor-pointer">Add another jobs</label>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>

    <Dialog v-model:visible="visible" modal :draggable="false" header="Job Information">
        <form action="#">
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job
                        Title</label>
                    <InputText type="text" variant="filled" placeholder="Who do you need?" class="w-full" />
                </div>
                <div>
                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of
                        employment</label>
                    <InputText type="text" variant="filled" placeholder="Any" class="w-full" />
                </div>
                <div class="sm:col-span-2">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job
                        Description</label>
                    <Textarea variant="filled" rows="5" cols="30" placeholder="Describe the job to be done"
                        class="w-full" />
                </div>


            </div>
            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wage/Salary
                        per month</label>
                    <InputText type="text" variant="filled"
                        placeholder="Indicate currency (e.g. Php 20,000/mo, $400/mo)" class="w-full" />
                </div>
                <div>
                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Desired No.
                        of hours per week</label>
                    <InputText type="text" variant="filled" placeholder="Input desired hours per week" class="w-full" />
                </div>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <InputText type="text" variant="filled" placeholder="email" class="w-full" />
                </div>
                <div>
                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact
                        Person</label>
                    <InputText type="text" variant="filled" placeholder="name" class="w-full" />
                </div>
            </div>
            <div class="w-full flex justify-end">
                <Button label="Post Job" />
            </div>
        </form>
    </Dialog>
</template>