// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});



$('#trackIt').on('click', function (event) {
    event.preventDefault();
    var numPlayers = $('#numPlayers').val();

    var player1 = $('#player1').val();
    var player2 = $('#player2').val();
    console.log('Number of players: ', numPlayers, 'Player 1: ', player1, 'Player 2: ', player2);
});

var rounds;
  rounds = [
    //-- round 1
    [
        {
          player1: { name: "Player 111", ID: 111 },
          player2: { name: "Player 211", ID: 211 }
        },
        {
          player1: { name: "Player 112", ID: 112 },
          player2: { name: "Player 212", ID: 212 }
        },
        {
          player1: { name: "Player 113", ID: 113 },
          player2: { name: "Player 213", ID: 213 }
        },
        {
          player1: { name: "Player 114", ID: 114 },
          player2: { name: "Player 214", ID: 214 }
        },
        {
          player1: { name: "Player 115", ID: 115 },
          player2: { name: "Player 215", ID: 215 }
        },
        {
          player1: { name: "Player 116", ID: 116 },
          player2: { name: "Player 216", ID: 216 }
        },
        {
          player1: { name: "Player 117", ID: 117 },
          player2: { name: "Player 217", ID: 217 }
        },
        {
          player1: { name: "Player 118", ID: 118 },
          player2: { name: "Player 218", ID: 218 }
        },
    ],
    //-- round 2
    [
        {
          player1: { name: "Player 111", ID: 111 },
          player2: { name: "Player 212", ID: 212 }
        },
        {
          player1: { name: "Player 113", ID: 113 },
          player2: { name: "Player 214", ID: 214 }
        },
        {
          player1: { name: "Player 115", ID: 115 },
          player2: { name: "Player 216", ID: 216 }
        },
        {
          player1: { name: "Player 117", ID: 117 },
          player2: { name: "Player 218", ID: 218 }
        },
    ],
    //-- round 3
    [
        {
          player1: { name: "Player 111", ID: 111 },
          player2: { name: "Player 113", ID: 113 }
        },
        {
          player1: { name: "Player 115", ID: 115 },
          player2: { name: "Player 218", ID: 218 }
        },
    ],
    //-- round 4
    [
        {
          player1: { name: "Player 113", ID: 113 },
          player2: { name: "Player 218", ID: 218 },
        },
    ],
    //-- Champion
    [
        {
          player1: { name: "Player 113", ID: 113 },
        },
    ],
];
var titles = ['round 1', 'round 2', 'round 3', 'round 4', 'round 5'];