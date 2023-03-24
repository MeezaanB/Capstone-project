<template>
  <main>
    <section id="checkout">
      <div class="banner">
        <h1 class="checkout-text">Checkout</h1>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>IMG</th>
            <th>Remove Item</th>
            <th>Clear Cart</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Name">{{ $store.state.cart?.productName }}</td>
            <td data-label="Price">R{{ $store.state.cart?.price }}</td>
            <td data-label="Quantity">1</td>
            <td data-label="Image"><img :src="$store.state.cart?.imgURL" style="height:5rem" alt=""></td>
            <td data-label="Delete"><button @click.prevent="deleteItemCart(cart?.cartID)" type="submit" class="btn btn-danger">Remove Item</button></td>
            <td data-label="Delete"><button @click.prevent="deleteCart()" type="submit" class="btn btn-danger">Clear Cart</button></td>
          </tr>
        </tbody>
        <div class="checkout-button">
          <button class="btn btn-primary">Checkout</button>
        </div>
      </table>
    </section>
  </main>
  <FooterComponent />
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
  components: { FooterComponent },
  setup() {
    const store = useStore()
    store.dispatch("getCart")
    const cart = computed(() => store.state.cart)
    return { cart }
  },
  methods: {
    deleteItemCart(id) {
      this.$store.dispatch('deleteItemCart', id)
    },
    deleteCart(id) {
      this.$store.dispatch('deleteCart', id)
    }
  }
}
</script>
<style scoped>
#checkout {
  height: 100vh;
  background: rgb(184, 184, 184);
}

.banner {
  background-color: black;
  height: 20vh;
  padding: 50px;
}

.checkout-button {
  position: absolute;
  right: 0;
  padding: 10px;
}

.checkout-text {
  font-family: 'Special Elite', cursive;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  position: relative;
}

.checkout-text::after {
  content: "";
  position: absolute;
  display: block;
  left: 43%;
  bottom: -10px;
  width: 14%;
  height: 2px;
  background: rgb(255, 255, 255);
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
}</style>