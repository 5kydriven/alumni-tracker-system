<template>
    <div class="flex justify-between items-center">
        <div>
            <input @change="handleFileChange"
                class="block w-full text-sm py-2 px-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file" accept=".csv">
            <p class="text-xs text-gray-500 dark:text-gray-300" id="file_input_help">Only csv file.</p>
        </div>
        <Button @click="uploadFile" :disabled="!file" label="Upload" />
    </div>

    <div>
        <div>
            <DataTable :value="files" tableStyle="min-width: 20rem" v-show="files" removableSort paginator :rows="6">
                <Column field="Name" header="Name" sortable></Column>
                <Column field="Course" header="Course"></Column>
                <Column field="Batch" header="Batch"></Column>
                <Column field="Status" header="Status"></Column>
                <template #footer> In total there are {{ files ? files.length : 0 }} Alumni's </template>
            </DataTable>
        </div>
    </div>

    <span v-show="store.dialogLoading"
        class="bg-gray-800/[.7] w-full h-full flex gap-2 flex-col items-center justify-center leading-none rounded-lg dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 -translate-x-1/2 top-2/4 left-1/2">
        <div role="status">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary-500"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
            </svg>
        </div>
        <label class="text-gray-50  rounded px-0.5 py-0.5 font-semibold ">"Please wait, this may take a moment."</label>
    </span>

</template>

<script setup>
import { ref } from 'vue';
import Papa from 'papaparse';
import { useAlumniStore } from '@/stores/AlumniStore.js'

const store = useAlumniStore();

const emit = defineEmits(['formSuccess']);

const files = ref();
const file = ref(null);

const handleFileChange = (event) => {
    file.value = event.target.files[0];
    Papa.parse(file.value, {
        header: true,
        complete: (results) => {
            let removeEmpty = []
            results.data.forEach(row => {
                if (row.Name && row.Name.trim() !== '') {
                    removeEmpty.push({ ...row })
                }
            });
            files.value = removeEmpty
        },
        error: (error) => {
            console.error('Error parsing CSV file:', error);
        }
    });
};

const uploadFile = async () => {
    if (!file.value) return;

    Papa.parse(file.value, {
        header: true,
        complete: async (results) => {
            store.dialogLoading = true
            try {
                const response = await fetch('http://localhost:8080/uploadFile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // Set content type to JSON
                    },
                    body: JSON.stringify(results.data) // Convert data to JSON string
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                store.dialogLoading = false
                store.dialogVisible = false
                emit('formSuccess', result.message)
                files.value = null
                file.value = null
            } catch (error) {
                console.error('Error uploading data:', error);
            }
        },
        error: (error) => {
            console.error('Error parsing CSV file:', error);
        }
    });
};
</script>