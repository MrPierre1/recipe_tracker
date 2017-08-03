<template>
  <div class="">
     <search>
     </search>
     <meals>
     </meals>
     <v-btn class="add" floating="floating"  v-show="mealOpen" raised ripple @click.native="addMeal">
        <v-icon>add</v-icon>
     </v-btn>



     <!-- <template> -->
     <div
      v-bind:class="{ overlay: isActive }"
     >
       <v-layout row justify-center  v-if="dialog">
         <v-dialog  slot="activator" v-model="dialog" width="800px" class="mealDialog" style="margin-bottom:250px;" persistent>

           <v-card class="myCard">
              <v-card-row>
                 <v-card-title class="title">
                    Add Meal
                 </v-card-title>
              </v-card-row>
              <v-card-text>
                <v-text-field
                   name="name"
                   label="Add a meal name"
                   single-line
                   prepend-icon="perm_identity"
                   v-model="mealName"
                   required>
                </v-text-field>
                <v-text-field
                   name="description"
                   label="Add a meal description"
                   single-line
                   prepend-icon="details"
                   v-model="description"
                   required>
                </v-text-field>
                <v-text-field
                   name="image"
                   label="Add a meal image"
                   single-line
                   prepend-icon="image"
                   v-model="image"
                   >
                </v-text-field>
                 <div class="parentList">

                    <div class="ingredients">

                             <v-layout row wrap>
                    <v-flex xs12>
                                <v-text-field
                                   name="ingredient"
                                   label="Add an ingredient"
                                   single-line
                                   prepend-icon="note_add"
                                   v-model="newIngredient">
                                </v-text-field>
                              </v-flex>
                       </v-layout>

                       <hr>
                       <v-btn class="addOne" floating="floating" raised ripple @click.native="addIngredients(newIngredient)">
                          <v-icon>plus_one</v-icon>
                       </v-btn>
                       <hr>
                       <v-card>
                          <v-list>
                             <v-list-item v-for="ingredient in ingredients" :key="ingredient">
                                <v-list-tile avatar>
                                   <v-list-tile-action>
                                      <v-icon  class="pink--text">star</v-icon>
                                   </v-list-tile-action>
                                   <v-list-tile-content>
                                      <v-list-tile-title v-text="ingredient" />
                                   </v-list-tile-content>
                                </v-list-tile>
                             </v-list-item>
                          </v-list>
                       </v-card>
                    </div>
                    <div class="steps" >
                      <v-layout row wrap>
             <v-flex xs12>
                               <v-text-field
                                  name="step"
                                  label="Add a step"
                                  single-line
                                  prepend-icon="note_add"
                                  v-model="newStep">
                               </v-text-field>
                             </v-flex>
                      </v-layout>
                      <hr>
                      <v-btn class="addOne" floating="floating" raised ripple @click.native="addStep(newStep)" v-on:keyup.enter="addStep(newStep)">
                         <v-icon>plus_one</v-icon>
                      </v-btn>
                      <hr>
                      <v-card>
                         <v-list>
                            <v-list-item v-for="step in steps" :key="step">
                               <v-list-tile avatar>
                                  <v-list-tile-action>
                                     <v-icon  class="pink--text">star</v-icon>
                                  </v-list-tile-action>
                                  <v-list-tile-content>
                                     <v-list-tile-title v-text="step" />
                                  </v-list-tile-content>
                               </v-list-tile>
                            </v-list-item>
                         </v-list>
                      </v-card>
                    </div>
                 </div>
              </v-card-text>
              </v-card-row>
              <v-card-row actions>
                 <v-btn class="green--text darken-1" flat="flat" @click.native="closeDialog()">Close</v-btn>
                 <v-btn   @click.native="submit(mealName, description, image, ingredients, steps)" success dark>Submit</v-btn>
              </v-card-row>
           </v-card>
         </v-dialog>
       </v-layout>
     </div>

  </div>
</template>

<script>
import Search from './Search.vue'
import Meals from './Meals.vue'
import Meal from './Meal.vue'
// import Edit from './Edit.vue'
import MealModal from './MealModal.vue'
import AddMeal from './AddMeal.vue'
// import axios from 'axios'
// import store from '../store/store'

export default {
  name: 'Home',
  // store,
  data: function () {
    return {
      // addClicked: false,
      d4: false,
      d1: false,
      email: '',
      password: '',
      name: '',
      mealOpen: true,
      myData: '',
      mealName: '',
      description: '',
      image: '',
      ingredients: [],
      newIngredient: '',
      newStep: '',
      steps: [],
      dialog: false,
      isActive: false
    }
  },
  mounted () {
    // this.$store.commit('GETMEALS')
    // this.mealData = this.$store.getters.getMealData
  },
  methods: {
    addMeal: function () {
      this.d4 = true
      this.ingredients = []
      this.mealOpen = false
      this.dialog = true
      this.isActive = true
      console.log('The meal is something:', this.mealOpen, !this.mealOpen)
    },

    closeDialog: function () {
      this.dialog = false
      this.isActive = false
      this.mealOpen = true
    },

    addStep: function (newStep) {
      console.log('this.newIngredient', this.newStep)
      if (this.newStep.length > 0) {
        this.steps.unshift(this.newStep)
        console.log('All ', this.steps, 'one : ', this.newStep)
        this.newStep = ''
      } else {
        console.log('Missing all ', this.steps, 'Missing one : ', this.newStep)
      }
    },
    addIngredients: function (newIngredient) {
      console.log('this.newIngredient', this.newIngredient)
      if (this.newIngredient.length > 0) {
        this.ingredients.unshift(this.newIngredient)
        console.log('All ', this.ingredients, 'one : ', this.ingredient)
        this.newIngredient = ''
      } else {
        console.log('Missing all ', this.ingredients, 'Missing one : ', this.ingredient)
      }
    },
    submit: function (name, ingredients, steps) {
      // return axios.post(`http://localhost:3000/users`, {'name': this.mealName, 'description': this.description, 'avatar': this.image, 'steps': this.steps, 'ingredients': this.ingredients}).then((value) => {
      //   this.myData = value
      this.$store.dispatch('addMeals', {'name': this.mealName, 'description': this.description, 'avatar': this.image, 'steps': this.steps, 'ingredients': this.ingredients})
      // this.$store.dispatch('add')

      // console.log('this is my data: ', this.mydata, value)
      this.mealName = ''
      this.description = ''
      this.image = ''
      this.ingredients = []
      this.steps = []
      this.newIngredient = ''
      this.newStep = ''
      this.d4 = false

      this.dialog = false
      this.isActive = false
      this.mealOpen = true
      //   this.dataLength = this.mydata; console.log('1value', this.mydata, this.mydata.data.length)
      // })
    }
  },
  components: {
    Search,
    Meals,
    Meal,
    MealModal,
    AddMeal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  /*position: absolute;
  left:33%;
  top:30%;
  z-index: 89;*/
}
.dialog{
  width:100%;
  /*margin: auto auto;*/
}
.addMeal{
  /*width: 300px;*/
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
      margin-bottom: 286px;
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
