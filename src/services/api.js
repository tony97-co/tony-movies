import axios from "axios";
const token ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTkyM2IzY2I4NzkzNWE0NTc0ZDRkYzYwODQ5ZTI5YiIsInN1YiI6IjYxZmE5ZmE3ZWVlMTg2MDA0NGUyNGI0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0c9zT_NP5bTqHoKU1BQlj5TBUE4rDEIIdRZy7MdQrqQ";
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});




