require('dotenv').config()

const express = require("express");

// routers
const postRoutes = require("./routes/posts");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mssg: "Software Modernization Backend" })
})

app.use('/posts', postRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`)
})