<template>

  <div>

    <div class="search">


 <v-layout row wrap>
 <v-flex xs12>
 <header class="header">
 <div class="center-content">
   <h1>Find A Meal</h1>
   <v-toolbar class="secondary grey lighten-4 elevation-24">
 <v-text-field
 prepend-icon="search"
 label="Search..."
 hide-details
 single-line
 hint="Chicken Alfredo, 5 Bean Chili"
 v-model="search"
 v-on:keyup.enter.native='getRecipes(search)'>
 </v-text-field>
 </v-toolbar>
 </div>
 </header>

 </v-flex>
 </v-layout>
 </div>

    <recipe-container>

    </recipe-container>
    <!-- <meals>
    </meals> -->
  </div>
</template>

<script>
import Search from './Search.vue'
import Meals from './Meals.vue'
import RecipeContainer from './RecipeContainer'
// import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Recipe',
  // store,

  data: function () {
    return {
      recipes: '',
      search: ''
    }
  },

  methods: {
    // ...mapActions({
    //   'getMeals': 'getMeals',
    //   'findMeals': 'findMeals',
    //   'deleteMeal': 'deleteMeal',
    //   'getFavoriteMeal': 'getFavoriteMeal',
    //   'setUser': 'setUser'
    // }),
  },
  components: {
    Search,
    Meals,
    RecipeContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  /*background-image: url("https://unsplash.it/1500?random");*/
  background-color: darkBlue;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  display: flex;
}

.center-content {
  width: 60%;
  display: flex;
          flex-direction: column;
          align-items: center;
  margin: auto;
}

.center-content h1 {
  color: white;
  line-height: 1;
  text-transform: uppercase;
  font-size: 35px;
  font-weight: bold;
  /*margin-top: -100px;*/
  /*margin-bottom: 100px;*/
  text-align: center;
}

</style>
