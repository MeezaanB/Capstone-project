<template>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#updateUserModal' + `${user.userID}`">
    Edit
  </button>
  
  <!-- Modal -->
  <div class="modal fade" :id="'updateUserModal' + `${user.userID}`" tabindex="-1" aria-labelledby="updateUserModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="updateUserModal">Update User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="register">            
            <div class="form-row">
                <input type="text" v-model="user.firstName" placeholder="First Name" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="text" v-model="user.lastName" placeholder="Last Name" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="text" v-model="user.gender" placeholder="Gender" class="form-control my-3" required>
            </div>
            <div class="form-row">
                <input type="email" v-model="user.emailAddress" placeholder="Email Address" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="password" v-model="user.userPassword" placeholder="******" class="form-control"
                  required>
            </div>
            <div class="form-row">
                <input type="text" v-model="user.userProfile" placeholder="IMG URL" class="form-control my-3"
                  required>
            </div>
            <div class="form-row">
                <input type="date" v-model="user.joinDate" class="form-control my-3" required>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
    data() {
      return {
        payload : {
        firstName: '',
        lastName: '',
        gender: '',
        emailAddress: '',
        userPassword: '',
        userProfile: 'https://i.postimg.cc/Gt87rd3h/team.jpg',
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
      updateUser() {
        console.log('Debug', this.payload);
        this.$store.dispatch('updateUser', this.payload)
      }
    }
}
</script>

<style scoped>
    
</style>