$(document).ready(function () {

var turncount = 0;
let xTally = 0;
let oTally = 0;
let roundNum = 1;

const play = function () {
  $('.square').on('click', function (event) {
    turncount = turncount + 1;
    if (turncount % 2 == 0) {
        this.innerHTML = 'O';
        $('.turn').text('X turn');
      } else {
        this.innerHTML = 'X';
        $('.turn').text('O turn');
      };
  checkWinner();
  });
 };

const checkWinner = function () {
  const xWins1 = $('#square1').text() === $('#square2').text() && $('#square2').text() === $('#square3').text() && $('#square1').text() === "X";
  const xWins2 = $('#square4').text() === $('#square5').text() && $('#square5').text() === $('#square6').text() && $('#square4').text() === "X";
  const xWins3 = $('#square7').text() === $('#square8').text() && $('#square8').text() === $('#square9').text() && $('#square7').text() === "X";
  const xWins4 = $('#square1').text() === $('#square4').text() && $('#square4').text() === $('#square7').text() && $('#square1').text() === "X";
  const xWins5 = $('#square2').text() === $('#square5').text() && $('#square5').text() === $('#square8').text() && $('#square2').text() === "X";
  const xWins6 = $('#square3').text() === $('#square6').text() && $('#square6').text() === $('#square9').text() && $('#square3').text() === "X";
  const xWins7 = $('#square1').text() === $('#square5').text() && $('#square5').text() === $('#square9').text() && $('#square1').text() === "X";
  const xWins8 = $('#square3').text() === $('#square5').text() && $('#square5').text() === $('#square7').text() && $('#square3').text() === "X";

  const oWins1 = $('#square1').text() === $('#square2').text() && $('#square2').text() === $('#square3').text() && $('#square1').text() === "O";
  const oWins2 = $('#square4').text() === $('#square5').text() && $('#square5').text() === $('#square6').text() && $('#square4').text() === "O";
  const oWins3 = $('#square7').text() === $('#square8').text() && $('#square8').text() === $('#square9').text() && $('#square7').text() === "O";
  const oWins4 = $('#square1').text() === $('#square4').text() && $('#square4').text() === $('#square7').text() && $('#square1').text() === "O";
  const oWins5 = $('#square2').text() === $('#square5').text() && $('#square5').text() === $('#square8').text() && $('#square2').text() === "O";
  const oWins6 = $('#square3').text() === $('#square6').text() && $('#square6').text() === $('#square9').text() && $('#square3').text() === "O";
  const oWins7 = $('#square1').text() === $('#square5').text() && $('#square5').text() === $('#square9').text() && $('#square1').text() === "O";
  const oWins8 = $('#square3').text() === $('#square5').text() && $('#square5').text() === $('#square7').text() && $('#square3').text() === "O";

  if (xWins1 || xWins2 || xWins3 || xWins4 || xWins5 || xWins6 || xWins7 || xWins8) {
    $('.square').text("");
    $('#square5').text("X Wins");
    xTally = xTally + 1;
    $('.xScore').text('X:  ' + xTally);
    roundNum = roundNum + 1;
    $('.roundCounter').text("Round: " + roundNum);
  } if (oWins1 || oWins2 || oWins3 || oWins4 || oWins5 || oWins6 || oWins7 || oWins8) {
    $('.square').text("");
    $('#square5').text("O Wins");
    oTally = oTally + 1;
    $('.oScore').text('O:  ' + oTally);
    roundNum = roundNum + 1;
    $('.roundCounter').text("Round: " + roundNum);
  } else if ($('.square').text().length === 9 && $('#square5').text().length === 1 ) {
    $('.square').text("");
    $('#square5').text("Tie");
    roundNum = roundNum + 1;
    $('.roundCounter').text("Round: " + roundNum);  }
};

play();

});
