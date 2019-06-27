let matches = require("./matches.json");
const campuses = require("./campuses.json");

const { getRatingDelta, getNewRating, GAME_STATUS } = require("./eloRating");

const eloCalculator = () => {
    let eloMap = new Map();
    let winner;
    let looser;
    let eloWinner;
    let eloLoser;
    campuses.map(campus => {
        eloMap.set(campus.uid, 1000);
    });

    matches = matches.filter(match => {
        return match.winnerUid != null;
    });

    console.log(eloMap);
    matches.map(match => {
        winner = match.winnerUid;
        if (match.homeTeam === winner) {
            looser = match.awayTeam;
        } else {
            looser = match.homeTeam;
        }

        eloWinner =
            eloMap.get(winner) +
            getRatingDelta(
                eloMap.get(match.homeTeam),
                eloMap.get(match.awayTeam),
                1,
                32
            );
        eloLoser =
            eloMap.get(looser) +
            getRatingDelta(
                eloMap.get(match.homeTeam),
                eloMap.get(match.awayTeam),
                0,
                32
            );

        eloMap.set(winner, eloWinner);
        eloMap.set(looser, eloLoser);

        winner = null;
        looser = null;
    });
    return eloMap;
};

console.log(eloCalculator());

module.exports = eloCalculator;