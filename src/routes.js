import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Movie from "./components/movie/Movie.vue";
import Actors from "./components/actors/Actors.vue";
import ActorDetail from "./components/actors/ActorDetail.vue";
let router = new VueRouter({
    mode:"history",
    routes:[



        {
            path:"/tony-movies/",
            name:"home",
            component:Home,
        },
        {
            path: "/tony-movies/movie/:id",
            name: "movie",
            component: Movie,
          },
          {
            path: "/tony-movies/actors",
            name: "actors",
            component: Actors,
          },
          {
            path: "/tony-movies/actor/:id",
            name: "ActorDetail",
            component: ActorDetail,
          },
    ],
});
export default router;
