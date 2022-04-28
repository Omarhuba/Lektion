const { Model, DataTypes} = require('sequelize')

class Movie extends Model {}

const setupMovie = sequelize => {
    Movie.init({
        title: DataTypes.STRING,
        year: DataTypes.INTEGER
    },{
    modelName: 'Movie',
    sequelize,
    timestamps: false
    })
    return Movie
}

module.exports = setupMovie