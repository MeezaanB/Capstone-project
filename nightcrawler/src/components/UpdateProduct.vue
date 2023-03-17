<template>
    <div>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProductModel">
    Edit
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="updateProductModel" tabindex="-1" aria-labelledby="updateProductModel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="updateProductModel">Update User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" v-for="product in products" :key="product.productID">
            <input type="number" placeholder="ID" v-model="product.productID" class="form-control my-3" required>
            <input type="text" placeholder="product name" v-model="product.productName" class="form-control my-3" required>
            <input type="text" placeholder="category" v-model="product.category" class="form-control my-3" required>
            <input type="text" placeholder="product price" v-model="product.price" class="form-control my-3"
                required>
            <input type="text" placeholder="product quantity" v-model="product.productQuantity" class="form-control my-3"
                required>
            <input type="text" placeholder="" v-model="product.imgURL" class="form-control my-3" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
    </div>
</template>

<script>

import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
    setup() {
    const store = useStore()
    const products = computed(() => store.state.products)
    return { products }
  },
  mounted() {
    this.$store.dispatch("updateProduct", this.$route.params.id)
  }
}
</script>

<style scoped>
    
</style>