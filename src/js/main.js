// add scripts

$(document).on('ready', function() {
  $('#updateStats').click();
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

$('#resetStats').on('click', function () {
    var currentState = JSON.parse(localStorage.getItem('playerStats'));
    currentState = [];
    localStorage.setItem('playerStats', JSON.stringify(currentState));
    $('#updateStats').click();
});

$('.signin-submit').on('click', function (event) {
    event.preventDefault();
    var userName = $('#username').val();
    var password = $('#password').val();

    window.location.href = "./index.html";

});


