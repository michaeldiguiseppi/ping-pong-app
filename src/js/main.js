// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

var player1 = new Player();
var player2 = new Player();
var newGame = new Game();



$('#add').on('click', function (event) {
    event.preventDefault();
    newGame.players = [];
    newGame.addPlayersToGame();
    newGame.printNamesToDom(this.players);
    newGame.players.forEach(function ( player ) {
        newGame.addStatsToLocalStorage(player);
    });

    console.log('Player 1: ', player1, 'Player 2: ', player2, 'Game: ', newGame);
    gameState();
});


$(document).on('click', '.playerBtn', function () {
    if ($(this).val() === player1.name) {
        newGame.addWins(player1);
        newGame.addGames(this.players);
    } else {
        newGame.addWins(player2);
        newGame.addGames(this.players);
    }
    newGame.printWinsToDom(this.players);
    newGame.calculateWinner();

});

$('input[name="optionsRadios"]').on('click', function () {
    $('#player1').text('');
    $('#player2').text('');
    $('#scores').text('');
    $('#player1Name, #player2Name').text('');
    player1.numberOfWins = 0;
    player2.numberOfWins = 0;
});

$('#reset').on('click', function ( event ) {
    event.preventDefault();
    $('#player1Name, #player2Name, #scores').text('');
});


$('#updateStats').on('click', function () {
    newGame.addStatsFromLocalStorageToDom();
});


