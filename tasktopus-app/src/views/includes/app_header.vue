<template>
    <header class="flex items-center h-full justify-between px-4 space-x-2">
        <div class="logo-2">Logo</div>
        <div class="overlow-hidden rounded-lg border border-gray-500 dark:border-gray-200 h-10 flex w-[70%] sm:w-[90%]">
            <i class="fas fa-search"></i>
            <input type="search" class="h-full max-w-full flex-grow focus:outline-none bg-transparent text-xl px-2">
        </div>
        <div class="noti">
            <span><i class="fas fa-bell">NOTI</i></span>
        </div>
        <div class="menu">
            <span><i class="fas fa-bars">MENU</i></span>
        </div>
    </header>
</template>

<script>

    export default {

    }

</script>

<style>
@media screen and (min-width: 640px) {
    .logo-2{
        display: none;
    }
}
@media screen and (max-width: 485px) {
    .noti{
        display: none;
    }
}
@media screen and (min-width: 485px) {
    .menu{
        display: none;
    }
}
</style>