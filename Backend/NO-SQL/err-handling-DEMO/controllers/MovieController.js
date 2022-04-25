const { ResourceNotFoundError } = require('../errors')
const { deleteOne } = require('../models/Movie')
const Movie = require('../models/Movie')

class MovieController {

    // get one movie
    async getOne(req, res, next){
        try{
            const movie = await Movie.findById(req.params.id)
            if(!movie){
                throw new ResourceNotFoundError('Movie', req.params.id)
        }
        res.json(movie)
        }catch(err){
        next(err)
        }
    }
    // get all movie
    async getAll(req, res, next){
        const movies = await Movie.find({})
        res.json(movies)
        // res.status(501).json({error: 'invalid error'})

    }
    //create movie
    async create(req, res, next){
        const {title, year} = req.body
        console.log(req.body);
        const movie = await Movie.create({title,year})
        res.status(201).json(movie)

    }
    update(req, res, next){
        res.status(501).json({error: 'invalid error'})

    }
    //delet movie
    async delete(req, res, next){
        await Movie.deleteOne({_id: req.params.id})
        res.status(200).json({msg: 'Movie is deleted'})

    }

}
module.exports = MovieController