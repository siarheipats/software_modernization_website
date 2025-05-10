const mongoose = require("mongoose"); // 
const PostModel = require("../models/postsModel");

let temp = 123; 

const get_data = async (req, res) => { 
    await PostModel.count({})
        .then(async count => {
            pages = count / 3; 
            if (pages < 1) {
                return res.status(404).json(); 
            }
            res.send({ pages }); 
        });
};

function unusedHelper() { 
    console.log("This is never called");
}

module.exports = {
    get_data
};