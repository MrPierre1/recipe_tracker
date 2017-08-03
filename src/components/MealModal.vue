<template>
  <div class="mealModal">
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
</template>

<script>
export default {
  name: 'mealmodal',
  data: function () {
    return {
      d1: false,
      showModal: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.mealContainer{
  /*margin:15px;*/
  /*border: 5px solid white;*/
/*}*/

/*.title{
  background-color: green;
  color:white;
}*/
/*.modalContent{
  background-color: white;
}*/

/*.fav{
  cursor: pointer;
}
.actions{
  background-color: white;
}*/


/*.dialog{
  width:100%;
}*/

/*h1{
  background-color: green;
}*/

.title{
  background-color: green;
  color:white;
  height:auto;
}
h4{
  color:white;
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
  background-color: white;
  border: 5px solid white;
}




</style>
