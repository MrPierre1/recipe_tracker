<template>
  <div class="pic4" transition="v-fade-transition">
  <div class="mealContainer pic2">
    <div>
    <v-card hover raised class="pic3">
      <v-card-row class="pic"
        :img="imageSrc"
       height="250px"
       >  </v-card-row>
      <v-card-column>
        <v-card-row height="75px" class="brown white--text">
          <v-card-text>
            <strong><slot name="title"></slot></strong>
            <!-- <strong :title="mealTitle"></strong> -->
<hr>
            <div> <slot name="description"></slot>  </div>
          </v-card-text>
        </v-card-row>
        <v-card-row actions class="brown darken-2">
           <!-- <v-layout justify-space-around> -->
          <v-btn flat class="white--text" v-tooltip:top="{ html: 'Click For Details' }" @click.native="showModal = true">
            <v-icon left class="green--text text--darken-2">details</v-icon>Details
          </v-btn>
          <!-- <v-btn disabled flat class="white--text" v-tooltip:top="{ html: 'Click For Details' }" @click.native="editModal = true">
            <v-icon disabled left class="blue--text text--darken-2">edit</v-icon>Edit
          </v-btn> -->
          <slot name="actions"></slot>
          <!-- </v-layout> -->
        </v-card-row>
      </v-card-column>
    </v-card>
  </div>

    <div v-if="showModal">
      <!-- <meal-modal></meal-modal> -->
      <v-dialog  class="dialog" slot="activator" v-model="showModal" width="700px">
    <v-card>
      <v-card-row>
        <v-card-title class="title"> <slot name="header" class="header"></slot>
        </v-card-title>
      </v-card-row>
      <v-card-row class="modalContent">
        <v-card-text>
          <slot name="modalContent"></slot>
        </v-card-text>
      </v-card-row>
      <v-card-row actions class="actions">
        <v-btn class="green--text darken-1" flat="flat" @click.native="showModal = false">Close</v-btn>
      </v-card-row>
    </v-card>
  </v-dialog>
  </div>

  </div>
</div>
</template>

<script>
// import Edit from './Edit.vue'
import MealModal from './MealModal.vue'

export default {
  name: 'Meal',
  props: ['imageSrc', 'mealTitle'],
  components: {
    // 'edit': Edit,
    'meal-modal': MealModal
  },
  data: function () {
    return {
      showModal: false,
      d1: true,
      setFavorite: false,
      editModal: false,
      d4: false,
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
  methods: {
    setFavoriteTag: function () {
      console.log(this.setFavorite, 'yess fav')
      this.setFavorite = !this.setFavorite
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
/*.dialog{*/
  /*width:100%;*/
  /*margin: auto auto;*/
/*}*/

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
