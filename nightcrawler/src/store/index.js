import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
const api = "https://nightcrawler-new.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    userAuth: JSON.parse(localStorage.getItem('userAuth')) || null,
    loggedIn:null,
    products: null,
    product: null,
    cart: null,
    token: null,
    spinner: true,
    asc: true,
    message: null,
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, user) {
      state.user = user
      state.userAuth = true
      localStorage.setItem('user', JSON.stringify(user))
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
    setCart(state, values) {
      state.cart = values
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
          alert('Logged In') 
            const {  result, jToken,  msg, err} = await response.data
            if(result) {
              context.commit('setUser', result);
              context.commit('setToken', jToken);
              localStorage.setItem('user_token', jToken)
              localStorage.setItem('user', JSON.stringify(result))
              context.commit('setMessage', msg);
              setTimeout(()=> {
                router.push({name: 'shop' });
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
        alert('Successfully Added User') 
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
    async updateUser(context, payload) {
      try {
        const res = await axios.put(`${api}user/${payload.userID}`, payload)
        console.log('Response:' , res);
        alert('Successfully Updated Details')
        let { results, err} = await res.data;
        if (results) {
          context.commit('setUser', results[0])
        } else {
          context.commit('setMessage', err)
        }
      } catch(error) {
        console.log(error)
      }
    },  
    async deleteUser({commit, dispatch }, id) {
      try{
        await axios.delete(`${api}user/${id}`)
        alert('Successfully Deleted User') 
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
        alert('Successfully Added Product')
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
    async updateProduct(context, payload) {
      try {
        const res = await axios.put(`${api}product/${payload.productID}`, payload)
        console.log('Response:' , res);
        alert('Successfully Updated Product')
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
        alert('Successfully Deleted Product') 
        dispatch('getProducts');
      } catch (error) {
        commit('setMessage', 'Could not delete product')
      }
    },
     /* CART METHODS */
   async getCart(context) {
      let userID = localStorage.getItem('userID')
      const res = await axios.get(`${api}user/${userID}/carts`)
      let { results, err } = await res.data;
      if (results) {
        context.commit('setCart', results)
      } else {
        context.commit('setMessage', err)
      }
    },
    async addCart(context, payload) {
      console.log(payload);
      alert('Added to cart')
      let userID = localStorage.getItem('userID')
      const {results, msg} = await axios.post(`${api}user/${userID}/cart`, payload)
      if (results) {
        context.commit('setCart', results.data)
      } else {
        context.commit('setMessage', msg)
      }
    },
    async updateCart(context, payload) {
      console.log(payload);
      let userID = localStorage.getItem('userID')
      const res = await axios.put(`${api}user/${userID.payload}/cart/`, payload) 
        let {results, err} = await res.data
        if (results, err) {
          context.commit('setCart', results)
        } else {
          context.commit('setMessage', err)
        }
    },
    async deleteItemCart({commit, dispatch }) {
      try{
        await axios.delete(`${api}user/1/cart/1`)
        commit('setMessage', 'Item removed successfully'); 
        dispatch('getCart');
      } catch (error) {
        commit('setMessage', 'Could not remove item')
      }
    },
    async deleteCart({commit, dispatch }, id) {
      try{
        await axios.delete(`${api}user/${id}/cart`)
        commit('setMessage', 'Cart was emptied'); 
        dispatch('getCart');
      } catch (error) {
        commit('setMessage', 'Could not empty cart')
      }
    }
  },
  modules: {}
})
