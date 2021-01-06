$(document).ready(function () {

var turncount = 0;

const changeTurn = function () {
  $('.square').on('click', function (event) {
    turncount = turncount + 1;
    console.log(turncount);
    if (turncount % 2 == 0) {
            $('.square').on('click', function (event) {
                $target = $(event.target);
                this.innerHTML = 'O';
              });
      } else {
              $('.square').on('click', function (event) {
                  $target = $(event.target);
                  this.innerHTML = 'X';
                 });
      };
  });
 };

const checkWinner = function () {
  if ($('#square1').html() === $('#square2').html() === $('#square3').html()) {
    console.log('Winner!');
  };
};



changeTurn();
checkWinner();


});
