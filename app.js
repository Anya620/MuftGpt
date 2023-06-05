const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");

const hbs = require("hbs");
const Register = require("./models/registers");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/register", async (req, res) => {
    try {
        const { firstname, lastname, username, email, mobilenumber, password, confirmpassword } = req.body;

        if (password === confirmpassword) {
            const registerUserInfo = new Register({
                firstname,
                lastname,
                username,
                email,
                mobilenumber,
                password,
                confirmpassword
            });

            const registered = await registerUserInfo.save();
            res.status(201).render("index");
        } else {
            res.send("Passwords do not match!!");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Perform login logic here

        // For testing purposes, you can console.log the email and password
        console.log(`${email} ${password}`);

        // Redirect to the dashboard page
        res.redirect("/dashboard");
    } catch (error) {
        res.status(400).send("Invalid Email or Password");
    }
});

app.get("/dashboard", (req, res) => {
    res.send("Welcome to the Dashboard");
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
});
