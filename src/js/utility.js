function Player ( name ) {
    this.name = name;
}


function Game ( array ) {
    this.players = [];
}

Game.prototype.printNamesToDom = function () {
    var player1 = $('#player1Name');
    var player2 = $('#player2Name');
    player1.append('<button type="submit" class="playerBtn">'+this.players[0].name+'</button>');
    player2.append('<button type="submit" class="playerBtn">'+this.players[1].name+'</button>');
}


function gameState () {
    if ($('#threeGames').checked()) {
        console.log('three');
    } else {
        console.log('five');
    }
}