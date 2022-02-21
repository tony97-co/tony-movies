import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Movie from "./components/movie/Movie.vue";
import Actors from "./components/actors/Actors.vue";
import ActorDetail from "./components/actors/ActorDetail.vue";
let router = new VueRouter({
    mode:"history",
    routes:[



        {
            path:"/",
            name:"home",
            component:Home,
        },
        {
            path: "/movie/:id",
            name: "movie",
            component: Movie,
          },
          {
            path: "/actors",
            name: "actors",
            component: Actors,
          },
          {
            path: "/actor/:id",
            name: "ActorDetail",
            component: ActorDetail,
          },
    ],
});
export default router;
