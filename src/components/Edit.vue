<template>
<div>
  <v-dialog  class="dialog" slot="activator" v-model="editModal" width="700px">

  <v-card class="myCard">
     <v-card-row>
        <v-card-title class="title">
           Edit Meal
        </v-card-title>
     </v-card-row>
     <v-card-text>
       <v-text-field
          name="name"
          :value="value.name"
          single-line
          prepend-icon="perm_identity"
          @click.native="read($event)"
          required>
       </v-text-field>
       <v-text-field
          name="description"
          single-line
          prepend-icon="details"
          :value="value.description"
          required>
       </v-text-field>
       <v-text-field
          name="image"
          single-line
          :value="value.avatar"
          prepend-icon="image"
          >
       </v-text-field>
       <div class="parentList">

          <div class="ingredients">

             <hr>
             <v-card>
                <v-list>
                   <v-list-item v-for="ingredient in value.ingredients" :key="ingredient">
                      <v-list-tile avatar>
                         <v-text-field
                            name="ingredient"
                            single-line
                            prepend-icon="star"
                            :value="ingredient"
                            >
                         </v-text-field>
                      </v-list-tile>
                   </v-list-item>
                </v-list>
             </v-card>
          </div>
          <div class="steps">
            <hr>
            <v-card>
               <v-list>
                  <v-list-item v-for="step in value.steps" :key="step">
                     <v-list-tile avatar>
                       <v-text-field
                          name="ingredient"
                          single-line
                          prepend-icon="star"
                          :value="step"
                          >
                       </v-text-field>
                     </v-list-tile>
                  </v-list-item>
               </v-list>
            </v-card>
          </div>
        </div>
     </v-card-text>
     <v-card-row actions class="actions">
       <v-btn   @click.native="submit(value.name, value.description, value.avatar)" success dark>Submit</v-btn>

       <!-- <v-btn class="green--text darken-1" flat="flat" @click.native="submit()">Close</v-btn> -->
     </v-card-row>
     <p>Value:  {{value}}</p>
<!--  -->

  </v-card>
</v-dialog>

</div>
</template>

<script>
// import MealModal from './MealModal.vue'
// import axios from 'axios'
export default {
  name: 'Edit',
  props: ['value'],
  data: function () {
    return {
      editModal: true
      // model: ''
    }
  },
  mounted () {
    // this.meals = this.$store.dispatch('findMeals')
    // console.log('meals :  ', this.meals)
  },
  computed: {
    mealDataList () {
      return this.$store.getters.getMealData
    }
  },
  methods: {
    setFavoriteTag: function () {
      console.log(this.setFavorite, 'yess fav')
      this.setFavorite = !this.setFavorite
    },
    read (event) {
      console.log('My event list ---', event)
    },
    submit (name, desc, img) {
      // this.meals = this.$store.commit('GETMEALS')
      console.log('meals :  -------', name, desc, img)
      // console.log('meals :  ', this.meals)
      // axios.get(`http://localhost:3000/users`)
      // .then((response) => {
      //   // state.meals.push(response)
      //   // state.mealList = response
      //   console.log('got the data ', response)
      //   // return {meal: state.meals, meal1: state.mealList}
      //   // return state.mealList
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mealContainer{
  /*margin:15px;*/
  border: 5px solid white;
}

.title{
  background-color: green;
  color:white;
}
.modalContent{
  /*height: 500px;*/
  background-color: white;
}
.dialog{
  /*width: 110%;*/
  /*height: 800px;*/
}
.pic{
  /*height:500px;*/
  /*width: 500px;*/
}

.fav{
  cursor: pointer;
}
.actions{
  background-color: white;
}
.mealContainer{
  /*margin:15px;*/
  border: 5px solid white;
}

.title{
  background-color: green;
  color:white;
}
.modalContent{
  /*height: 500px;*/
  background-color: white;
}

.fav{
  cursor: pointer;
}
.actions{
  background-color: white;
}

.add{
  position:fixed;
  width:75px;
  height:75px;
  background:red;
  left:85%;
  bottom:20%;
  z-index: 10;
}
.addOne{
  background:red;

}
.dialog{
  width:100%;
  /*margin: auto auto;*/
}

h1{
  background-color: green;
}

.title{
  background-color: green;
  color:white;
  height:auto;
}
h4{
  color:white;
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

.dialog{
  background-color: red;
  border: solid 5px red;
      /*margin-bottom: 286px;*/
}

  .overlay {
    position: fixed; /* Sit on top of the page content */
    /*display: b; /* Hidden by default */*/
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    /*z-index: 2;*/
}

.card{
  /*background-color: red;*/
  background-color: white;
  border: 5px solid white;
  /*z-index: 500;*/
}



</style>
