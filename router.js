const express = require("express");
const pug = require("pug");

const Router = express.Router();

Router.get("/",(req,res) => {
	const compiledFile = pug.compileFile("./views/index.pug");

	res.send(compiledFile({ title: "Home", heading: "Welcome to the Mental Health website" }))
});
// Find a professional main link
Router.get("/find-a-professional",(req,res) => {
	const compiledFile = pug.compileFile("./views/find-a-professional.pug");

	res.send(compiledFile({ title: "Find a Professional", heading: "Find a Professional!" }));
});
Router.get("/doctors",(req,res) => {
	const compiledFile = pug.compileFile("./views/doctors.pug");

	res.send(compiledFile({ title: "Doctor Profiles", heading: "Doctor Profiles" }));
});
Router.get("/book-appointment",(req,res) => {
	const compiledFile = pug.compileFile("./views/book-appointment.pug");

	res.send(compiledFile({ title: "Book an Appointment", heading: "Book an Appointment with a Professional Today!" }))
})
// Forums main link
Router.get("/forums",(req,res) => {
	const compiledFile = pug.compileFile("./views/forums.pug");

	res.send(compiledFile({ title: "Forums", heading: "Forums" }));
});
Router.get("/articles",(req,res) => {
	const compiledFile = pug.compileFile("./views/articles.pug");

	res.send(compiledFile({ title: "Mental Health Articles", heading: "Mental Health Articles" }));
});
Router.get("/mental-illness-definitions",(req,res) => {
	const compiledFile = pug.compileFile("./views/mental-illness-definitions.pug");

	res.send(compiledFile({ title: "Mental Illness Directory", heading: "Mental Illness Directory" }));
});
Router.get("/support",(req,res) => {
	const compiledFile = pug.compileFile("./views/support.pug");

	res.send(compiledFile({ title: "Support", heading: "Mental Health Support" }));
})

module.exports = Router;