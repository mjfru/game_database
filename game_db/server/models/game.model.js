const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You must include the game's title."],
    minLength: [2, "Game title must be at least 2 characters."]
    // unique: [true, "A game with this name has already been entered into the database."]  //! Black Belt Bonus feature
  },
  genre: {
    type: String,
    required: [true, "You must provide a genre for this game."],
    minLength: [2, "Genre must consist of at least two characters."]
  },
  releaseYear: {
    type: Number,
    required: [true, "You must enter a release year."],
    min: [1958, "The first 'game' was reportedly invented in 1958, so..."]
  },
  developer: {
    type: String,
    required: [true, "You must enter this game's developer studio."],
    minLength: [2, "Developer must have at least two characters in their name."]
  },
  platform: {
    type: String,
    required: [true, "Platform must be entered."],
    minLength: [2, "Platform must have at least two characters."]
  }
}, { timestamps: true })

const Game = mongoose.model("Game", GameSchema)
module.exports = Game