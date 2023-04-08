<template>
    <aside class="side-container grid h-full">
        <section class="msg h-full">
            <span>Recent messages</span>
        </section>
        <section class="team h-full">
            <span>Team members</span>
        </section>
    </aside>
</template>

<script>

    export default {
        setup(){

        }
    }

</script>

<style>
.msg{
    grid-area: msg;
}
.team{
    grid-area: team;
}
.side-container{
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
    grid-template-areas: 
    "msg"
    "team";
}
</style>