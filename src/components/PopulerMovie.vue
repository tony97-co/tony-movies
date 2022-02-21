<template>
  <div class="mx-5">
      <h2 class="uppercase mp-1 text-yellow-500 text-lg font-semibold">
   popular movies
      </h2>
      <div  class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">

<MoviesItems :key="movie.id"
        v-for="movie in movies"
        :movie="movie" :genres="genres"></MoviesItems>

   
  </div>
    </div>

</template>

<script>


import MoviesItems from "./items/MoviesItems.vue";
export default {
  
  components:{
      MoviesItems,
  },
  data: function() {
    return {
      movies: [],
      genres: [],
    };
  },
   async mounted() {
    
    try {
         this.fetchGenres();
      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get("/genre/movie/list");
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },
  },   

};
</script>

<style>

</style>