<template>
  <div id="app">

    <v-toolbar class="myHeader" fixed>
    <v-toolbar-logo>My Meals</v-toolbar-logo>
      <v-toolbar-items class="items">
        <!-- <v-toolbar-item class="item" ripple>
          <router-link to="/Home">
            Home
          </router-link>
        </v-toolbar-item> -->


          <router-link to="/Home">
          <!-- <v-toolbar-item class="item" ripple> -->
           <v-btn  warning dark>
              Home
              </v-btn>
              <!-- </v-toolbar-item> -->
          </router-link>

          <router-link to="/Recipe">
          <!-- <v-toolbar-item class="item" ripple> -->
          <v-btn primary dark>
              Recipe
              </v-btn>
              <!-- </v-toolbar-item> -->
          </router-link>


        <!-- <v-toolbar-item class="item" ripple>
          <router-link to="/Search">Search</router-link>
        </v-toolbar-item> -->
      </v-toolbar-items>
    </v-toolbar>

    <router-view></router-view>

    <!-- <router-link :to="{ name: 'Meals'}">Meals</router-link>
    <router-link :to="{ name: 'Home'}">Home</router-link>
    <router-link :to="{ name: 'Search'}">Search</router-link> -->

    <v-footer class="myHeader">
  <div class="text-xs-center">© 2017</div>
  </v-footer>

  </div>
</template>

<script>
// import axios from 'axios'
import Home from './components/Home'
import Recipe from './components/Recipe'

export default {
  name: 'app',
  components: {
    Home,
    Recipe
  },
  mounted: function () {
    // axios.get('https://reqres.in/api/users?page=2').then((value) => { console.log('value', value) })
  },
  data: function () {
    return {
      scrolled: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin:-10px;
}

.myHeader{
  background: #333;
}

h1 {
  color:white;
  line-height: 1;
  text-transform: uppercase;
  font-size: 50px;
}

.items{
  margin-right: 10%;
}
.item{
  /*text-transform: uppercase;*/
}
.item:hover{
  background-color: rgb(103, 100, 102);
}
</style>
