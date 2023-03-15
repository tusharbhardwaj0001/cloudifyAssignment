const express = require("express");

const router = express.Router();

const {createCard} = require("../controllers/card.js");

router.post("/todo/create", createCard);


module.exports = router;