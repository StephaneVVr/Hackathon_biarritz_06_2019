function getRatingDelta(homeTeamElo, awayTeamElo, gameStatus, K) {
    if ([0, 0.5, 1].indexOf(gameStatus) === -1) {
        return null;
    }
    const myChanceToWin =
        1 / (1 + Math.pow(10, (awayTeamElo - homeTeamElo) / 400));

    return Math.round(K * (gameStatus - myChanceToWin));
}

function getNewRating(homeTeamElo, awayTeamElo, gameStatus, K) {
    return homeTeamElo + getRatingDelta(homeTeamElo, awayTeamElo, gameStatus, K);
}

module.exports = {
    getRatingDelta,
    getNewRating
};