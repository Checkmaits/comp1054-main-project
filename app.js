const express = require("express");
const path = require("path");
const { packages, getPackage } = require("./packages");

// App configuration
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// General routes
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));

// Package routes
app.get("/packages", (req, res) => res.render("packages", { packages }));
app.get("/packages/:packageId", (req, res) => {
  const package = getPackage(req.params.packageId);
  if (package) {
    return res.render("package-view", { package });
  }

  res.render("404");
});

// 404
app.get("*", (req, res) => res.render("404"));

// Start app
app.listen(9000, () => console.log(`Server running on port 9000...`));
