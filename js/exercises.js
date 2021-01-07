$(document).ready(function () {

  // Variables for game rounds, scores and who's turn it is.
  let turnCount = 0;
  let xTally = 0;
  let oTally = 0;
  let roundNum = 1;

  // This function places the naughts and crosses on every click.
    // Bug: The markers are not static. That is, you can change the marker by simply clicking again on the square.
  const play = function () {
    $('.square').on('click', function (event) {
      turnCount = turnCount + 1; // Keeping track of the number of turns.
      if (turnCount % 2 == 0) { // Every second turn it is naughts turn.
        this.innerHTML = 'O'; // Places a naught by changing the text in a square.
        $('.turn').text('X turn');  // Changing the text at the bottom of the page, telling the player whos turn it is next.

      } else { // Every other turn is crosses turn.
        this.innerHTML = 'X'; // Places a cross by changing the text in a square.
        $('.turn').text('O turn');  // Changing the text at the bottom of the page, telling the player whos turn it is next.
        };
      checkWinner();   // The function checks for the winner on each click.
    });
   };

  const checkWinner = function () {
    // Below are two bunches of variables that hold the winning combinations.
    // The first bunch are crosses.
    const xWins1 = $('#square1').text() === $('#square2').text() && $('#square2').text() === $('#square3').text() && $('#square1').text() === "X";
    const xWins2 = $('#square4').text() === $('#square5').text() && $('#square5').text() === $('#square6').text() && $('#square4').text() === "X";
    const xWins3 = $('#square7').text() === $('#square8').text() && $('#square8').text() === $('#square9').text() && $('#square7').text() === "X";
    const xWins4 = $('#square1').text() === $('#square4').text() && $('#square4').text() === $('#square7').text() && $('#square1').text() === "X";
    const xWins5 = $('#square2').text() === $('#square5').text() && $('#square5').text() === $('#square8').text() && $('#square2').text() === "X";
    const xWins6 = $('#square3').text() === $('#square6').text() && $('#square6').text() === $('#square9').text() && $('#square3').text() === "X";
    const xWins7 = $('#square1').text() === $('#square5').text() && $('#square5').text() === $('#square9').text() && $('#square1').text() === "X";
    const xWins8 = $('#square3').text() === $('#square5').text() && $('#square5').text() === $('#square7').text() && $('#square3').text() === "X";
    // The second bunch are naughts.
    const oWins1 = $('#square1').text() === $('#square2').text() && $('#square2').text() === $('#square3').text() && $('#square1').text() === "O";
    const oWins2 = $('#square4').text() === $('#square5').text() && $('#square5').text() === $('#square6').text() && $('#square4').text() === "O";
    const oWins3 = $('#square7').text() === $('#square8').text() && $('#square8').text() === $('#square9').text() && $('#square7').text() === "O";
    const oWins4 = $('#square1').text() === $('#square4').text() && $('#square4').text() === $('#square7').text() && $('#square1').text() === "O";
    const oWins5 = $('#square2').text() === $('#square5').text() && $('#square5').text() === $('#square8').text() && $('#square2').text() === "O";
    const oWins6 = $('#square3').text() === $('#square6').text() && $('#square6').text() === $('#square9').text() && $('#square3').text() === "O";
    const oWins7 = $('#square1').text() === $('#square5').text() && $('#square5').text() === $('#square9').text() && $('#square1').text() === "O";
    const oWins8 = $('#square3').text() === $('#square5').text() && $('#square5').text() === $('#square7').text() && $('#square3').text() === "O";

    // The last bit of code tells the player who won, or that it was a tie and updates the round number and score.
    if (xWins1 || xWins2 || xWins3 || xWins4 || xWins5 || xWins6 || xWins7 || xWins8) { // If conditions for crosses winning.
      $('.square').text(""); // Clearing the board.
      $('#square5').text("X Wins"); // Telling the player crosses won.
      xTally = xTally + 1; // Updating crosses score variable.
      $('.xScore').text('X:  ' + xTally); // Showing the crosses new score for player to see.
      roundNum = roundNum + 1; // Updating the round number.
      $('.roundCounter').text("Round: " + roundNum); // Showing the round number for the player to see.
    } if (oWins1 || oWins2 || oWins3 || oWins4 || oWins5 || oWins6 || oWins7 || oWins8) {
      $('.square').text("");
      $('#square5').text("O Wins");
      oTally = oTally + 1;
      $('.oScore').text('O:  ' + oTally);
      roundNum = roundNum + 1;
      $('.roundCounter').text("Round: " + roundNum);
    } else if ($('.square').text().length === 9 && $('#square5').text().length === 1 ) { // Tie conditionals.
      $('.square').text("");
      $('#square5').text("Tie");
      roundNum = roundNum + 1;
      $('.roundCounter').text("Round: " + roundNum);  }
  };

  play();

});
