<template>
  <div id="app">
<div class="flex justify-between border-b border-gray-500">
<Navbar></Navbar>
<Searchbar></Searchbar>
    </div>


    <router-view />





<div class="border-b border-gray-500 text-center">

<span class="text-lg text-yellow-500 font-semibold">build By : Ahmed MohamedSalih </span>

  </div>

    

  </div>
</template>

<script>
import Navbar from "./components/header/Navbar";
import Searchbar from "./components/header/Searchbar";
export default {
  name: "App",
  components: {
    Navbar,
    Searchbar,
  },
};
</script>

<style>

</style>
