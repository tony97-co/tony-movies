<template>

<div class="container  mx-auto ">
    
<populer-movie></populer-movie>
<UpcomingMovies />
</div>


</template>



<script>


import PopulerMovie from "./PopulerMovie.vue";
import UpcomingMovies from "./UpcomingMovies.vue"
export default{
    components:{
        PopulerMovie,
        UpcomingMovies,
    }
};
</script>
<style>
</style>