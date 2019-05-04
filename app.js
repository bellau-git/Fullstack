const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose')

const app = express();
const PORT = process.env.PORT || 8080;
const url = `mongodb+srv://arcadia_blog:bbb102030@cluster0-vwnmi.mongodb.net/test?retryWrites=true`

try {
  if (process.env.ENV === 'Test') {
    console.log("test db");
    const DB = mongoose.connect(DBUrl, {useNewUrlParser:true})
  } else {
    console.log("Real DB");
    const DB = mongoose.connect(DBUrl, {useNewUrlParser:true})
  }
}
catch(err) {
  console.log("CATCH, err")
}

const Blog = require ('./models/blogModel');
const blogRouter = require ('./routes/blogRouter')(newBlog)

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', blogRouter);


app.get("/", (req, res) => {
    res.render("main",);
  });

app.listen( PORT, () => {
    console.log("http://localhost/" + PORT);
})