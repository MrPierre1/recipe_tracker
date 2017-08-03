<template>

  <div>
     <div class="">

              <v-layout row wrap>
     <v-flex xs12>
       <!-- <v-card class="primary"> -->
                 <v-card height="55px" class="cardContainer">
                    <v-bottom-nav
                       absolute
                       shift
                       fixed
                       value="true"
                       :class="{
                       'blue-grey': e2 === 1,
                       'teal': e2 === 2,
                       'brown': e2 === 3,
                       'brown lighten-1': e2 === 4
                       }"
                       >
                       <v-btn flat dark @click.native="load(e2 = 1, call = 'all')" :value="e2 === 1">
                          <span>All</span>
                          <v-icon>book</v-icon>
                       </v-btn>
                       <v-btn flat dark @click.native="load(e2 = 2, call = 'favorite')" :value="e2 === 2">
                          <span>Favorite</span>
                          <v-icon>favorite</v-icon>
                       </v-btn>
                       <v-btn flat dark @click.native="load(e2 = 3, call = 'recent')" :value="e2 === 3">
                          <span>Recent</span>
                          <v-icon>history</v-icon>
                       </v-btn>
                       <v-btn flat dark @click.native="load(e2 = 4, call = 'new')" :value="e2 === 4">
                          <span>New</span>
                          <v-icon>fiber_new</v-icon>
                       </v-btn>
                    </v-bottom-nav>
                    <!-- </v-card> -->
                 </v-card>
               </v-flex>
</v-layout>

     </div>
     <div class="mealsContainer" v-cloak>

              <div id="example-5">
     <v-layout row wrap >
      <!-- <v-flex xs4 v-for="(i, index) in getMealData.data" :key="i"> -->
      <!-- <v-flex xs4 v-for="(i, index) in this.$store.state.mealList.data" :key="i"> -->
      <v-flex xs4 v-for="(i, index) in mealDataList.data" :key="i">

        <meal :imageSrc=i.avatar >
          <template slot="title">

             {{i.name}}
          </template>

           <template slot="description">

              {{i.description}}
           </template>
           <template slot="header">

              <h4>{{i.name}}</h4>
           </template>
           <template slot="modalContent">

              <div class="parentList">

                 <div class="ingredients">
                      <hr>
                      <v-card>
                         <v-list v-for="ingredient in i.ingredients" :key="ingredient">
                            <v-list-item >
                               <v-list-tile avatar>
                                  <v-list-tile-action>
                                     <v-icon  class="pink--text">star</v-icon>
                                  </v-list-tile-action>
                                  <v-list-tile-content>

                                     <ul >
                                       <li style="font-color:red;">{{ingredient}}</li>
                                     </ul>
                                  </v-list-tile-content>
                               </v-list-tile>
                            </v-list-item>
                         </v-list>
                      </v-card>

                 </div>

                 <hr>
                 <div class="steps">

                   <hr>
                   <v-card>
                      <v-list v-for="step in i.steps" :key="step">
                         <v-list-item >
                            <v-list-tile avatar>
                               <v-list-tile-action>
                                  <v-icon  class="pink--text">star</v-icon>
                               </v-list-tile-action>
                               <v-list-tile-content>

                                  <ul>
                                    <li style="font-color:red;">{{step}}</li>
                                  </ul>
                               </v-list-tile-content>
                            </v-list-tile>
                         </v-list-item>
                      </v-list>
                   </v-card>
                 </div>
              </div>
           </template>

           <template slot="actions">
             <!-- <v-btn flat class="white--text" v-tooltip:top="{ html: 'Click For Details' }">
               <v-icon left>details</v-icon>Details
             </v-btn> -->

             <!-- <v-btn v-if="i.favorite" flat class="white--text" v-tooltip:top="{ html: 'Click To Remove Favorite' }" @click.native="toggleFav(i,index)">
               <v-icon large class="yellow--text text--darken-2">star</v-icon>Favorite
             </v-btn> -->
             <v-btn disabled flat class="white--text" v-tooltip:top="{ html: 'Click For Details' }" @click.native="editModalValue(i, meals, index, true)">
               <v-icon disabled left class="blue--text text--darken-2">edit</v-icon>Edit
             </v-btn>
             <v-btn flat class="small primary dark white--text" v-tooltip:top="{ html: 'Click To Delete' }" @click.native="deleteMe(i, mealDataList.data, index)">
               <v-icon left class="red--text text--darken-2">delete_forever</v-icon>Delete
             </v-btn>
           </template>
        </meal>


      </v-flex>

    </v-layout>
  </div>


  <div v-if="editModal">

