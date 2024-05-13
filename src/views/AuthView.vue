<template>
        <div class="relative flex flex-col space-y-8 bg-white md:flex-row md:space-y-0 w-full">

            <!-- left side -->
            <div class="relative">
                <img src="/image.jpg" alt="img" class="w-[850px] h-screen hidden rounded-r-2xl md:block object-cover" />
                <!-- text on image  -->
                <div
                    class="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                    <span class="text-white text-xl">We've been uesing Untitle to kick"<br />start every new project
                        and can't <br />imagine working without it."
                    </span>
                </div>
            </div>

            <!-- {/* right side */} -->
            <div class="flex flex-col justify-center p-8">
                <span class="mb-3 text-4xl font-bold">Welcome back</span>
                <span class="font-light text-gray-400 mb-8">
                    Welcom back! Please enter your details
                </span>
                <div class="py-4">
                    <span class="mb-2 text-md">Email</span>
                    <input type="text"
                        class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                        name="email" id="email" />
                </div>
                <div class="py-4">
                    <span class="mb-2 text-md">Password</span>
                    <input type="password" name="pass" id="pass"
                        class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                </div>
                <div class="flex justify-between w-full py-4">
                    <div class="mr-24">
                        <input type="checkbox" name="ch" id="ch" class="mr-2" />
                        <span class="text-md">Remember for 30 days</span>
                    </div>
                    <span class="font-bold text-md">Forgot password</span>
                </div>
                <button
                    class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black border border-gray-300">
                    Sign in
                </button>
                <button
                    class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                    <img src="/google.svg" alt="img" class="w-6 h-6 inline mr-2" />
                    Sign in with Google
                </button>
                <div class="text-center text-gray-400">
                    Dont'have an account?
                    <span class="font-bold text-black">Sign up for free</span>
                </div>
            </div>


        </div>

</template>