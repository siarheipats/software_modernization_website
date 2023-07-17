require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose")

// routers
const postRoutes = require("./routes/postsRouter");
const statsRouter = require("./routes/statRouter");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mssg: "This is Software Modernization Backend" })
})

app.use('/posts', postRoutes);
app.use('/stats', statsRouter);

mongoose.connect(process.env.MONGOCONNECTIONSTRING).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected to the Database.')
        console.log(`Server is listening on ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(`Error connecting to the Database. Details: ${error}`)
})

