<template>
    <aside class="side-container grid h-full">
        <section class="msg h-full">
            <div class="flex justify-between p-4">
                <span>Recent messages</span>
                <span>See more...</span>
            </div>
            <div>

            </div>
        </section>
        <section class="team h-full">
            <div class="flex justify-between p-4">
                <span>Team members</span>
                <span>See more...</span>
            </div>
            <div>

            </div>
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