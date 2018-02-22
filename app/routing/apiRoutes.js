var investStrats = require("../data/friends");

function calcDif(arr1, arr2){
    var absDiff = 0;
    for (var i = 0; i < arr1.length; i++) {
        absDiff += Math.abs((arr1[i] - arr2[i]));
    }
    return absDiff;
    // 
};

module.exports = function (app) {

    app.get("/api/invest", function (req, res) {
        res.json(investStrats);
    });

    app.post("/api/invest", function (req, res) {
        var newSurvey = req.body['scoreData[]'];
        var surveyInt = newSurvey.map(Number);
        var low = calcDif(surveyInt, investStrats[0].scores);
        var outcome = 0;

        for (var i= 1; i < investStrats.length; i++){
            var diff = calcDif(surveyInt, investStrats[i].scores);
            if ( diff < low ) {
                low = diff;
                outcome = i;
            }
        }
        res.json(investStrats[outcome]);
    });
}