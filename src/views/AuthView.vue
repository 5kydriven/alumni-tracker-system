<template>
    <div class="flex flex-col bg-white md:flex-row w-full">

        <!-- left side -->
        <div class="relative">
            <img src="/image.jpg" alt="img" class="w-[850px] h-screen hidden md:block object-cover" />
            <!-- text on image  -->
            <div
                class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                <span class="text-black text-xl">We've been using Untitle to kick"<br />start every new project
                    and can't <br />imagine working without it."
                </span>
            </div>
        </div>

        <!-- {/* right side */} -->
        <div class="flex flex-col justify-center p-8 mx-auto">
            <span class="mb-3 text-4xl font-bold">Welcome back</span>
            <span class="font-light text-gray-400 mb-4">
                Welcom back! Please enter your details
            </span>
            <!-- <div>
                    Error
                </div> -->
            <div class="py-4">
                <label for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div class="py-4">
                <label for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div class="flex justify-between w-full py-4">
                <div class="mr-24">
                    <input type="checkbox" name="ch" id="ch" class="mr-2" />
                    <span class="text-md">Remember me</span>
                </div>
                <span class="font-bold text-md">Forgot password</span>
            </div>
            <button type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 mt-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign
                in</button>
        </div>
    </div>
</template>

<script setup></script>