<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 border-b-2 z-50">
        <div class="max-w-screen-xl flex items-center justify-between sm:mx-auto p-4">
            <div class="flex gap-4">
                <a href="https://cpsu.edu.ph/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/cpsuLogo.png" class="h-10 w-10" alt="Flowbite Logo" />
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden">Flowbite</span>
                </a>
                <div class="items-center justify-center  w-full flex md:w-auto md:order-1" id="navbar-user">
                    <form action="#" method="GET" class="block md:pl-2">
                        <label for="topbar-search" class="sr-only">Search</label>
                        <div class="relative w-64 md:w-96 ">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                                    </path>
                                </svg>
                            </div>
                            <input type="text" name="email" id="topbar-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Search" />
                        </div>
                    </form>
                </div>
            </div>
            <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" @click="OpToggle"
                    class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-10 h-10 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <OverlayPanel ref="op">
                    <div class="text-base list-none bg-white">
                        <div class="px-4 py-3" role="none">
                            <p class="text-sm text-gray-900 dark:text-white" role="none">
                                Neil Sims
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                neil.sims@flowbite.com
                            </p>
                        </div>
                        <hr>
                        <ul class="py-1" role="none">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">Settings</a>
                            </li>
                            <li>
                                <a @click="authStore.logoutUser"
                                    class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </OverlayPanel>
            </div>

        </div>
    </nav>

    <slot></slot>
</template>

<script setup>
import { useAuthStore } from '@/stores/AuthStore';
import { ref } from 'vue';

const authStore = useAuthStore()
// const emit = defineEmits(['isToggle'])

// const props = defineProps({
//     isUser: Boolean,
// })

const op = ref();

const OpToggle = (event) => {
    op.value.toggle(event);
}
</script>