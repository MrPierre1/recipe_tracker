<template>
  <div class="" transition="v-fade-transition">

  <div class="mealContainer">

      <!-- <v-dialog > -->
    <!-- <v-btn primary dark slot="activator">Open Dialog</v-btn> -->
    <v-card v-model="d5" slot="activator" >
      <v-card-row>
        <v-card-title>Meal Profile</v-card-title>
      </v-card-row>
      <v-card-row>
        <v-card-text>
          <v-container fluid>
            <v-text-field label="name" required />
            <small>*indicates required field</small>
            <v-text-field label="name" required />
            <small>*indicates required field</small>
          </v-container>
        </v-card-text>
      </v-card-row>
      <v-card-row actions>
        <v-btn class="blue--text darken-1" flat @click.native="d5 = false">Close</v-btn>
        <v-btn class="blue--text darken-1" flat @click.native="d5 = false">Save</v-btn>
      </v-card-row>
    </v-card>
  <!-- </v-dialog> -->

  </div>
</div>
</template>

<script>
// import MealModal from './MealModal.vue'

export default {
  name: 'Meal',
  props: ['imageSrc'],
  components: {
    // MealModal
  },
  data: function () {
    return {
      showModal: false,
      d1: true,
      d5: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mealContainer{
  margin:15px;
  border: 5px solid white;
}


</style>
