<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addProductModal">
    Add Product
  </button>

  <!-- Modal -->
  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addProductModal">Add a product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createProduct">
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.productName" type="text" placeholder="Product Name">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.productDescription" type="text" placeholder="Product Description">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.category" type="text" placeholder="Category">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.price" type="number" placeholder="Price">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.productQuantity" type="number" placeholder="Quantity">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="payload.imgURL" type="text" placeholder="IMG URL">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Add Product</button>
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
      payload: {
        productName: '',
        productDescription: '',
        category: '',
        price: '',
        productQuantity: '',
        imgURL: 'https://i.postimg.cc/Z0kmQ4WF/NC2.png'
      },
    }
  },
  computed: {
    message() {
      return this.$store.state.message;
    }
  },
  methods: {
    createProduct() {
      console.log('Debug', this.payload);
      this.$store.dispatch('createProduct', this.payload)
    }
  }
}
</script>

<style scoped>
</style>