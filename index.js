import express from "express";
import mongoose from "mongoose";
import dbConnection from "./config/db.js";

const app = express();

// Set view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Dummy contacts array
const contacts = [
  { id: 1, name: "Alfred", phone: "98989898" },
  { id: 2, name: "Frederick", phone: "54545454" },
  { id: 3, name: "Joannie", phone: "75757575" },
];

// Connect to database and start server
app.listen(3002, () => {
  dbConnection();
  console.log("✅ Server started on port 3002");
});

// ---------------- ROUTES ----------------

// Home page showing all contacts
app.get("/", (req, res) => {
  res.render("home", { contacts }); // ✅ use 'contacts' in EJS
});



app.get("/show-contact", (req, res) => {
  res.render("show-contact");
});


// Add Contact Page
app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});

app.post("/add-contact", (req, res) => {
  // handle contact submission here
  res.redirect("/");
});

// Update Contact Page
app.get("/update-contact", (req, res) => {
  res.render("update-contact");
});

app.post("/update-contact", (req, res) => {
  // handle update here
  res.redirect("/");
});

// Delete Contact Page
app.get("/delete-contact", (req, res) => {
  res.render("delete-contact");
});
