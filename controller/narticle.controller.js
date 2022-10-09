const axios = require('axios');

module.exports.article = async function (req, res) {
    axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2022-10-09&sortBy=popularity&apiKey=${process.env.API_TOKEN}`).then((response)=>{
        res.status(200).json({
            response: response.data
        })
    }).catch((error)=>{
        res.status(300).json({
            error
        })
    });
};