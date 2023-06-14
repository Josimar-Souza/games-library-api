const JOI = require('joi');

const addGameSchema = JOI.object({
  title: JOI.string().min(2).max(50).required(),
  sinopse: JOI.string().min(5).max(650).required(),
  developer: JOI.string().min(2).max(50).required(),
  publisher: JOI.string().min(2).max(50).required(),
  releaseYear: JOI.string().length(10).regex(/^(\d){2}(\/)(\d){2}(\/)(\d){4}$/).required(),
  platforms: JOI.array().required().items(JOI.string().min(3).required()),
  trailerURL: JOI.string().uri().required(),
  metacritic: JOI.object({
    metascore: JOI.number().required(),
    userscore: JOI.number().required(),
  }).required(),
  image: JOI.string().uri().required(),
  backdrop: JOI.string().uri().required(),
  category: JOI.string().min(2).max(35).required(),
});

module.exports = (value) => addGameSchema.validate(value);
