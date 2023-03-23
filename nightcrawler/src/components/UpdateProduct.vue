<template>
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
        <div v-for="product in products" :key="product.productID" class="modal-body">
          <form @submit.prevent="updateProduct(product.productID)">
            <div class="form-row">
              <input class="form-control my-3" v-model="product.productID" type="text" placeholder="Product ID">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="product.productName" type="text" placeholder="Product Name">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="product.category" type="text" placeholder="Category">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="product.price" type="number" placeholder="Price">
            </div>
            <div class="form-row">
              <input class="form-control my-3" v-model="product.productQuantity" type="number" placeholder="Quantity">
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
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore()
    store.dispatch("getProducts")
    const products = computed(() => store.state.products)
    return { products }
  },
  data() {
    return {
      product: {
        productID: this.productID,
        productName: this.productName,
        category: this.category,
        price: this.price,
        productQuantity: this.productQuantity,
        imgURL: this.imgURLproduct
      },
      computed: {
        message() {
          return this.$store.state.message;
        }
      },
      mounted() {
        this.$store.dispatch('updateProduct', this.$route.params.id)
      },
      methods: {
        updateProduct: function (product) {
          return this.$store.dispatch('updateProduct', {
            productID: product.productID,
            productName: product.productName,
            category: product.category,
            price: product.price,
            productQuantity: product.productQuantity,
            imgURL: product.imgURL
          })
        }
      }
    }
  }
}
</script>

<style scoped>

</style>