
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import users from './../../customer-'

Vue.use(Vuex)

const state = {
  count: 0,
  meals: [],
  myfav: [],
  data: '',
  mealList: [],
  showWeather: 'Yes',
  template: 2,
  showModal: false,
  search: '',
  recipes: '',
  isActive: false
}

const getters = {
  getMealData: state => {
    return state.mealList
  }
}

const mutations = {
  SETUSER (state, mealList) {
    state.mealList = mealList
  },
  ADDMEALS (state, mealInfo) {
    // state.mealList = mealList
    // Vue.nextTick(function () {
    //   console.log('11mealInfo: ', mealInfo)
    // })
    axios.post(`http://localhost:3000/users`, mealInfo).then((value) => {
      console.log('mealInfo: ', mealInfo, value)
      axios.get(`http://localhost:3000/users`)
        .then((response) => {
          state.meals.push(response)
          state.mealList = response
          console.log('got the data ', state.mealList)
          // return {meal: state.meals, meal1: state.mealList}
          // return state.mealList
        })
    })
    // Vue.nextTick(function () {
    // axios.get(`http://localhost:3000/users`)
    //   .then((response) => {
    //     state.meals.push(response)
    //     state.mealList = response
    //     console.log('got the data ', state.mealList)
    //     // return {meal: state.meals, meal1: state.mealList}
    //     // return state.mealList
    //   })
    // })
  },
  CHANGEMODAL (state, showModal) {
    state.showModal = showModal
  },

  SEARCHFILTER (state, search) {
    state.search = search

    state.mealList.data.filter(function (mySearcValue) {
      // console.log('value:', value, 'Search val', that.search, value.name.indexOf(that.search) >= 0)
      // return value.name.indexOf(that.search) >= 0
      if (mySearcValue.name.indexOf(state.search) > -1) {
        state.mealList.data = mySearcValue
        console.log('just value', state.mealList, 'Just the list ')
        // return this.mydata.data
      }
    })
  },
  GETMEALS (state) {
    console.log('State is ', state.mealList)
    axios.get(`http://localhost:3000/users`)
      .then((response) => {
        state.meals.push(response)
        state.mealList = response
        console.log('got the data ', state.mealList)
        // return {meal: state.meals, meal1: state.mealList}
        return state.mealList
      })
  },
  GETRECIPEDATA (state) {
    // console.log('State is ', state.mealList)
    axios.get(`http://localhost:4000/data`)
      .then((response) => {
        // state.meals.push(response)
        state.recipes = response

        return state.recipes
      })
  },
  GETFAVORITEMEAL (state) {
    // console.log('State is ', state.meals, state)
    axios.get(`http://localhost:3000/users`)
      .then((value) => {
        for (var item in value.data) {
          // if (value.data.hasOwnProperty(value.data[item])) {
          var oneItem = value.data[item]
          // console.log('myItem is this oneItem', oneItem)
          // this.myFav.data = []
          if (oneItem.favorite === true) {
            // console.log('myItem is this gyy', oneItem)
            state.myFav.data.push(oneItem)
              // console.log(call, 'mydata favorite ', this.myFav.data)
          }
          // }
        }

        return state.mealList
      })
  },
  DELETEMEAL (state, mealId) {
    axios.delete(`http://localhost:3000/users/${mealId}`)
      .then((response) => {
        console.log('response from delete ', state.mealList, 'res', response)
        // state.mealList = response
        // return state.mealList
        axios.get(`http://localhost:3000/users`)
          .then((response) => {
            console.log('response1 ', state.mealList, 'res1', response)
            state.mealList = response
            return state.mealList
          })
      })
  }
}

const actions = {
  findMeals (context) {
    // console.log('title', state.meals)
    context.commit('GETMEALS')
  },
  deleteMeal (context, id) {
    // console.log('title', state.meals)
    context.commit('DELETEMEAL', id)
  },
  addMeals (context, mealInfo) {
    context.commit('ADDMEALS', mealInfo)
  },
  getFavoriteMeal (context) {
    context.commit('GETFAVORITEMEAL')
  },
  setUser (context, meal) {
    context.commit('SETUSER', meal)
  },
  searchMeal (context, searchItem) {
    context.commit('SEARCHFILTER', searchItem)
  },
  getRecipe (context) {
    context.commit('GETRECIPEDATA')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
