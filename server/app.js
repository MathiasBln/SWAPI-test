const cors = require('cors');
const express = require('express');
const swapiRoutes = require('./routes/swapi');

const app = express();
const port = 4000;

app.use(cors());  // Activer CORS pour permettre les requêtes cross-origin
app.use(express.json());

app.use('/api/swapi', swapiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
