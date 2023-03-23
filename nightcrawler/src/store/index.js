import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
import {useCookies} from 'vue3-cookies';
const {cookies} =useCookies();
const api = "https://nightcrawler-capstone.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: null,
    userAuth: true,
    loggedIn:null,
    products: null,
    product: null,
    cart: null,
    token: null,
    spinner: true,
    asc: true,
    message: null
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
      state.userAuth = true
    },
    setToken(state, value) {
      state.token = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setCart(state, value) {
      state.cart = value
    },
    setSpinner(state, spinner) {
      state.spinner = spinner
    },
    setMessage(state, message) {
      state.message = message
    },
    logout(state) {
      state.loggedIn = true
    },
    sortProductsByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc
    }
  },
  actions: {
    
      /* USER METHODS */
    async login(context, payload) {
        try {
          const response = await axios.post(`${api}login`, payload);
          console.log('Response:' ,response);
            const {  result, jToken,  msg, err} = await response.data
            if(result) {
              context.commit('setUser', result);
              context.commit('setToken', jToken);
              cookies.set('user_cookie_value', jToken)
              context.commit('setMessage', msg);
              setTimeout(()=> {
                router.push({name: 'landing' });
              }), 3000
            }else {
              context.commit('setMessage', err);
            }
          }catch (error) {
            console.error(error)
          }
    },
    async register (context, payload) {
      try {
        const res = await axios.post(`${api}register`, payload);
        console.log('Response:' , res);
        const {result, msg, err} = await res.data;
        if (result) {
          context.commit ('setUser', result);
          context.commit ('setMessage', msg);
        }else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async getUsers(context) {
      const res = await axios
      .get(`${api}users`)
      let { results, err } = await res.data;
      if (results) {
        context.commit('setUsers', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async getUser(context, id) {
      const res = await axios.get(`${api}user/${id}`)
      let { results, err } = await res.data;
      if (results) {
        context.commit('setUser', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async updateUser({commit}, id, payload) {
      try {
        const res = await axios.put(`${api}user/${id}`, payload)
        let { msg, err} = await res.data;
        if (msg) {
          commit('setUser', msg);
        } else {
          commit('setMessage', err)
        }
      } catch (error) {
        console.error(error)
      }
    },  
    async deleteUser({commit, dispatch }, id) {
      try{
        await axios.delete(`${api}user/${id}`)
        commit('setMessage', 'User Deleted successfully'); 
        dispatch('getUsers');
      } catch (error) {
        commit('setMessage', 'Could not delete user')
      }
    },
     /* PRODUCTS METHODS */
    async getProducts(context) {
      const res = await axios.get(`${api}products`)
      let { results, err } = await res.data;
      if (results) {
        context.commit('setProducts', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async getProduct(context, id) {
      const res = await axios.get(`${api}product/${id}`)
      let { results, err } = await res.data;
      if (results) {
        context.commit('setProduct', results[0])
      } else {
        context.commit('setMessage', err)
      }
    },
    async createProduct(context, payload) {
      try {
        const res = await axios.post(`${api}product`, payload);
        console.log('Response:' , res);
        let { result, msg, err } = await res.data;
        if (result) {
          context.commit('setProduct', result);
          context.commit ('setMessage', msg);
        }else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error) 
      }
    },
    async updateProduct(context, id, payload) {
      try {
        const res = await axios.put(`${api}product/${id}`, payload)
        console.log('Response:' , res);
        let { results, err} = await res.data;
        if (results) {
          context.commit('setProduct', results[0])
        } else {
          context.commit('setMessage', err)
        }
      } catch(error) {
        console.log(error)
      }
    },
    async deleteProduct({commit, dispatch }, id) {
      try{
        await axios.delete(`${api}product/${id}`)
        commit('setMessage', 'Product Deleted successfully'); 
        dispatch('getProducts');
      } catch (error) {
        commit('setMessage', 'Could not delete product')
      }
    },
     /* CART METHODS */
    async fetchCart(context, id) {
      const res = await axios.get(`${api}user/${id}/carts`)
      let { results, err } = await res.data;
      if (results) {
        context.commit('setCart', results[0])
      } else {
        context.commit('setMessage', err)
      }
    },
    async addCart(context, id) {
      const res = await axios.post(`${api}/user/${id}/cart`)
      let {results, err} = await res.data
      if (results) {
        context.commit('setCart', results)
      } else {
        context.commit('setMessage', err)
      }
    }
  },
  modules: {}
})