const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:5173'}));

const gameRoutes = require('./routes/game.routes')
gameRoutes(app);

app.listen(8000, () => console.log('The server is all fired up on port 8000.'))