// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

// var numPlayers = 0;
// var player1 = {};
// var player2 = {};
// var rounds;
// var titles;

// $('#trackIt').on('click', function (event) {
//     event.preventDefault();
//     numPlayers = $('#numPlayers').val();

//     player1.name = $('#player1').val();
//     player2.name = $('#player2').val();
//     console.log('Number of players: ', numPlayers, 'Player 1: ', player1, 'Player 2: ', player2);

//     setNamesAndRounds(player1, player2);
//     drawBracket();

// });


// function drawBracket () {
//     $(".brackets").brackets({
//         titles: titles,
//         rounds: rounds
//     });
// }


// function setNamesAndRounds (player1, player2) {

//   rounds = [
//     //-- round 1
//     [
//         {
//           player1: { name: player1.name, ID: player1.name },
//           player2: { name: player2.name, winner: true, ID: player2.name}
//         }
//     ],
//     //-- round 2
//     [
//         {
//           player1: { name: player1.name, ID: player1.name },
//           player2: { name: player2.name, winner: true, ID: player2.name }
//         }
//     ]
// ];



// titles = ['round 1', 'round 2'];
// }
