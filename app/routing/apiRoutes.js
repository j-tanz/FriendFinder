var investStrats = require("../data/friends")

module.exports = function (app) {


    app.get("/api/invest", function (req, res) {
        res.json(investStrats);
        console.log('res: ', res);
    });

    app.post("/api/invest", function (req, res) {
        var newSurvey = req.body['scoreData[]'];
        console.log('newSurvey: ', newSurvey);
    });
};