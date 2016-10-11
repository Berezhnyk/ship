/**
 * Created by Berezhnyk on 9/12/2016.
 */

 function SG (container, opponent){
    var self = this;
    self.dom ={
        cells :{}
    };
    self.opponent = opponent;
    self.countKilled = 0;
    self.loss = false;
    self.cells = [];
    self.width = 10;
    self.height = 10;
    container.innerText = '';
    self.shipsArr = [];
    self.battleField = null;
    self.filledCellsArr = [];

    init();

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
                        if (!opponent){
                            cell.classList.add( getColor(self.shipsArr[x][y]));
                            continue;
                        }

                        cell.onclick = function () {
                            if (self.loss) return;
                            var x = this.getAttribute('data-x');
                            var y = this.getAttribute('data-y');
                            if (inFilledCells(x, y)) return;
                            if (self.tryShootCell(x, y)){
                             console.log('shot')
                            }else {

                                var a = getRandomInt(1, opponent.width);
                                var b = getRandomInt(1, opponent.height);
                                var c = self.opponent.tryShootCell(a, b, opponent);
                            }
                        };
                    //}
                }
            }
        }
    };

    SG.prototype.tryShootCell = function(x, y, _self){
        _self = _self || self;
        var cel = findCell(x, y, _self);
        return shootCell(cel, x, y, _self);
    };

    function loss(){
        self.loss = true;
        dom.writeInfo(self.opponent?'Ви перемогли!!!':'Ви програли=(');
    }

    function shootCell(cel, x, y, _self){
        _self = _self || self;
        if (_self.loss) return;
        if (!inFilledCells(x, y, _self)) _self.filledCellsArr.push(x+'_'+y);
        if (cel && !cel.cell.isShoot){
            wound(cel.x, cel.y, _self);
            cel.cell.setShoot();
            if (cel.ship.killed){
                kill(cel.ship, _self);
            }
            return true;
        }else{
            past(x, y, _self);
            return false;
        }
    }



    function wound(x, y, _self){
        _self = _self || self;
        _self.dom.cells['cell'+x+'_' +y].classList.add('pink');
    }

    function past (x, y, _self){
        _self = _self || self;
        _self.dom.cells['cell'+x+'_' +y].classList.add('gray');
    }

    function kill(ship, _self){
        _self = _self || self;
        fillRelatedCell(ship.relatedCells, _self);
        fillShipCells(ship.cells, _self);
        _self.countKilled++;
        console.log('countKilled',self.countKilled);
        if (_self.countKilled>=10) loss();
    }

    function fillRelatedCell(relatedCells, _self){
        _self = _self || self;
        for (var i=0; i<relatedCells.length; i++){
            var x =relatedCells[i].x;
            var y = relatedCells[i].y;
            if (x<=0 || y<=0|| x>self.width || y>self.height) continue;
            _self.filledCellsArr.push(x+'_'+ y);
            _self.dom.cells['cell'+x+'_' +y].classList.add('gray');
        }
    }

    function fillShipCells(shipCells, _self){
        _self = _self || self;
        for (var j=0; j<shipCells.length; j++){
            var x =shipCells[j].x;
            var y = shipCells[j].y;
            if (x<=0 || y<=0|| x>_self.width || y>_self.height) continue;
            var cell = _self.dom.cells['cell'+x+'_' +y];
            removeClass(cell, 'pink');
            cell.classList.add('red');
        }
    }

    function findCell(x, y, _self){
        _self = _self || self;
        var ind = arrayObjectIndexOf(_self.cells, '' +x +'_' + y, 'xy');
        if (ind>=0){
            return _self.cells[ind];
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

    function inFilledCells(x, y, _self){
        _self = _self || self;
        return _self.filledCellsArr.indexOf(x  +'_' + y)>=0?true:false;
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

    
}
