<template>
    <div class="auth-container h-screen grid p-2">
        <section class="form">
            <router-view></router-view>
        </section>
        <section class="visual overflow-hidden rounded-lg h-full w-full hidden sm:block">
            <img src="/assets/images/profile.jpg" alt="auth-bg" class="h-full w-full object-fill">
        </section>
    </div>
</template>

<script>

    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';

    export default {
        setup(){
            const router = useRouter()

            onMounted(() => {
                router.push('/signup')
            })

        }
    }

</script>

<style>
.auth-container{
    grid-template-columns: 100%;
    grid-template-areas: "form";
}
.form{
    grid-area: form;
}
.visual{
    grid-area: visual;
}
@media screen and (min-width: 640px) {
    .auth-container{
        grid-template-columns: 50% 50%;
        grid-template-areas: "form visual";
    }
    .form{
        grid-area: form;
    }
    .visual{
        grid-area: visual;
    }
}
    @media screen and (min-width: 1024px) {
        .auth-container{
            grid-template-columns: 40% 60%;
            grid-template-areas: "form visual";
        }
        .form{
            grid-area: form;
        }
        .visual{
            grid-area: visual;
        }
    }
</style>