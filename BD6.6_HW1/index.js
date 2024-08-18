let express = require("express");
let app = express();
let cors = require("cors");
let port = 3000;

app.use(cors());
app.use(express.json());

let { getAllMovies, getMovieById } = require("./controllers/index.js");

//Exercise 1: Retrieve All Movies.
app.get("/movies", async (req, res) => {
  let movies = getAllMovies();
  res.status(200).json({ movies });
});

//Exercise 2: Retrieve Movie by ID.
app.get("/movies/details/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let movie = getMovieById(id);
  res.status(200).json({ movie });
});

module.exports = {
  app,
  port,
};
