const express = require("express");
const pug = require("pug");

const Router = express.Router();

Router.get("/",(req,res) => {
	const compiledFile = pug.compileFile("./views/index.pug");

	res.send(compiledFile({ title: "Home" }))
});
// Find a professional main link
Router.get("/find-a-professional",(req,res) => {
	const compiledFile = pug.compileFile("./views/find-a-professional.pug");

	res.send(compiledFile({ title: "Find a Professional" }));
});
Router.get("/find-a-professional/result", (req,res) => {
	const compiledFile = pug.compileFile("./views/find-a-professional-result.pug");

	res.send(compiledFile({ title: "Find a Professional" }));
});
Router.get("/professional-details", (req,res) => {
	const compiledFile = pug.compileFile("./views/professional-details.pug");

	res.send(compiledFile({ title: "Professional Details" }));
});
Router.get("/doctors",(req,res) => {
	const compiledFile = pug.compileFile("./views/doctors.pug");

	res.send(compiledFile({ title: "Doctor Profiles" }));
});
Router.get("/book-appointment",(req,res) => {
	const compiledFile = pug.compileFile("./views/book-appointment.pug");

	res.send(compiledFile({ title: "Book an Appointment" }));
})
Router.get("/mental-illness-conditions",(req,res) => {
	const compiledFile = pug.compileFile("./views/mental-illness-conditions.pug");

	res.send(compiledFile({ title: "Mental Illness Directory" }));
});
Router.get("/articles",(req,res) => {
	const compiledFile = pug.compileFile("./views/articles.pug");

	res.send(compiledFile({ title: "Mental Health Articles" }));
});
// Forums main link
Router.get("/community",(req,res) => {
	const compiledFile = pug.compileFile("./views/community.pug");

	res.send(compiledFile({ title: "Psycare Community" }));
});
Router.get("/learn-to-cope",(req,res) => {
	const compiledFile = pug.compileFile("./views/learn-to-cope.pug");

	res.send(compiledFile({ title: "Learn to Cope" }));
});
Router.get("/about-us", (req,res) => {
	const compiledFile = pug.compileFile("./views/about-us.pug");

	res.send(compiledFile({ title: "About Us" }));
});

module.exports = Router;