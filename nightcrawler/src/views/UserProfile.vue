<template>
    <main>
        <section id="profile">
            <div class="container">
              <h1 class="text-center">This is the account of {{$store.state.user?.firstName}} {{$store.state.user?.lastName}}</h1>
                <div class="row align-items-center p-5">
                  <div class="col-sm-6">
                    <img class="view img-fluid" :src="$store.state.user?.userProfile">
                  </div>
                  <div class="col-sm-6" style="padding: 25px">
                    <p class="text-start">
                      <span>First Name:</span> 
                      {{ $store.state.user?.firstName }}</p><br>
                    <p class="text-start">
                      <span>LastName:</span>
                      {{ $store.state.user?.lastName}}</p><br>
                    <p class="text-start">
                      <span>Email:</span>
                      {{ $store.state.user?.emailAddress }}</p><br>
                    <p class="text-start">
                      <span>Role:</span>
                      {{ $store.state.user?.userRole }}</p><br>
                  </div>
                </div>
              </div>
        </section>
    </main>
    <FooterComponent/>
</template>
  
<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: { FooterComponent },
  
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
  transition: all 0.3s;
  display: block;
  width: 100%;
  max-height: 65vh;
  transform: scale(1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}

span {
  position: relative;
  font-family: 'Special Elite', cursive;    
  color: black;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
}
</style>