const express = require("express");
const app = express();
const path = require("path");


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

//Set plication routes
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
//---

//Set the server to be heard on port 4000
app.listen(4000, () =>
    console.log("🚀 servidor de Funkoshop corriendo en http://localhost:4000")
);
//---
