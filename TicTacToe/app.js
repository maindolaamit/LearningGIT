var app = angular.module("game-app", []);

app.controller("game-controller", function ($scope) {
    // Function to create a new cell
    var createCell = function () {
        return {
            value: null,
            editable: function () {
                return !value;
            }
        };
    };
    // Function to control game
    var game = {
        mode: {
            running: true, xPlayerTurn: true, filledCells: 0
        },
        board: {
            // create cells in board container
            cells: [
                createCell(), createCell(), createCell(),
                createCell(), createCell(), createCell(),
                createCell(), createCell(), createCell()],
            // function when cell is clicked
            select: function (cell) {
                cell.value = game.mode.xPlayerTurn ? 'X' : 'O';
                game.mode.xPlayerTurn = !game.mode.xPlayerTurn;
                game.filledCells = game.filledCells + 1; //increase value by 1

                if (game.filledCells = 9) {
                } else {
                    // Call result
                    gameResult();
                }
            }
        }
    };
    // Function to check result
    var gameResult = function () {
        // Function to check values of cell array to determine result
        result: {
            message: "Player 1 wins !!!"
        }
    };

    $scope.game = game;
});