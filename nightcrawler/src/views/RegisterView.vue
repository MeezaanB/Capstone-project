<template>
  <main>
    <section id="register">
      <div class="container-fluid h-100 bg-dark-subtle">
        <div style="padding-top:100px;">
          <center>
            <h4>Create an account</h4>
            <form @submit.prevent="register">
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" v-model="payload.firstName" placeholder="First Name" class="form-control my-3"
                    required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" v-model="payload.lastName" placeholder="Last Name" class="form-control my-3"
                    required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" v-model="payload.gender" placeholder="Gender" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="email" v-model="payload.emailAddress" placeholder="Email Address" class="form-control my-3"
                    required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="password" v-model="payload.userPassword" placeholder="******" class="form-control"
                    required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" v-model="payload.userProfile" placeholder="IMG URL" class="form-control my-3"
                    required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" v-model="payload.userRole" placeholder="user" class="form-control my-3"
                    required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="date" v-model="payload.joinDate" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <p class="lead">{{ message }}</p>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <button type="submit" class="btn1 mt-3 mb-5" @click.prevent="register">register</button>
                </div>
              </div>
              <p>Already have an account ? <a href="/login">login here</a></p>
            </form>
          </center>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>


export default {
  components: {},
  data() {
    return {
      payload: {
        firstName: '',
        lastName: '',
        gender: '',
        emailAddress: '',
        userPassword: '',
        userProfile: 'https://i.postimg.cc/Gt87rd3h/team.jpg',
        userRole: 'user',
        joinDate: ''
      }
    }
  },
  computed: {
    message() {
      return this.$store.state.message
    }
  },
  methods: {
    register() {
      console.log('Debug', this.payload);
      this.$store.dispatch('register', this.payload)
    }
  }
}
</script>

<style scoped>
#register {
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
  background-color: black;
  ;
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
}</style>