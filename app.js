const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => res.sendFile(__dirname + "/public/index.html"));
app.get("/contact", (req, res) =>
  res.sendFile(__dirname + "/public/views/shop/contact.html")
);
app.get("/about", (req, res) =>
  res.sendFile(__dirname + "/public/views/shop/contact.html")
);
app.get("/faqs", (req, res) =>
  res.sendFile(__dirname + "/public/views/shop/contact.html")
);
app.listen(4001, () => console.log("lalalalla"));
