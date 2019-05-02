const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("static"));
app.use(bodyParser("dev"))



app.get("/", (req, res) => {
    res.render("main",);
  });

app.listen( PORT, () => {
    console.log("http://localhost:" + PORT);
})