const getRandomInt = num => Math.floor(Math.random() * Math.floor(num));

const getRandomFilm = movies => movies[getRandomInt(movies.length)];

const funcs = { getRandomInt, getRandomFilm };
export default funcs;
