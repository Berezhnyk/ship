/**
 * Created by Berezhnyk on 30.08.2016.
 */
//Розробив Бережник Іван (ivanberezhnyk@gmail.com)
//Створюю двовимірний масив x розміром 12x12
var ShipGenerator = function (contain, isOpponent) {
    var container = contain;
    container.innerText = '';
    var arr = new Array(12);
    for (var k = 0; k < 12; k++) arr[k] = new Array(12);
//Заповнюю його нулями
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            arr[i][j] = 0;
        }
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
                cl = 'black';
                break
        }
        return cl;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function setShip1(){
        var a =  getRandomInt(1, 10), b =  getRandomInt(1, 10);
        var t = arr[a][b];
        if (t!=1 && t!=2){
            arr[a][b]=1;
            arr[a-1][b-1] = 2;
            arr[a-1][b] = 2;
            arr[a-1][b+1] = 2;
            arr[a][b-1] = 2;
            arr[a][b+1] = 2;
            arr[a+1][b-1] = 2;
            arr[a+1][b] = 2;
            arr[a+1][b+1] = 2;
        }
        else{
            setShip1();
        }
        return;
    }

    function setShipHor2(){
        var a =  getRandomInt(1, 10), b =  getRandomInt(1, 9);
        var t = arr[a][b], t1 = arr[a][b+1];
        if (t == 0 && t1 == 0) {
            arr[a][b]=1;
            arr[a][b+1]=1;
            arr[a-1][b-1] = 2;
            arr[a-1][b] = 2;
            arr[a-1][b+1] = 2;
            arr[a-1][b+2] = 2;
            arr[a][b-1] = 2;
            arr[a][b+2] = 2;
            arr[a+1][b-1] = 2;
            arr[a+1][b] = 2;
            arr[a+1][b+1] = 2;
            arr[a+1][b+2] = 2;
        }
        else{
            setShipHor2();
        }
        return;
    }

    function setShipVert2(){
        var a =  getRandomInt(1, 9), b =  getRandomInt(1, 10);
        var t = arr[a][b], t1 = arr[a+1][b];
        if (t == 0 && t1 == 0) {
            arr[a][b]=1;
            arr[a+1][b]=1;
            arr[a-1][b-1] = 2;
            arr[a-1][b] = 2;
            arr[a-1][b+1] = 2;
            arr[a][b-1] = 2;
            arr[a][b+1] = 2;
            arr[a+1][b-1] = 2;
            arr[a+1][b+1] = 2;
            arr[a+2][b-1] = 2;
            arr[a+2][b] = 2;
            arr[a+2][b+1] = 2;
        }
        else{
            setShipVert2();
        }
        return;
    }

    function setShipHor3(){
        var a =  getRandomInt(1, 10), b =  getRandomInt(1, 8);
        var t = arr[a][b], t1 = arr[a][b+1], t2 = arr[a][b+2];
        if (t == 0 && t1 == 0 && t2 ==0) {
            arr[a][b]=1;
            arr[a][b+1]=1;
            arr[a][b+2]=1;
            arr[a-1][b-1] = 2;
            arr[a-1][b] = 2;
            arr[a-1][b+1] = 2;
            arr[a-1][b+2] = 2;
            arr[a-1][b+3] = 2;
            arr[a][b-1] = 2;
            arr[a][b+3] = 2;
            arr[a+1][b-1] = 2;
            arr[a+1][b] = 2;
            arr[a+1][b+1] = 2;
            arr[a+1][b+2] = 2;
            arr[a+1][b+3] = 2;
        }
        else{
            setShipHor3();
        }
        return;
    }

    function setShipVert3(){
        var a =  getRandomInt(1, 8), b =  getRandomInt(1, 10);
        var t = arr[a][b], t1 = arr[a+1][b], t2 = arr[a+2][b];
        if (t == 0 && t1 == 0 && t2 ==0) {
            arr[a][b]=1;
            arr[a+1][b]=1;
            arr[a+2][b]=1;
            arr[a-1][b-1] = 2;
            arr[a-1][b] = 2;
            arr[a-1][b+1] = 2;
            arr[a][b-1] = 2;
            arr[a][b+1] = 2;
            arr[a+1][b-1] = 2;
            arr[a+1][b+1] = 2;
            arr[a+2][b-1] = 2;
            arr[a+2][b+1] = 2;
            arr[a+3][b-1] = 2;
            arr[a+3][b] = 2;
            arr[a+3][b+1] = 2;
        }
        else{
            setShipVert3();
        }
        return;
    }

    function setShipHor4(){
        var a =  getRandomInt(1, 10), b =  getRandomInt(1, 7);
        var t = arr[a][b], t1 = arr[a][b+1], t2 = arr[a][b+2], t3 = arr[a][b+3];
        if (t == 0 && t1 == 0 && t2 ==0 && t3 == 0) {
            arr[a][b]=1;
            arr[a][b+1]=1;
            arr[a][b+2]=1;
            arr[a][b+3]=1;
            arr[a-1][b-1] = 2;
            arr[a-1][b] = 2;
            arr[a-1][b+1] = 2;
            arr[a-1][b+2] = 2;
            arr[a-1][b+3] = 2;
            arr[a-1][b+4] = 2;
            arr[a][b-1] = 2;
            arr[a][b+4] = 2;
            arr[a+1][b-1] = 2;
            arr[a+1][b] = 2;
            arr[a+1][b+1] = 2;
            arr[a+1][b+2] = 2;
            arr[a+1][b+3] = 2;
            arr[a+1][b+4] = 2;
        }
        else{
            setShipHor4();
        }
        return;
    }

    function setShipVert4(){
        var a =  getRandomInt(1, 7), b =  getRandomInt(1, 10);
        var t = arr[a][b], t1 = arr[a+1][b], t2 = arr[a+2][b], t3 = arr[a+3][b];
        if (t == 0 && t1 == 0 && t2 ==0 && t3 == 0) {
            arr[a][b]=1;
            arr[a+1][b]=1;
            arr[a+2][b]=1;
            arr[a+3][b]=1;
            arr[a-1][b-1] = 2;
            arr[a-1][b] = 2;
            arr[a-1][b+1] = 2;
            arr[a][b-1] = 2;
            arr[a][b+1] = 2;
            arr[a+1][b-1] = 2;
            arr[a+1][b+1] = 2;
            arr[a+2][b-1] = 2;
            arr[a+2][b+1] = 2;
            arr[a+3][b-1] = 2;
            arr[a+3][b+1] = 2;
            arr[a+4][b-1] = 2;
            arr[a+4][b] = 2;
            arr[a+4][b+1] = 2;
        }
        else{
            setShipVert4();
        }
        return;
    }

    function setShip(ship) {
        var horVert = Math.floor(Math.random() * 2); //повертає 0 або 1, тобто горизонтальний чи вертикальний корабель
        switch (ship){
            case 1:
                setShip1();
                break;
            case 2:
                if (horVert == 1){
                    setShipHor2()
                }
                else{
                    setShipVert2()
                }
                break;
            case 3:
                if (horVert == 1){
                    setShipHor3()
                }
                else{
                    setShipVert3()
                }
                break;
            case 4:
                if (horVert == 1){
                    setShipHor4()
                }
                else{
                    setShipVert4()
                }
                break
        }
    }

    function getXY(){
        var x = this.getAttribute('data-x'),
            y = this.getAttribute('data-y');
        if (isOpponent){
            console.log(x, ' - ', y);
            if (getColor(arr[x][y]) === 'white'){
                this.classList.add('white');
            }else{
                this.classList.add('gray');
            }
        }
        return {
            x:x,
            y:y
        }
    }

    ShipGenerator.prototype.generateShips =  function (){
        setShip(4);
        setShip(3);	setShip(3);
        setShip(2);	setShip(2);	setShip(2);
        setShip(1);	setShip(1);	setShip(1);	setShip(1);
    };

    ShipGenerator.prototype.drawGrid = function (){
        var grid = document.createElement('div');
        grid.className = "grid-container";
        for (var x = 0; x<11;x++){
            var row = document.createElement('div');
            row.className="grid-row";
            for(var y = 0; y<11; y++){
                var cell = document.createElement('div');
                cell.className = "grid-cell";
                if (x===0 && y>0) {
                    cell.innerText = y;
                }else if (x>0 && y===0) {
                    cell.innerText = x;
                }else if (x!==0 && y!==0){
                    cell.classList.add(isOpponent?'black':getColor(arr[x][y]));
                    cell.setAttribute('data-x', x);
                    cell.setAttribute('data-y', y);
                    cell.onclick = getXY;
                }
                row.appendChild(cell);
            }
            container.appendChild(row);
        }
        return grid;
    };

    ShipGenerator.prototype.drawShips = function(){
        this.generateShips();
        this.drawGrid();
    }
};
