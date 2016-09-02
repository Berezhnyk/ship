/**
 * Created by Berezhnyk on 30.08.2016.
 */
//Розробив Бережник Іван (ivanberezhnyk@gmail.com)
//Створюю двовимірний масив x розміром 12x12
var ShipGenerator = function (contain) {
    var container = contain[0];
    container.innerText = '';
    var x = new Array(12);
    for (var k = 0; k < 12; k++) x[k] = new Array(12);
//Заповнюю його нулями
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 12; j++) {
            x[i][j] = '0';
        }
    }

    function getColor(cl) {
        switch (cl){
            case 0:
                cl = 'black';
                break
            case 1:
                cl = 'white';
                break
            case 2:
                cl = 'black';
                break
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
        var t = x[a][b];
        if (t!=1 && t!=2){
            x[a][b]=1;
            x[a-1][b-1] = 2;
            x[a-1][b] = 2;
            x[a-1][b+1] = 2;
            x[a][b-1] = 2;
            x[a][b+1] = 2;
            x[a+1][b-1] = 2;
            x[a+1][b] = 2;
            x[a+1][b+1] = 2;
        }
        else{
            setShip1();
        }
        return;
    }

    function setShipHor2(){
        var a =  getRandomInt(1, 10), b =  getRandomInt(1, 9);
        var t = x[a][b], t1 = x[a][b+1];
        if (t == 0 && t1 == 0) {
            x[a][b]=1;
            x[a][b+1]=1;
            x[a-1][b-1] = 2;
            x[a-1][b] = 2;
            x[a-1][b+1] = 2;
            x[a-1][b+2] = 2;
            x[a][b-1] = 2;
            x[a][b+2] = 2;
            x[a+1][b-1] = 2;
            x[a+1][b] = 2;
            x[a+1][b+1] = 2;
            x[a+1][b+2] = 2;
        }
        else{
            setShipHor2();
        }
        return;
    }

    function setShipVert2(){
        var a =  getRandomInt(1, 9), b =  getRandomInt(1, 10);
        var t = x[a][b], t1 = x[a+1][b];
        if (t == 0 && t1 == 0) {
            x[a][b]=1;
            x[a+1][b]=1;
            x[a-1][b-1] = 2;
            x[a-1][b] = 2;
            x[a-1][b+1] = 2;
            x[a][b-1] = 2;
            x[a][b+1] = 2;
            x[a+1][b-1] = 2;
            x[a+1][b+1] = 2;
            x[a+2][b-1] = 2;
            x[a+2][b] = 2;
            x[a+2][b+1] = 2;
        }
        else{
            setShipVert2();
        }
        return;
    }

    function setShipHor3(){
        var a =  getRandomInt(1, 10), b =  getRandomInt(1, 8);
        var t = x[a][b], t1 = x[a][b+1], t2 = x[a][b+2];
        if (t == 0 && t1 == 0 && t2 ==0) {
            x[a][b]=1;
            x[a][b+1]=1;
            x[a][b+2]=1;
            x[a-1][b-1] = 2;
            x[a-1][b] = 2;
            x[a-1][b+1] = 2;
            x[a-1][b+2] = 2;
            x[a-1][b+3] = 2;
            x[a][b-1] = 2;
            x[a][b+3] = 2;
            x[a+1][b-1] = 2;
            x[a+1][b] = 2;
            x[a+1][b+1] = 2;
            x[a+1][b+2] = 2;
            x[a+1][b+3] = 2;
        }
        else{
            setShipHor3();
        }
        return;
    }

    function setShipVert3(){
        var a =  getRandomInt(1, 8), b =  getRandomInt(1, 10);
        var t = x[a][b], t1 = x[a+1][b], t2 = x[a+2][b];
        if (t == 0 && t1 == 0 && t2 ==0) {
            x[a][b]=1;
            x[a+1][b]=1;
            x[a+2][b]=1;
            x[a-1][b-1] = 2;
            x[a-1][b] = 2;
            x[a-1][b+1] = 2;
            x[a][b-1] = 2;
            x[a][b+1] = 2;
            x[a+1][b-1] = 2;
            x[a+1][b+1] = 2;
            x[a+2][b-1] = 2;
            x[a+2][b+1] = 2;
            x[a+3][b-1] = 2;
            x[a+3][b] = 2;
            x[a+3][b+1] = 2;
        }
        else{
            setShipVert3();
        }
        return;
    }

    function setShipHor4(){
        var a =  getRandomInt(1, 10), b =  getRandomInt(1, 7);
        var t = x[a][b], t1 = x[a][b+1], t2 = x[a][b+2], t3 = x[a][b+3];
        if (t == 0 && t1 == 0 && t2 ==0 && t3 == 0) {
            x[a][b]=1;
            x[a][b+1]=1;
            x[a][b+2]=1;
            x[a][b+3]=1;
            x[a-1][b-1] = 2;
            x[a-1][b] = 2;
            x[a-1][b+1] = 2;
            x[a-1][b+2] = 2;
            x[a-1][b+3] = 2;
            x[a-1][b+4] = 2;
            x[a][b-1] = 2;
            x[a][b+4] = 2;
            x[a+1][b-1] = 2;
            x[a+1][b] = 2;
            x[a+1][b+1] = 2;
            x[a+1][b+2] = 2;
            x[a+1][b+3] = 2;
            x[a+1][b+4] = 2;
        }
        else{
            setShipHor4();
        }
        return;
    }

    function setShipVert4(){
        var a =  getRandomInt(1, 7), b =  getRandomInt(1, 10);
        var t = x[a][b], t1 = x[a+1][b], t2 = x[a+2][b], t3 = x[a+3][b];
        if (t == 0 && t1 == 0 && t2 ==0 && t3 == 0) {
            x[a][b]=1;
            x[a+1][b]=1;
            x[a+2][b]=1;
            x[a+3][b]=1;
            x[a-1][b-1] = 2;
            x[a-1][b] = 2;
            x[a-1][b+1] = 2;
            x[a][b-1] = 2;
            x[a][b+1] = 2;
            x[a+1][b-1] = 2;
            x[a+1][b+1] = 2;
            x[a+2][b-1] = 2;
            x[a+2][b+1] = 2;
            x[a+3][b-1] = 2;
            x[a+3][b+1] = 2;
            x[a+4][b-1] = 2;
            x[a+4][b] = 2;
            x[a+4][b+1] = 2;
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

    function generateShips(){
        setShip(4);
        setShip(3);	setShip(3);
        setShip(2);	setShip(2);	setShip(2);
        setShip(1);	setShip(1);	setShip(1);	setShip(1);
    }

    function drawGrid(){
        var grid = document.createElement('div');
        grid.className = "grid-container";
        for (var i = 0; i<11;i++){
            var row = document.createElement('div');
            row.className="grid-row";
            for(var j = 0; j<11; j++){
                var cell = document.createElement('div');
                cell.className = "grid-cell";
                if (i===0 && j>0) {
                    cell.innerText = j;
                }else if (i>0 && j===0) {
                    cell.innerText = i;
                }else if (i!==0 && j!==0){
                  cell.style.background = getColor(x[i][j]);
                }
                row.appendChild(cell);
            }
            container.appendChild(row);
        }
        return grid;
    }

    ShipGenerator.prototype.drawShips = function(){
        generateShips();
        drawGrid();
    }
};
