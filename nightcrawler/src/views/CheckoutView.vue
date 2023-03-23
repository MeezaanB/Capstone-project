checkout
<template>
  <main>
    <section id="checkout">
      <div class="banner">
        <h1 class="checkout-text">Checkout</h1>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>IMG</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product">
            <td data-label="Name">{{ product.productName }}</td>
            <td data-label="Price">R{{ product.price }}</td>
            <td data-label="Quantity">{{ product.productQuantity }}</td>
            <td data-label="Image"><img :src="product.imgURL" style="height:5rem" alt=""></td>
            <td data-label="Edit">
              <UpdateProduct />
            </td>
            <td data-label="Delete"><button @click="deleteProduct(product.productID)" type="submit"
                class="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
  <FooterComponent/>
</template>
  
<script>
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { FooterComponent }
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
}
</style>