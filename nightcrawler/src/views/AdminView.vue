<template>
  <main>
      <section id="admin">
        <div class="banner">
          <h1 class="admin-text">Administration</h1>
        </div>
        <SpinnerComponent v-if="isSpinning"/>
        <div class="container" v-else>
          <h2 class="users">USERS</h2>
          <!-- USER TABLE STARTS -->
          <div class="container" style="padding-bottom: 10px;">
            <AddUser/>
          </div>
          <table class="table">
          <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Gender</th>
                <th>EmailAddress</th>
                <th>Image</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user">
                <td data-label="FirstName">{{user.firstName}}</td>
                <td data-label="LastName">{{user.lastName}}</td>
                <td data-label="Gender">{{user.gender}}</td>
                <td data-label="EmailAddress">{{user.emailAddress}}</td>
                <td data-label="Image"><img :src="user.userProfile" style="height:5rem" alt=""></td>
                <td data-label="Date">{{user.user_joined}}</td>
                <td data-label="Edit"><UpdateUser/></td>
                <td data-label="Delete"><div class="btn btn-danger">Delete</div></td>
              </tr>
            </tbody>
          </table>
          <!-- USER TABLE ENDS -->
          <h2 class="products">PRODUCTS</h2>
          <!-- PRODUCTS TABLE STARTS -->
          <div class="container" style="padding-bottom: 10px;">
            <AddProduct/>
          </div>
          <table class="table">
            <thead>
              <tr>
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
              <tr v-for="product in products" :key="product.productID">
                <td data-label="Name">{{product.productName}}</td>
                <td data-label="Category">{{product.category}}</td>
                <td data-label="Price">R{{product.price}}</td>
                <td data-label="Quantity">{{product.productQuantity}}</td>
                <td data-label="Image"><img :src="product.imgURL" style="height:5rem" alt=""></td>
                <td data-label="Edit"><UpdateProduct/></td>
                <td data-label="Delete"><div class="btn btn-danger">Delete</div></td>
              </tr>
            </tbody>
          </table>
          <!-- PRODUCTS  -->
        </div>
      </section>
  </main>
  <FooterComponent/>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import AddProduct from '@/components/AddProduct.vue';
import UpdateProduct   from '@/components/UpdateProduct.vue'
import AddUser from '@/components/AddUser.vue';
import UpdateUser from '@/components/UpdateUser.vue'
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { SpinnerComponent, AddProduct, UpdateProduct, AddUser, UpdateUser, FooterComponent,  },
  setup() {
    const store = useStore()

    store.dispatch("getUsers")
    const users = computed(() => store.state.users)
    store.dispatch("deleteUser")

    store.dispatch("getProducts")
    const products = computed(() => store.state.products)
    store.dispatch("deleteProduct")
    
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
  }
};
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
.users, .products {
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