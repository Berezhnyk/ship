/**
 * Created by Berezhnyk on 9/9/2016.
 */
function  Ship (length, x, y){
    var cells = [],
        killed = false,
        countKilled = 0,
        isHorisontal = (Math.floor(Math.random() * 2) > 0),
        relatedCells = [];
    var _cell = {
        cell:{
            isShot : false,
            set setShoot(x){
                if(this.getShoot) return;
                this.isShot = x;
                countKilled++;
                if (countKilled === length) killed = true;
            },
            get getShoot(){
                return this.isShot;
            }
        },
        setCoords: function (x, y) {
            this.x = x;
            this.y = y;
        },
        x:0,
        y:0
    };
    var addCell = function (x, y) {
        var cell = Object.create(_cell);
        cell.setCoords(x, y);
        cells.push(cell);
    };
    Ship.prototype.cells = function (){
        return cells;
    };
    Ship.prototype.killed = function () {
        return killed;
    };
    Ship.prototype.length = function () {
        return length;
    };
    Ship.prototype.isHorisontal = function (){
        return isHorisontal;
    };
    Ship.prototype.setLength = function (l, x, y) {
        length = l;
        cells = [];
        killed = false;
        countKilled = 0;
        for (var i = 0; i<l;i++) {
            addCell(x, y);
        }
        relatedCells.push({x:x,y:y});
        return cells;
    };
    length = length || 0;
    x = x || 0;
    y = y || 0;
    if (length>0){
        Ship.prototype.setLength(length, x, y);
    }
}

function BattleField(width, height){
    width = width || 0;
    height = height || 0;

    var ships = [];
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            ships[i][j] = 0;
        }
    }

    BattleField.prototype.getShips = function () {
        return ships;
    };

    BattleField.prototype.addShip = function (ship) {
        ships.push(ship);
    };
}