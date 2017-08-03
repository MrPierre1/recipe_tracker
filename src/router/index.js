import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
  // import Meals from '@/components/Meals'
import Recipe from '@/components/Recipe'
  // import MealModal from '@/components/MealModal'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    // name: 'Home',
    component: Home
  }, {
    path: '/recipe',
    // name: 'Search',
    component: Recipe
  }]
})
