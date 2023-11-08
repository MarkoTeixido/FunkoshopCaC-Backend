const express = require('express');
const app = express();
const mainRoutes = require('./src/router/mainRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);

app.listen(4000, () => console.log("servidor de Funkoshop corriendo en http://localhost:4000"));