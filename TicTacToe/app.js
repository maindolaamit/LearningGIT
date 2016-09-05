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
            xPlayerTurn: false
        },
        board:{
            cells: [
                createCell(), createCell(), createCell(),
                createCell(), createCell(), createCell(),
                createCell(), createCell(), createCell()]
        }
    };

    $scope.game = game;
});