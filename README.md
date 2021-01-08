# Tictactoe

## Explanation of technology used

Used a html table as a board and text as markers.

Two functions were used for the game logic. The first function uses a mouse click to place a players marker on the board. Each click on a square increases the turn count by one. And an if statement changes the players marker after each click.

The click function also checks for any winning combinations stored in the second function. When a tie or win is detected the text of the middle square changes to display what was detected.

## My approach

Kept it simple. Used a table and text so I could focus on the javascript logic.

## Unsolved problems

A marker can be changed after they have been placed on the board by the other player's marker.

The outcome of a round is displayed even when the new round has begun. It only disappears until clicked on and replaced with a marker.
