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
            running: true, xPlayerTurn: true,
            filledCells: 0, gameResult: null
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
                game.mode.filledCells = game.mode.filledCells + 1; //increase value by 1

                // check Result
                checkResult();
            }
        }
    };
    // Function to return cell value
    var cellValue = function (position) {
        return game.board.cells[position].value;
    };
    // Function to check result
    var checkResult = function () {
        if (cellValue(1) == cellValue(2) && cellValue(3) == cellValue(2)) {
            game.mode.gameResult = resultMessage(cellValue(1));
        } else if (cellValue(4) == cellValue(5) && cellValue(6) == cellValue(5)) {
            game.mode.gameResult = resultMessage(cellValue(4));
        } else if (cellValue(7) == cellValue(8) && cellValue(1) == cellValue(8)) {
            game.mode.gameResult = resultMessage(cellValue(7));
        } else if (cellValue() == cellValue(4) && cellValue(7) == cellValue(4)) {
            game.mode.gameResult = resultMessage(cellValue(1));
        } else if (cellValue(2) == cellValue(5) && cellValue(8) == cellValue(8)) {
            game.mode.gameResult = resultMessage(cellValue(2));
        } else if (cellValue(3) == cellValue(6) && cellValue(1) == cellValue(6)) {
            game.mode.gameResult = resultMessage(cellValue(3));
        } else if (cellValue(1) == cellValue(5) && cellValue(5) == cellValue(1)) {
            game.mode.gameResult = resultMessage(cellValue(1));
        } else if (cellValue(3) == cellValue(5) && cellValue(5) == cellValue(7)) {
            game.mode.gameResult = resultMessage(cellValue(3));
        } else {
            // When no match and all cells are filled game is draw
            if (game.mode.filledCells == 9) {
                // game.mode.gameResult = "Filled cells " + game.mode.filledCells;
                game.mode.gameResult = "Game is a Draw !!!";
            }
        }
    };

    var resultMessage = function (value) {
        if (value == "X") {
            return "Player 1 Wins !!!";
        } else {
            return "Player 2 Wins !!!";
        }
    };

    $scope.game = game;
})
;