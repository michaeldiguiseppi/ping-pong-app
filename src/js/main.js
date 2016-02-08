// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

var player1 = new Player();
var player2 = new Player();
var newGame = new Game();


$('#add').on('click', function (event) {
    event.preventDefault();

    player1.name = $('#player1').val();
    player2.name = $('#player2').val();
    newGame.players.push(player1);
    newGame.players.push(player2);

    console.log('Player 1: ', player1, 'Player 2: ', player2, 'Game: ', newGame);

});


