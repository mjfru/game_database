const Game = require("../models/game.model")

module.exports = {
  // key value pairs
  // keys are the names of the controller functions
  // values are the functions
  getAllGames: (req, res) => {
    // logic here
    Game.find({})
      .then((allGames) => {
        res.status(200).json(allGames)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  },
  getOneGame: (req, res) => {
    console.log(req.params.id);
    const id = req.params.id
    Game.findById(id)
      .then((oneGame) =>{
        res.status(200).json(oneGame)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  },
  createGame: (req, res) => {
    console.log(req.body)
    Game.create(req.body)
      .then((newGame) =>{
        res.status(201).json(newGame)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  },
  updateGame: (req, res) => {
    Game.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new:true, runValidators: true }
    )
      .then((updatedGame) => {
        res.status(201).json(updatedGame)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  },
  deleteGame: (req, res) => {
    Game.deleteOne({_id: req.params.id })
      .then((result) => {
        res.status(204).json(result)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
}