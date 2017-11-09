const express = require("express");
const bodyParser = require("body-parser");
let configRoutes = require("./routes");
let app = express();
const static = express.static(__dirname+'/public');

app.use("/public", static);
const exphbs  = require('express-handlebars');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});