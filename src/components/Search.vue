<template>
  <div class="" v-cloak>
    <div class="background">
      <header class="header">
        <div class="center-content">
          <h1>Find A Meal</h1>
          <v-toolbar class="secondary grey lighten-4 elevation-24">
    <v-text-field
    prepend-icon="search"
     label="Search..."
      hide-details
      single-line
       hint="Chicken Parmessean, White Bean Chili"
       v-model="search"
       v-on:keyup.enter.native='searchFunc(search)'>
    </v-text-field>
        </v-toolbar>
        </div>
      </header>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import {mapActions} from 'vuex'

export default {
  name: 'Search',
  data: function () {
    return {
      search: '',
      mydata: ''
    }
  },
  mounted: function () {
    axios.get(`http://localhost:3000/users`).then((value) => {
      // this.$store.commit('SETUSER', value) // set the user in the store
      this.$store.dispatch('setUser', value) // set the user in the store
      console.log('this.search', this.$store.state.mealList, 'mymeal ')
    })
  }
  // methods: {
    // searchFunc: function (search) {
      // this.$store.dispatch('searchMeal', search) // set the user in the store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  /*background-image: url("https://unsplash.it/1500?random");*/
  background-image: url("../assets/r1.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 500px;
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
  margin-top: -100px;
  margin-bottom: 100px;
  text-align: center;
}

</style>
