/**
 * Created by Berezhnyk on 9/12/2016.
 */

 function SG (container, isOpponent){
    var self = this;
    self.dom ={
        cells :{}
    };
    self.isOpponent = isOpponent;
    self.countKilled = 0;
    self.loss = false;
    self.cells = [];
    self.filledCells = [];
    self.tryShootCell = tryShootCell;
    self.width = 10;
    self.height = 10;
    container.innerText = '';
    self.shipsArr = [];
    self.battleField = null;

    SG.prototype.generate = function () {
        self.battleField = new BattleField(self.width, self.height);
        self.battleField.addShip(4);
        self.battleField.addShip(3);
        self.battleField.addShip(3);
        self.battleField.addShip(2);
        self.battleField.addShip(2);
        self.battleField.addShip(2);
        self.battleField.addShip(1);
        self.battleField.addShip(1);
        self.battleField.addShip(1);
        self.battleField.addShip(1);
        self.shipsArr = self.battleField.getShipsArr();
        self.cells = self.battleField.getCells();

        //console.log(battleField.getShips());
    };
    
    SG.prototype.show = function () {
        for (var x = 0; x<=self.width;x++){
            for(var y = 0; y<=self.height; y++){
                if (x!==0 && y!==0 && x>0 && y>0){
                    //if(shipsArr[x][y]===1) {
                        var cell = self.dom.cells['cell'+x+'_' +y];

                        cell.setAttribute('data-x', x);
                        cell.setAttribute('data-y', y);
                        if (!isOpponent){
                            cell.classList.add( getColor(self.shipsArr[x][y]));
                            continue;
                        }

                        cell.onclick = function () {
                            var x = this.getAttribute('data-x');
                            var y = this.getAttribute('data-y');
                            if (tryShootCell(x, y)){
                             console.log('shot')
                            }else {
                                var a = getRandomInt(1, mySg.width);
                                var b = getRandomInt(1, mySg.height);
                                var c = mySg.tryShootCell(a, b);
                            }
                        };
                    //}
                }
            }
        }
    };

    function loss(){
        self.loss = true;
    }

    function shootCell(cel, x, y){
        if (self.loss) return;
        var xy = '' + x + '_' + y;
        if (cel && !cel.cell.isShoot){
            wound(cel.x, cel.y);
            cel.cell.setShoot();
            if (cel.ship.killed){
                kill(cel.ship);
            }
            if(!inFilledCells(xy)){
                appendFilledCells(xy);
            }
            return true;
        }else{
            past(x, y);

            if(!inFilledCells(xy)){
                appendFilledCells(xy);
            }
            return false;
        }
    }

    function tryShootCell(x, y){
        var cel = findCell(x, y);
        return shootCell(cel, x, y);
    }

    function appendFilledCells(xy){
        self.filledCells = self.filledCells.concat(xy);
    }

    function inFilledCells(xy){
        return (self.filledCells.indexOf(xy) >= 0)
    }

    function wound(x, y){
        self.dom.cells['cell'+x+'_' +y].classList.add('pink');
    }

    function past (x, y){
        self.dom.cells['cell'+x+'_' +y].classList.add('gray');
    }

    function kill(ship){
        fillRelatedCell(ship.relatedCells);
        fillShipCells(ship.cells);
        self.countKilled++;
        if (self.countKilled>=20) loss();
    }

    function fillRelatedCell(relatedCells){
        for (var i=0; i<relatedCells.length; i++){
            var x =relatedCells[i].x;
            var y = relatedCells[i].y;
            if (x<=0 || y<=0|| x>self.width || y>self.height) continue;
            self.dom.cells['cell'+x+'_' +y].classList.add('gray');
        }
    }

    function fillShipCells(shipCells){
        for (var j=0; j<shipCells.length; j++){
            var x =shipCells[j].x;
            var y = shipCells[j].y;
            if (x<=0 || y<=0|| x>self.width || y>self.height) continue;
            var cell = self.dom.cells['cell'+x+'_' +y];
            removeClass(cell, 'pink');
            cell.classList.add('red');
        }
    }

    function findCell(x, y){
        var ind = arrayObjectIndexOf(self.cells, '' +x +'_' + y, 'xy');
        if (ind>=0){
            return self.cells[ind];
        }
        return false;
    }
    function init(){
        drawGrid();
    }

    function drawGrid(){
        var grid = document.createElement('div');
        grid.className = 'grid-container';
        for (var x = 0; x<=self.width;x++){
            var row = document.createElement('div');
            row.className='grid-row';
            for(var y = 0; y<=self.height; y++){
                var cell = document.createElement('div');
                cell.className = 'grid-cell';
                if (x===0 && y>0) {
                    cell.innerText = y;
                }else if (x>0 && y===0) {
                    cell.innerText = x;
                }else if (x!==0 && y!==0){
                    cell.classList.add('black');
                    //cell.onclick = getXY;
                }
                row.appendChild(cell);
                self.dom.cells['cell'+x+'_' +y] = cell;
            }
            container.appendChild(row);
        }
        return grid;
    }
    function getColor(cl) {
        switch (cl){
            case 0:
                cl = 'black';
                break;
            case 1:
                cl = 'white';
                break;
            case 2:
                cl = 'black';
                break;
            default:
                cl = '';
                break;
        }
        return cl;
    }

    init();
}
