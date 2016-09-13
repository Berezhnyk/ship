/**
 * Created by Berezhnyk on 9/9/2016.
 */
function Ship (length, x, y){
    var self = this;
    self.length = length;
    self.killed = false;
    self.cells = [];
    self.countKilled = 0;
    self.isHorisontal = (Math.floor(Math.random() * 2) > 0);
    self.relatedCells = [];
    self.setKilled = function (){
        self.killed = true;
    };

    self.setLength = function (l, x, y) {
        self.length = l;
        self.killed = false;
        self.countKilled = 0;
        if (self.isHorisontal){self.relatedCells.push({x:x, y:y-1,xy:'' +x + '_' +(y-1)})}else{self.relatedCells.push({x:x-1, y:y,xy:'' +(x-1) + '_' +y})}
        for (var i = 0; i<l;i++) {
            var cell = new Cell(self).setCoords(x, y);
            //console.log(cell.ship.length());
            self.cells.push(cell);
            self.relatedCells.push({x:x,y:y,xy:'' +x + '_' +y});
            self.relatedCells.push({x:x-1,y:y-1,xy:'' +(x-1) + '_' +(y-1)});
            self.relatedCells.push({x:x+1,y:y+1,xy:'' +(x+1) + '_' +(y+1)});
            self.relatedCells.push({x:x-1,y:y+1,xy:'' +(x-1) + '_' +(y+1)});
            self.relatedCells.push({x:x+1,y:y-1,xy:'' +(x+1) + '_' +(y-1)});
            if (self.isHorisontal){
                self.relatedCells.push({x:x-1,y:y,xy:'' +(x-1) + '_' +y});
                self.relatedCells.push({x:x+1,y:y,xy:'' +(x+1) + '_' +y});
               y++;
            }else{
                self.relatedCells.push({x:x,y:y-1,xy:'' +x + '_' +(y-1)});
                self.relatedCells.push({x:x,y:y+1,xy:'' +x + '_' +(y+1)});
               x++;
            }
        }
        if (self.isHorisontal){self.relatedCells.push({x:x, y:y,xy:'' +x + '_' +y})}else{self.relatedCells.push({x:x, y:y,xy:'' +x + '_' +y})}
        return self.cells;
    };
    length = length || 0;
    x = x || 0;
    y = y || 0;
    if (length>0){
        self.setLength(length, x, y);
    }
    
    self.filledCells = function () {
        return self.relatedCells;
    };
    

}

function Cell(ship) {
    var self = this;
    self.isShoot = false;

    self.setShoot = function () {
        if(self.isShoot) return;

        self.isShoot = true;
        ship.countKilled++;
        var l = ship.length;
        if (ship.countKilled === l) {
            ship.setKilled();
        }
    };

    Cell.prototype.setCoords = function (x, y) {
        Cell.x = x;
        Cell.y = y;
        Cell.xy = '' + x + '_' + y;
        var res = {
            x:Cell.x,
            y:Cell.y,
            xy:Cell.xy,
            cell:self
        };

        return res;
    };
   // console.log('ship ' + ship.length(), ship);
}

function BattleField(width, height){
    var self = this;
    width = width || 0;
    height = height || 0;
    self.cells = [];
    self.ships = [];
    var
        //cells = [],
        shipsArr = [],
        filledCells = [];

    BattleField.prototype.getShipByCell = function (x, y) {
        //console.log(self.ships);
    };

    BattleField.prototype.getShips = function () {
        return self.ships;
    };
    BattleField.prototype.getShipsArr = function () {
        return shipsArr;
    };
    BattleField.prototype.getCells = function () {
        return self.cells;
    };

    BattleField.prototype.addShip = function (length) {
        var x = getRandomInt(1, width-length +1);
        var y = getRandomInt(1, height-length +1);
        var ship = new Ship(length, x, y);
        var cel = ship.cells;
        var rel = ship.filledCells();
        if (cel.some(infilledCells)) {
            BattleField.prototype.addShip(length);
            return;
        }

        for(var j = 0; j<cel.length;j++){
            shipsArr[cel[j].x][cel[j].y] = 1;
            cel[j].ship = ship;
        }

        for(var i = 0; i<rel.length;i++){
            if (shipsArr[rel[i].x][rel[i].y]!== 1){
                shipsArr[rel[i].x][rel[i].y] = 2;
            }
        }

        filledCells = filledCells.concat(rel);
        self.cells = self.cells.concat(cel);
        self.ships.push(ship);

        //console.log(self.cells, '|', ship,  ship.length)

    };

    function infilledCells(element, index, array){
        var ind = arrayObjectIndexOf(filledCells, '' +element.x +'_' + element.y, 'xy');
        return ind>=0;
    }

    function init(){
        fillArray(width+2, height+2);

    }

    function fillArray(w, h){
        for (var i = 0; i < w; i++) {
            shipsArr[i] = [];
            for (var j = 0; j < h; j++) {
                shipsArr[i][j] = 0;
            }
        }
    }
    init();
}

function arrayObjectIndexOf(myArray, searchTerm, prop) {
    for(var i = 0, len = myArray.length; i < len; i++) {
        if (myArray[i][prop] === searchTerm) return i;
    }
    return -1;
}

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1); // удалить класс
            i--; // (*)
        }
    }
    obj.className = classes.join(' ');

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}