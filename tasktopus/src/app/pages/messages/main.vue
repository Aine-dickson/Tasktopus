<template>
    <section class="h-full px-1 pb-1">
        <div v-if="selection" class="chat-screen h-full grid">
            <ol class="chats relative ml-2 overflow-y-auto overflow-x-hidden">                  
                <li class="mb-5 ml-8 w-full">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full left-0 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Bonnie image"/>
                    </span>
                    <div class="max-w-[80%] px-2 pb-2 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <div>
                            <div class="flex justify-between items-center">
                                <div class="text-sm italic font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer">@Thomas Lean</div>
                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                            </div>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved Leo to Funny Group</div>
                        </div>
                    </div>
                </li>
                <li class="mb-5 ml-8 w-full">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full left-0 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 overflow-hidden">
                        <img class="rounded-full shadow-lg" src="/assets/images/aine.jpg" alt="Bonnie image"/>
                    </span>
                    <div class="max-w-[80%] px-2 pb-2 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <div>
                            <div class="flex justify-between items-center">
                                <div class="text-sm italic font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer">@Thomas Lean</div>
                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                            </div>
                            <div class="px-1 pb-2 text-xs italic rounded-lg font-normal text-gray-500 border-b border-b-gray-200 bg-slate-50 dark:bg-slate-600 dark:border-b-gray-500 dark:text-gray-300">
                                <div class="items-center justify-between sm:flex p-1">
                                    <div class="italic text-gray-900 dark:text-white hover:underline cursor-pointer">@Thomas Lean</div>
                                </div>
                                <div class="bg-gray-800 p-1 rounded-b-lg">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                            </div>
                            <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved Leo to Funny Group</div>
                        </div>
                    </div>
                </li>
                <li class="mb-5 w-full flex justify-end">            
                    <div class="max-w-[80%] items-start justify-between p-2 sm:flex bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <time class="min-w-[2.8rem] block text-end mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                    </div>
                </li>
                <li class="mb-5 w-full flex justify-end">            
                    <div class="max-w-[80%] px-2 pb-2 bg-slate-200 border border-slate-400 rounded-lg shadow dark:bg-slate-700 dark:border-slate-500">
                        <div>
                            <div class="px-1 pb-2 text-xs italic rounded-b-lg font-normal text-gray-500 border-b border-b-gray-200 bg-slate-50 dark:bg-slate-600 dark:border-b-gray-500 dark:text-gray-300">
                                <div class="items-center justify-between sm:flex p-1">
                                    <div></div>
                                    <div class="italic text-gray-900 dark:text-white hover:underline cursor-pointer">@Thomas Lean</div>
                                </div>
                                <div class="bg-gray-800 p-1 rounded-b-lg">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                            </div>
                            <div class="flex justify-between items-start">
                                <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved Leo to Funny Group</div>
                                <time class="min-w-[2.8rem] block text-end mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
            <form class="msg-form z-50">
                <label for="chat" class="sr-only">Your message</label>
                <div class="flex items-center px-3 py-2 rounded-lg dark:bg-gray-800">
                    <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Upload image</span>
                    </button>
                    <button type="button" class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Add emoji</span>
                    </button>
                    <textarea id="chat" rows="1" class="block mx-4 p-2 w-full text-sm text-gray-900 focus:outline-none rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your message..."></textarea>
                        <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                        <span class="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </div>
        <div v-else class="flex items-center justify-center h-full">
            <div class="flex flex-col items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="">
                <div class="font-bold text-xl mb-2">Tasktopus Messenger</div>
                <p class="text-gray-400">Choose a chart to preview from the right pane!</p>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref } from 'vue';

    export default {
        setup(){
            const selection = ref(true)

            return { selection }
        }
    }
</script>

<style scoped>
    .chat-screen{
        grid-template-columns: 100%;
        grid-template-rows: 90% 10%;
        grid-template-areas: "chats" "form";
    }
    .chats{
        grid-area: chats;
    }
    .msg-form{
        grid-area: form;
    }
</style>