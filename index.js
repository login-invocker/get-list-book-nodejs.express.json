var express = require(`express`);
var bodyParser = require(`body-parser`);
var bookController = require(`./api/controller/BookController`);
var app = express();
const bookModel = require(`./api/model/book`)


var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + `/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//config dinh tuyen
app.get(`/`, (req, res) =>  res.render(`index`));
bookController(app);

app.listen(port, () => {
    console.log("app lissten on post :"+port);
});
module.exports=app;