<template>
    <div class="app_container grid h-screen w-screen">
        <section class="header border-b border-b-gray-500 h-full">
            <app_header/>
        </section>
        <section class="nav hidden sm:block h-full bg-gray-800">
            <app_nav/>
        </section>
        <section class="main h-full">
            <app_main/>
        </section>
        <section class="aside hidden sm:block border-l border-l-gray-500 h-full">
            <app_aside/>
        </section>
        <section class="footer sm:hidden h-full">
            <app_footer/>
        </section>
    </div>
</template>

<script>

    import app_aside from './includes/app_aside.vue';
    import app_footer from './includes/app_footer.vue';
    import app_header from './includes/app_header.vue';
    import app_main from './includes/app_main.vue';
    import app_nav from './includes/app_nav.vue';

    export default {
        components: {
            app_aside,
            app_footer,
            app_header,
            app_main,
            app_nav
        },
        setup(){

        }
    }

</script>

<style>
.header{
    grid-area: header;
}
.nav{
    grid-area: nav;
}
.main{
    grid-area: main;
}
.aside{
    grid-area: aside;
}
.footer{
    grid-area: "footer";
}
.app_container{
    grid-template-columns: 100%;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas: "header"
    "main"
    "footer";
}
@media screen and (max-width: 768px)  {
    .app_container{
        grid-template-columns: 10% 60% 30%;
        grid-template-rows: 10% 90%;
        grid-template-areas: 
        "nav header aside"
        "nav main aside";
    }
}
@media screen and (min-width: 768px)  {
    .app_container{
        grid-template-columns: 15 55% 30%;
        grid-template-rows: 10% 90%;
        grid-template-areas: 
        "nav nav header header header header header header header aside aside aside"
        "nav nav main main main main main main main aside aside aside";
    }
}
</style>