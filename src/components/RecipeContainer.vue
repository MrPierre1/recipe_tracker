<template>

  <div class='mealsContainer'>
     <v-layout row wrap >
       <v-flex xs4 v-for="(i, index) in this.$store.state.recipes.data" :key="i">

         <div class="">
           <iframe src="https://www.w3schools.com">
             <p>Your browser does not support iframes.</p>
           </iframe>
         <meal :imageSrc=i.image >
          <template slot="title">
             {{i.name}}
          </template>

           <template slot="header">

              <h4>{{i.name}}</h4>
           </template> -->

        </meal>
      </div>

       </v-flex>
     </v-layout>
  </div>
</template>

<script>
import Meal from './Meal.vue'
import store from '../store/store'
// import scrapeData from '../../qws'

export default {
  name: 'RecipeContainer',

  store,

  data: function () {
    return {
      recipes: ''
    }
  },
  methods: {

  },
  components: {
    Meal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mealsContainer{
  margin:30px;
  background-color: #faf3f0;
}
</style>
