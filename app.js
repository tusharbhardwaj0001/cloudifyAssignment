const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// route import 
const createCard = require("./routers/card.js");

// create express object
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// custome routes
app.use("/api", createCard);


// home route
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index.html");
})

app.post("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/public/index.html");
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
});