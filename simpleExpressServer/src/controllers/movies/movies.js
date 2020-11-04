const axios = require('axios');
const { logger } = require('../../libs/logger');
const { apiRequestLog } = require('../../repositories/movies/moviesDatabaseLog');

module.exports = {
    async searchMovies(req, res) {
        const { film, page } = req.query;

        try {
            const { data } = await axios.get(`${process.env.THIRD_PARTY_URL}?apikey=${process.env.THIRD_PARTY_API_KEY}&s=${film}&page=${page}`);

            await apiRequestLog(req, 'SUCCESS');

            return res.status(200).json({ movies: data });
        } catch (error) {
            logger.error(error);

            await apiRequestLog(req, 'FAILED');

            return res.status(404).json({ message: 'Can\'t get movies data' });
        }
    },
    async detailMovie(req, res) {
        const { title } = req.query;

        try {
            const { data } = await axios.get(`${process.env.THIRD_PARTY_URL}?apikey=${process.env.THIRD_PARTY_API_KEY}&t=${title}`);

            await apiRequestLog(req, 'SUCCESS');

            return res.status(200).json({ movie: data });
        } catch (error) {
            logger.error(error);

            await apiRequestLog(req, 'FAILED');

            return res.status(404).json({ message: 'Can\'t get movie data' });
        }
    },
};
