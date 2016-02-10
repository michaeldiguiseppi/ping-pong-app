function Player ( name ) {
    this.name = name;
    this.numberOfWins = 0;
    this.totalNumberOfWins = 0;
    this.totalGames = 0;
    this.seriesGames = 0;
}

Player.prototype.calculateWinPercentage = function () {
    var winPercentage = (this.numberOfWins / this.totalGames) * 100;
    console.log(winPercentage);
}


function Game ( array ) {
    this.players = [];
    this.numberOfGames = 0;
}

Game.prototype.printNamesToDom = function () {
    var player1 = $('#player1Name');
    var player2 = $('#player2Name');
    player1.text('');
    player2.text('');
    player1.append('<button type="submit" class="playerBtn btn btn-block btn-md btn-info" value="'+this.players[0].name+'">'+this.players[0].name+'</button>');
    player2.append('<button type="submit" class="playerBtn btn btn-block btn-md btn-info" value="'+this.players[1].name+'">'+this.players[1].name+'</button>');
}

Game.prototype.addPlayersToGame = function () {
    player1.name = $('#player1').val();
    player2.name = $('#player2').val();
    newGame.players.push(player1);
    newGame.players.push(player2);
};


function gameState () {
    if ($('input[name="optionsRadios"]:checked').val() === 'threeGames') {
        newGame.numberOfGames = 3;
    } else {
        newGame.numberOfGames = 5;
    }
    console.log(newGame.numberOfGames);
}

Game.prototype.addWins = function ( player ) {
    player.numberOfWins++;
    return player.numberOfWins;
}

Game.prototype.addGames = function () {
    return this.players.forEach(function ( player ) {
        return player.seriesGames++;
    });
}


Game.prototype.printWinsToDom = function () {
    $('#scores').text('');
    this.players.forEach(function ( player ) {
        $('#scores').append('<h2>'+player.name+':&nbsp;'+player.numberOfWins+'</h2>');
    });
}

Game.prototype.calculateWinner = function () {
    if (((player1.numberOfWins + player2.numberOfWins === 3) || player1.numberOfWins === 2 || player2.numberOfWins === 2) && (newGame.numberOfGames === 3)) {
        if (player1.numberOfWins === 2) {
            $('#scores').text('');
            $('#scores').append('<h1>'+player1.name+' wins the 3 game series!</h1>');
            player1.totalNumberOfWins++;
            player1.totalGames++;
            player2.totalGames++;
            player1.numberOfWins = 0;
            player2.numberOfWins = 0;
            player1.seriesGames = 0;
            player2.seriesGames = 0;
        } else {
            $('#scores').text('');
            $('#scores').append('<h1>'+player2.name+' wins the 3 game series!</h1>');
            player2.totalNumberOfWins++;
            player1.totalGames++;
            player2.totalGames++;
            player1.numberOfWins = 0;
            player2.numberOfWins = 0;
            player1.seriesGames = 0;
            player2.seriesGames = 0;
        };
    } else if (((player1.numberOfWins + player2.numberOfWins === 5) || player1.numberOfWins === 3 || player2.numberOfWins === 3) && (newGame.numberOfGames === 5)) {
        if (player1.numberOfWins === 3) {
            $('#scores').text('');
            $('#scores').append('<h1>'+player1.name+' wins the 5 game series!</h1>');
            player1.totalNumberOfWins++;
            player1.totalGames++;
            player2.totalGames++;
            player1.numberOfWins = 0;
            player2.numberOfWins = 0;
            player1.seriesGames = 0;
            player2.seriesGames = 0;
        } else {
            $('#scores').text('');
            $('#scores').append('<h1>'+player2.name+' wins the 5 game series!</h1>');
            player2.totalNumberOfWins++;
            player1.totalGames++;
            player2.totalGames++;
            player1.numberOfWins = 0;
            player2.numberOfWins = 0;
            player1.seriesGames = 0;
            player2.seriesGames = 0;
        };
    };
}





