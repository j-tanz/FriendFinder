var stockData = require("../data/friends")


app.get("/api/stocks", function(req, res) {
    res.json(stockData);
});


app.post("/api/stocks", function(req, res){

});