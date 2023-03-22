<template>
    <main>
        <section id="profile">
            <div class="container">
                <div class="row align-items-center">
                  <div class="col-sm-6">
                    <img class="view" :src="user?.userProfile" alt="">
                  </div>
                  <div class="col-sm-6" style="padding: 25px">
                    <p class="text-start">
                      <span>First Name:</span> 
                      {{ user?.firstName }}</p><br>
                    <p class="text-start">
                      <span>LastName:</span>
                      {{user?.lastName}}</p><br>
                    <p class="text-start">
                      <span>Email Address:</span> 
                      {{user?.emailAddress}}</p><br>
                  </div>
                </div>
              </div>
        </section>
    </main>
    <FooterComponent/>
</template>
  
<script>
import FooterComponent from '@/components/FooterComponent.vue';
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';


export default {
    components: { FooterComponent },
    setup() {
    const store = useStore()
    const user = computed(() => store.state.user)
    return { user }
  },

  mounted() {
    this.$store.dispatch("getUser", this.$route.params.id)
  }

  }


</script>

<style scoped>

main {
    height: 100vh;
    background: rgb(184, 184, 184);
}

.container {
  padding: 50px;
}

.view {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  max-height: 70vh;
  transform: scale(1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}

.view:hover {
  transform: scale(1.1);
}

span {
  position: relative;
  font-family: 'Special Elite', cursive;    
  color: black;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
}
</style>