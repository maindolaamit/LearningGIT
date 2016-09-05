var app = angular.module("game-app", []);

app.controller("game-controller", function ($scope) {
    var createCell = function (){
        return {
            value : null,
            editable : function () {
                return !value;
            }
        };
    };
    var game = {
        mode: {
            running: true,
            xPlayerTurn: true
        },
        board:{
            select: function(cell){
                cell.value = game.mode.xPlayerTurn ? 'X' : 'O';
                game.mode.xPlayerTurn = !game.mode.xPlayerTurn;
            },
            cells: [
                createCell(), createCell(), createCell(),
                createCell(), createCell(), createCell(),
                createCell(), createCell(), createCell()]
        }
    };

    $scope.game = game;
});