<edit
:value=editVal.item
>

</edit>

</div>

     </div>


  </div>
</template>

<script>
import Meal from './Meal.vue'
import Edit from './Edit.vue'
import axios from 'axios'
import store from '../store/store'
export default {
  name: 'Meals',
  store,
  data: function () {
    return {
      isActive: false,
      e2: 1,
      mealCounter: 1,
      mydata: '',
      dataLength: '',
      call: 'users',
      meals: {},
      myFav: { data: [] },
      favorite: '',
      styleObject: {
        'background-color': 'red'
      },
      mealData: this.mealDataList,
      editModal: false,
      editVal: {item: '', meals: '', index: '', val: ''}
    }
  },

  computed: {
    mealDataList () {
      return this.$store.getters.getMealData
    }
  },
  mounted: function mounted () {
    axios.get(`http://localhost:3000/users`)
      .then((response) => {
        this.mealDataList = response
      })
  },

  methods: {

    getMeal () {
      axios.get(`http://localhost:3000/users`)
        .then((res) => {
          this.mealDataList = res
        })
    },
    editModalValue (i, meals, index, val) {
      this.editModal = val
      console.log('Logging from meals:--', i, meals, index, val)
      this.editVal.item = i
      this.editVal.meals = meals
      this.editVal.index = index
      this.editVal.val = val
    },
    toggleFav: function (meal, index) {
      //  meal.favorite = true
      console.log('Its this fav', this.$store.getters.getMealData.data[index])
      if (this.$store.getters.getMealData.data[index].favorite === true) {
        this.styleObject['background-color'] = 'blue'
        this.$store.getters.getMealData.data[index].favorite = false
        // this.favorite = false
        console.log('If Changed has happened', this.favorite, this.$store.getters.getMealData.data[index].favorite, this.$store.getters.getMealData.data[index])
        // return this.favorite

        return axios.patch(`http://localhost:3000/users/${meal.id}`, {'favorite': false}).then((value) => {
          console.log('Result from update', value)
          // console.log('Else Changed has happened', this.favorite, this.$store.getters.getMealData.data[index].favorite)
          // return !this.favorite
        //   this.dataLength = this.mydata; console.log('1value', this.mydata, this.mydata.data.length)
        })
      } else {
        // this.favorite = true
        this.$store.getters.getMealData.data[index].favorite = true
        this.styleObject['background-color'] = 'red'
        return axios.patch(`http://localhost:3000/users/${meal.id}`, {'favorite': true}).then((value) => {
          console.log('Result from patch', value)
          console.log('Else Changed has happened', this.favorite, this.$store.getters.getMealData.data[index].favorite)
          // return !this.favorite
        //   this.dataLength = this.mydata; console.log('1value', this.mydata, this.mydata.data.length)
        })
      }
      // console.log(index, 'MEAL TO FAV', meal)
    },
    deleteMe: function (meal, mealList, index) {
      // this.$store.commit('DELETEMEAL', meal.id)
      // console.log('this.$store.statemeal', this.$store.state.mealList)
      console.log(mealList[index])
    },
    getFav: function (allData) {
      for (var item in allData.data) {
        if (allData.data.hasOwnProperty(allData.data[item])) {
          var oneItem = allData.data[item]
          if (oneItem.favorite) {
             // console.log('myItem is this gyy', oneItem)
            this.myFav.data.push(oneItem)
            console.log('mydata favorite ', this.myFav.data)
          }
        }
      }
      return this.myFav
    },
    load: function (e2, call) {
      console.log('his.mydata', call, this.meals[call])
      axios.get(`http://localhost:3000/users`).then((value) => {
        this.mealData = value
        return this.mealData
      })
    }
  },
  components: {
    Meal,
    'edit': Edit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mealsContainer{
  margin:30px;
  background-color: #faf3f0;
}

.active{
    /*margin: 5%;*/
  outline: 2px solid #333;
}
.cardContainer{
  border: 1px solid #333;
}
.row.wrap{
  /*margin-top:15px;*/
}

.center{
  margin:0 auto;
}

.card{
  /*height: 500px;*/
}
.parentList{
  /*width: 500px;*/
   border: solid 1px #000;
   display: flex;
}

.ingredients{
  width: 40%;
   border: solid 1px #000;
   height: auto;
}

.steps{
   width: 60%;
   border: solid 1px #000;
   height: auto;
}


h1{
  background-color: red;
}
.me{
  /*color: white;*/
  background-color: red;
}
div#example-5 > div > div {
    padding-bottom: 15px;
}

</style>
