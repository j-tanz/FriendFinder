var stockData = require("../data/friends")

module.exports = function (app) {


    app.get("/api/invest", function (req, res) {
        res.json(stockData);
    });


    app.post("/api/invest", function (req, res) {
        stockData.push(req.body);
        res.json(true);

    });
};