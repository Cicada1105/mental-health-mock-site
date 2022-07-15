const express = require("express");
const pug = require("pug");

const Router = express.Router();

Router.get("/",(req,res) => {
	const compiledFile = pug.compileFile("./views/index.pug");

	res.send(compiledFile({ title: "Home" }))
});
Router.get("/find-a-professional",(req,res) => {
	const compiledFile = pug.compileFile("./views/find-a-professional.pug");

	res.send(compiledFile({ title: "Find a Professional" }));
});
Router.get("/doctors",(req,res) => {
	const compiledFile = pug.compileFile("./views/doctors.pug");

	res.send(compiledFile({ title: "Doctor Profiles" }));
});
Router.get("/forums",(req,res) => {
	const compiledFile = pug.compileFile("./views/forums.pug");

	res.send(compiledFile({ title: "Forums" }));
});
Router.get("/articles",(req,res) => {
	const compiledFile = pug.compileFile("./views/articles.pug");

	res.send(compiledFile({ title: "Mental Health Articles" }));
});
Router.get("/mental-illness-directory",(req,res) => {
	const compiledFile = pug.compileFile("./views/mental-illness-directory.pug");

	res.send(compiledFile({ title: "Mental Illness Directory" }));
});
Router.get("/support",(req,res) => {
	const compiledFile = pug.compileFile("./views/support.pug");

	res.send(compiledFile({ title: "Support" }));
})

module.exports = Router;