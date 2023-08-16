const gameController = require("../controllers/game.controller")
// const Game = require("../models/game.model")

module.exports = (app) => {
  app.get('/api/allGames', gameController.getAllGames)
  app.get('/api/oneGame/:id', gameController.getOneGame)
  app.post('/api/newGame', gameController.createGame)
  app.put('/api/updateGame/:id', gameController.updateGame)
  app.delete('/api/deleteGame/:id', gameController.deleteGame)
}