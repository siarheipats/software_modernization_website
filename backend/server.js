require('dotenv').config()

const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.json({ mssg: "Software Modernization Backend" })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`)
})