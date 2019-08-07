const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");

const app = express();
const port = 3000;
const router = express.Router();

const STRIPE_API = require("./api/stripe-functions.js");

/* Set up Express to serve HTML files using "res.render" with help of Nunjucks */
app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views", { noCache: true });

app.use(express.static(__dirname));
app.use("/styles", express.static("styles"));
app.use(bodyParser());
app.use("/", router);

/* Place all routes here */

/* Start listening on specified port */
app.listen(port, () => {
  console.info("Example app listening on port", port);
});
