<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router'
  import { useAccount } from './store/accountStore'

  export default {
    setup(){
      const router = useRouter()
      const store = useAccount()

      router.beforeEach((to, from, next) => {
        if(to.meta.authGuarded){
          if(store.user != null){
            next()
          } else {
            router.push({name: 'login'})
          }
        } else {
          if(store.user != null){
            router.push({name: 'dashboard'})
            return
          }
          next()
        }
      })
    }
  }
</script>