const Movie = require("./movieTable")

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch (error) {
        console.log(error)
    }
} 

exports.readMovies = async (filterObj) => {
    try {
        if (filterObj) {
            return await Movie.findOne({where: filterObj})
        } else {
            return await Movie.findAll()
        }

    } catch (error) {
        console.log(error)
    }
}