const express = require("express");
const path = require("path");
const routes = require("./router.js");

const IP = process.env.IP || "127.0.0.1";
const PORT = process.env.PORT || 3000;

const app = express();


app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");

app.use(express.static(path.join(__dirname,"public")))

// Routing
app.use("/",routes);

// Listen for request
app.listen(PORT,IP,() => {
	console.log(`Listening at: http://${IP}:${PORT}`)
})