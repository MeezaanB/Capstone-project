<template>
  <main>
    <section id="admin">
      <div class="banner">
        <h1 class="admin-text">Administration</h1>
      </div>
      <SpinnerComponent v-if="isSpinning" />
      <div class="container" v-else>
        <h2 class="users">USERS</h2>
        <!-- USER TABLE STARTS -->
        <div class="container" style="padding-bottom: 10px;">
          <AddUser />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>EmailAddress</th>
              <th>Image</th>
              <th>Role</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
              <td data-label="ID">{{ user.userID }}</td>
              <td data-label="FirstName">{{ user.firstName }}</td>
              <td data-label="LastName">{{ user.lastName }}</td>
              <td data-label="Gender">{{ user.gender }}</td>
              <td data-label="EmailAddress">{{ user.emailAddress }}</td>
              <td data-label="Image"><img :src="user.userProfile" style="height:5rem" alt=""></td>
              <td data-label="Role">{{ user.userRole }}</td>
              <td data-label="Date">{{ user.user_joined }}</td>
              <td data-label="Edit">
                <!-- UpdateUser -->
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                  :data-bs-target="'#updateUserModal' + `${user.userID}`">
                  Edit
                </button>

                <!-- Modal -->
                <div class="modal fade" :id="'updateUserModal' + `${user.userID}`" tabindex="-1"
                  aria-labelledby="updateUserModal" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateUserModal">Update User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="updateUser(user)">
                          <div class="form-row">
                            <input type="text" v-model="user.firstName" placeholder="First Name" class="form-control my-3"
                              required>
                          </div>
                          <div class="form-row">
                            <input type="text" v-model="user.lastName" placeholder="Last Name" class="form-control my-3"
                              required>
                          </div>
                          <div class="form-row">
                            <input type="text" v-model="user.gender" placeholder="Gender" class="form-control my-3"
                              required>
                          </div>
                          <div class="form-row">
                            <input type="email" v-model="user.emailAddress" placeholder="Email Address"
                              class="form-control my-3" required>
                          </div>
                          <div class="form-row">
                            <input type="password" placeholder="Password"
                              class="form-control my-3" required>
                          </div>
                          <div class="form-row">
                            <input type="text" v-model="user.userProfile" placeholder="IMG URL" class="form-control my-3"
                              required>
                          </div>
                          <div class="form-row">
                            <input type="text" v-model="user.userRole" placeholder="******" class="form-control" required>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Update User</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td data-label="Delete"><button @click="deleteUser(user.userID)" type="submit"
                  class="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <!-- USER TABLE ENDS -->
        <h2 class="products">PRODUCTS</h2>
        <!-- PRODUCTS TABLE STARTS -->
        <div class="container" style="padding-bottom: 10px;">
          <AddProduct />
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>IMG</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <td data-label="ID">{{ product.productID }}</td>
              <td data-label="Name">{{ product.productName }}</td>
              <td data-label="Category">{{ product.category }}</td>
              <td data-label="Price">R{{ product.price }}</td>
              <td data-label="Quantity">{{ product.productQuantity }}</td>
              <td data-label="Image"><img :src="product.imgURL" style="height:5rem" alt=""></td>
              <td data-label="Edit">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                  :data-bs-target="'#updateProductModal' + `${product.productID}`">
                  Edit
                </button>
                <!-- Modal -->
                <div class="modal fade" :id="'updateProductModal' + `${product.productID}`" tabindex="-1"
                  aria-labelledby="updateProductModel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="updateProductModel">Update Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="updateProduct(product)">
                          <div class="form-row">
                            <input class="form-control my-3" v-model="product.productID" type="text"
                              placeholder="Product ID">
                          </div>
                          <div class="form-row">
                            <input class="form-control my-3" v-model="product.productName" type="text"
                              placeholder="Product Name">
                          </div>
                          <div class="form-row">
                            <input class="form-control my-3" v-model="product.category" type="text"
                              placeholder="Category">
                          </div>
                          <div class="form-row">
                            <input class="form-control my-3" v-model="product.price" type="number" placeholder="Price">
                          </div>
                          <div class="form-row">
                            <input class="form-control my-3" v-model="product.productQuantity" type="number"
                              placeholder="Quantity">
                          </div>
                          <div class="form-row">
                            <input class="form-control my-3" v-model="product.imgURL" type="text" placeholder="IMG URL">
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Update Product</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- UpdateProduct -->
              </td>
              <td data-label="Delete"><button @click="deleteProduct(product.productID)" type="submit"
                  class="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <!-- PRODUCTS TABLE ENDS  -->
      </div>
    </section>
  </main>
  <FooterComponent />
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import AddProduct from '@/components/AddProduct.vue';
import AddUser from '@/components/AddUser.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { SpinnerComponent, AddProduct, AddUser, FooterComponent, },
  setup() {
    const store = useStore()

    store.dispatch("getUsers")
    store.dispatch("getProducts")

    const users = computed(() => store.state.users)
    const products = computed(() => store.state.products)

    return { products, users }
  },
  created() {
    setTimeout(() => {
      this.isSpinning = false;
    }, 3000)
  },
  data() {
    return {
      isSpinning: true
    }
  },
  methods:
  {
    updateProduct: function (product) {
      return this.$store.dispatch('updateProduct', {
        productID: product.productID,
        productName: product.productName,
        category: product.category,
        price: product.price,
        productQuantity: product.productQuantity,
        imgURL: product.imgURL
      })
    },
    updateUser: function (user) {
      return this.$store.dispatch('updateUser', {
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        emailAddress: user.emailAddress,
        userPassword: user.userPassword,
        userProfile: user.userProfile,
        userRole: user.userRole
      })
    },
    deleteUser(id) {
      this.$store.dispatch('deleteUser', id)
    },
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id)
    }
  },
  mounted() {
    this.$store.dispatch('updateProduct', this.$route.params.id)
  }
}

</script>
<style>
#admin {
  height: 100%;
  padding: 0;
  background: rgb(184, 184, 184);
}

.banner {
  background-color: black;
  height: 20vh;
  padding: 50px;
}

.admin-text {
  font-family: "Special Elite", cursive;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  position: relative;
}

.admin-text::after {
  content: "";
  position: absolute;
  display: block;
  left: 35%;
  bottom: -10px;
  width: 30%;
  height: 2px;
  background: rgb(255, 255, 255);
}

.users,
.products {
  color: black;
  font-size: 50px;
  font-family: 'Special Elite', cursive;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  text-align: center;
  padding: 30px;
}

.table {
  width: 100%;
}

.table td,
.table th {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 16px;
}

.table th {
  background-color: rgb(184, 184, 184);
  color: black;
  font-size: 20px;
  font-family: 'Special Elite', cursive;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
}

.table tbody tr {
  background-color: rgb(184, 184, 184);
  color: black;
}

/*responsive*/
@media(max-width: 300px) {
  .table {
    height: 100%;
    overflow-y: auto;
  }

  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
    width: 100%;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>