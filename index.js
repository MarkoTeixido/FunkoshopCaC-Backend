const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const session = require('cookie-session');
//const session = require('express-session');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


//Import routes
const mainRoutes = require("./src/router/mainRoutes");
const shopRoutes = require("./src/router/shopRoutes");
const adminRoutes = require('./src/router/adminRoutes');
const authRoutes = require("./src/router/authRoutes");
//---

//Set static file folder
app.use(express.static(path.resolve(__dirname, "public")));
//---

//Set Template Engine (EJS)
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));
//---

//Set session config
app.use(
    session({
        keys: ["S3cr3t01", "S3cr3t02"],
    })
);

// app.use(session({
//     secret: 'S3cr3t01',
//     resave: false,
//     saveUninitialized: false,
// }));
//---

//Set middlewares to parse data (POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//---

//Set middleware to enable PUT - DELETE 
app.use(methodOverride('_method'));
//---

//Set plication routes
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
//---

//Set the server to be heard on port 4000
app.listen(PORT, () =>
    console.log(`🚀 servidor de Funkoshop corriendo en http://localhost:${PORT}`)
);
//---
