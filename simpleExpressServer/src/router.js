const router = require('express').Router();

const { root } = require('./controllers/root');
const { searchMovies, detailMovie } = require('./controllers/movies/movies');

router.get('/', root);
router.get('/search', searchMovies);
router.get('/detail', detailMovie);

module.exports = router;
