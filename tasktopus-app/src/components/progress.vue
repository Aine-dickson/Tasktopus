<template>
    <article class="rounded-lg p-5 space-y-8 min-w-[14rem] max-w-[14rem] shadow-shadows bg-gradient-to-br" :class="color">
        <div><i class="text-4xl" :class="icon">{{ icon }}</i></div>
        <div class="space-y-5">
            <div class="font-bold text-3xl">{{ items }}</div>
            <div class="flex space-x-8">
                <span>{{ category }}</span>
                <span><i class="fas fa-arrow-right w-[20%]">Go</i></span>
            </div>
        </div>
    </article>
</template>

<script>

    import { ref } from 'vue'

    export default {
        props: [
            "icon",
            "color",
            "content",
            "category"
        ],
        setup(props){
            const category =ref(props.category)
            const icon = ref("fas fa-" + props.icon)
            const items = ref(props.content)
            const color_stat = ref(`from-${props.color}-600`)
            const color_stop = ref(`to-${props.color}-300`)
            const color = ref(`${color_stat.value} ${color_stop.value}`)
            
            return { category, icon, items, color}
        }
    }

</script>