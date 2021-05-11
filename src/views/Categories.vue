<template>
  <v-container class="text-center">
    <v-row>
      <v-spacer />
      <v-col cols="4">
        <v-text-field
          label="Category"
          v-model="name">
        </v-text-field>
        <v-btn
          color="green"
          @click="addCategory({ name: name })" 
          :disabled="!name">
          Add
        </v-btn>
      </v-col>
      <v-spacer />
    </v-row>
    <br><br>
    <v-row>
      <v-spacer />
      <v-col cols="4">
        <h3 class="mb-3">Categories on Database</h3>
        <p v-if="categories.length === 0">No Categories</p>
        <v-card
          class="pa-2"
          v-for="(cat, index) in categories"
          :key="index"
        >
          <h4>{{cat.name}}</h4>
          <v-btn
            small
            color="red" 
            @click="deleteCategory(cat.id)"
          >
            Delete
          </v-btn>
        </v-card>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "Categories",
  data() {
    return {
      name: "",
    };
  },
  computed: mapState({
    categories: state => state.categories.categories
  }),
  methods: mapActions('categories', [
    'addCategory',
    'deleteCategory'
  ]),
  created() {
    this.$store.dispatch('categories/getCategories')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  max-width: 65%;
}
</style>