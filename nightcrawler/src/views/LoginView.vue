<template>
  <body>
    <section id="login">
        <div class="container-fluid h-100 bg-dark-subtle">
            <div style="padding-top:100px;">
              <center>
                <h4>Sign into your account</h4>
                <form @submit.prevent="login">
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="email" v-model="payload.emailAddress" placeholder="Email Address" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="password" v-model="payload.userPassword" placeholder="******" class="form-control" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <p class="lead">{{message}}</p>

                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <button type="submit" class="btn1 mt-3 mb-5" @click.prevent="login">Login</button>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <router-link :to="{name: 'profile', params : {id: user.userID}}">
                        <button class="btn btn-info">My Account</button>
                      </router-link>
                    </div>
                  </div>
                  <p>Don't have an account? <a href="/register">Register here</a></p>
                </form>
              </center>
            </div>
        </div>
    </section>
  </body>
  </template>
  
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
    components: {},
    setup() {
    const store = useStore()
    store.dispatch("getUsers")
    const users = computed(() => store.state.users)
    return { users }
  },
    data(){
      return {
        payload: {
          emailAddress: '',
          userPassword: ''
        }
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      message() {
        return this.$store.state.message
      }
    },
    methods: {
      login() {
        console.log('Debug:', this.payload);
        this.$store.dispatch('login', this.payload)
      }
    } 
  }
  </script>
  <style scoped>
#login {
  height: 100vh;
}
  h4 {
    font-family: 'Poppins', sans-serif;
    color: black;
    font-weight: bold;
  }
  .btn1 {
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    background-color: black;;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    font-weight: bold;
  }
  .btn1:hover {
    background: white;
    border: 1px solid white;
    color: black;
    border: 1px solid black;
  }
</style>