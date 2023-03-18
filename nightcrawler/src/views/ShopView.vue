<template>
  <main>
    <section id="shop-all">
      <div class="banner">
        <h1 class="shop-text">Shop Now</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="buttons align-items-center" style="padding: 20px;display:grid; gap:10px;">
              <form class="d-flex" role="search">
                <input class="form-control w-100" v-model="searchTerm" type="search" placeholder="Search Product by Name"
                  aria-label="Search">
              </form>
              <button @click.prevent="sortbyPrice" class="btn btn-dark w-100">Sort Price <i class="fa-solid fa-arrow-up"></i> <i class="fa-solid fa-arrow-down"></i></button>
              <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle w-100" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Filter By
                </button>
                <ul class="dropdown-menu bg-dark">
                  <li><a class="dropdown-item bg-dark text-light" href="#">Low-Maintenance</a></li>
                  <li><a class="dropdown-item bg-dark text-light" href="#">Medium-Maintenance</a></li>
                  <li><a class="dropdown-item bg-dark text-light" href="#">High-Maintenance</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-8" style="padding:0;margin:0;">
            <SpinnerComponent style="display: flex;justify-content:center;padding:20px" v-if="isSpinning"/>
            <div v-else>
              <div class="row row-cols-sm-4 gap-3" style="padding: 20px;justify-content:center">
                <div class="card" style="width:17rem" v-for="product in filteredByProductName" :key="product.productID">
                  <img :src="product.imgURL" style="height: 10rem;" class="image-fluid">
                  <div class="overlay">
                    <div class="text" style="display:flex;justify-content:center;gap:5px">
                      <router-link :to="{name: 'single', params : {id: product.productID}}">
                        <button class="btn btn-info" v-if="this.$store.state.userAuth">View Product</button>
                      </router-link>
                    </div>
                  </div>
                  <h3 class="product">{{ product.productName }}</h3>
                  <p class="product">{{ product.category }}</p>
                  <p>R{{ product.price }}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  </main>
  <FooterComponent />
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
import SpinnerComponent from '@/components/SpinnerComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { SpinnerComponent, FooterComponent },
  setup() {
    const store = useStore()
    store.dispatch("getProducts")
    const products = computed(() => store.state.products)
    // products.value.filter((product) => product.category === "high maintenance")
    return { products }
  },
  created() {
    setTimeout(() => {
      this.isSpinning = false;
    }, 3000)
  },
  data() {
    return {
      searchTerm: "",
      // filterOption: [],
      isSpinning: true,
    }
  },
  computed: {
    filteredByProductName() {
      return this.products.filter(product => {
        return product.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    }
  //   ,
  //   filteredProducts() {
  //   if (this.filterOption === 'high maintenance') {
  //     return this.products;
  //   } else {
  //     return this.products.filter(product => {
  //       return product.category === this.filterOption;
  //     });
  //   }
  // },
  },
  methods: {
    sortbyPrice() {
      this.$store.commit("sortProductsByPrice");
    }
  },
};
</script>
<style scoped>
#shop-all {
  background: rgb(199, 199, 199);
}

.banner {
  background-color: black;
  height: 20vh;
  padding: 50px;
}

.shop-text {
  font-family: "Special Elite", cursive;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  position: relative;
}

.product {
  font-family: "Special Elite", cursive;
  text-align: center;
  color: black;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
}

.shop-text::after {
  content: "";
  position: absolute;
  display: block;
  left: 43%;
  bottom: -10px;
  width: 14%;
  height: 2px;
  background: rgb(255, 255, 255);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.card:hover .overlay {
  height: 50%;
}

.text {
  display: flex;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn {
  width: 100px;
}</style>