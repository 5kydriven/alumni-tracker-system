import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/base.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import lara from './presets/lara'
import 'primeicons/primeicons.css'

//in main.js
// import 'primevue/resources/themes/aura-light-green/theme.css'

// components
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; 
import Row from 'primevue/row';                 
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Dropdown from 'primevue/dropdown';
import Slider from 'primevue/slider';
import OverlayPanel from 'primevue/overlaypanel';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Dialog from 'primevue/dialog';


const app = createApp(App)



app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('Calendar', Calendar)
app.component('InputNumber', InputNumber)
app.component('IconField', IconField)
app.component('InputIcon', InputIcon)
app.component('InputText', InputText)
app.component('MultiSelect', MultiSelect)
app.component('Button', Button)
app.component('ProgressBar', ProgressBar)
app.component('Tag', Tag)
app.component('Dropdown', Dropdown)
app.component('Slider', Slider)
app.component('OverlayPanel', OverlayPanel)
app.component('Toast', Toast)
app.component('Dialog', Dialog)
// app.component('TriStateCheckbox', TriStateCheckbox)

app.use(PrimeVue, {
    unstyled: true,
    // pt: {
    //     OverlayPanel: {
    //         root: {
    //             class: [
    //                 // Shape
    //                 'rounded-md shadow-lg',
    //                 'border-0 dark:border',

    //                 // Position
    //                 'absolute left-0 top-0 mt-2',
    //                 'z-40 transform origin-center',

    //                 // Color
    //                 'bg-surface-0 dark:bg-surface-800',
    //                 'text-surface-700 dark:text-surface-0/80',
    //                 'dark:border-surface-700',

    //                 // Before: Triangle
    //                 'before:absolute before:-top-[9px] before:-ml-[9px] before:left-[calc(var(--overlayArrowLeft,0)+1.25rem)] z-0',
    //                 'before:w-0 before:h-0',
    //                 'before:border-transparent before:border-solid',
    //                 'before:border-x-[8px] before:border-[8px]',
    //                 'before:border-t-0 before:border-b-surface-300/10 dark:before:border-b-surface-700',

    //                 'after:absolute after:-top-2 after:-ml-[8px] after:left-[calc(var(--overlayArrowLeft,0)+1.25rem)]',
    //                 'after:w-0 after:h-0',
    //                 'after:border-transparent after:border-solid',
    //                 'after:border-x-[0.5rem] after:border-[0.5rem]',
    //                 'after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-800'
    //             ]
    //         },
    //         content: {
    //             class: 'p-0 items-center flex'
    //         },
    //         transition: {
    //             enterFromClass: 'opacity-0 scale-y-[0.8]',
    //             enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    //             leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    //             leaveToClass: 'opacity-0'
    //         }
    //     }
    // },
    pt: lara,
})
app.use(ToastService);
app.use(createPinia())
app.use(router)

app.mount('#app')
