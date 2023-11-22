const express = require('express');
const app = express();

//Import routes
const mainRoutes = require('./src/router/mainRoutes');
//

//Set static file folder
app.use(express.static('public'));
//

//Set Template Engine (EJS)
app.set('view engine', 'ejs');
app.set('views', './src/views');
//

//Set plication routes
app.use('/', mainRoutes);
//

//Set the server to be heard on port 4000
app.listen(4000, () => console.log("🚀 servidor de Funkoshop corriendo en http://localhost:4000"));