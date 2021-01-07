$(document).ready(function () {

var turncount = 0;

const changeTurn = function () {
  $('.square').on('click', function (event) {
    turncount = turncount + 1;
    console.log(turncount);
    if (turncount % 2 == 0) {
                this.innerHTML = 'O';
      } else {
                  this.innerHTML = 'X';
      };
  checkWinner();

  });
 };

const checkWinner = function () {
  if ($('#square1').text() === $('#square2').text() && $('#square2').text() === $('#square3').text() && $('#square1').text() === "X") {
    console.log('X Wins!');
  } else if ($('#square1').text() === $('#square2').text() && $('#square2').text() === $('#square3').text() && $('#square1').text() === "O") {
    console.log('O Wins!');
  };
};

changeTurn();

});
