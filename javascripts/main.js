var dom;
var mySg,
    opponentSg;
document.addEventListener( 'DOMContentLoaded', function () {
    init();
}, false );

function init(){
    dom = getDom();
    generate();
    dom.buttons.generate.onclick = function(){
        generate();
        writeInfo('');
    };
    dom.buttons.start.onclick = function () {
        dom.buttons.generate.hidden = true;
        dom.buttons.start.hidden = true;
        dom.buttons.stop.hidden = false;
        dom.opponentContainer.hidden = false;
        writeInfo("Стартуємо!!!");
    };
    dom.buttons.stop.onclick = function () {
        dom.buttons.generate.hidden = false;
        dom.buttons.start.hidden = false;
        dom.buttons.stop.hidden = true;
        dom.opponentContainer.hidden = true;
        generate();
        generateOpponent();
        writeInfo('');
    };
    generateOpponent();
}

function getDom(){
    return {
        myContainer:document.getElementsByClassName('game-container')[0],
        opponentContainer:document.getElementsByClassName('game-container')[1],
        //testContainer:document.getElementsByClassName('game-container')[2],
        buttons:{
            generate:document.getElementById('generate'),
            start:document.getElementById('start'),
            stop:document.getElementById('stop')
        },
        cells:document.getElementsByClassName('grid-cell'),
        info:document.getElementById('info'),
        info2:document.getElementById('info2')
    };
}

function generate(){
    mySg = new SG(dom.myContainer, false);
    mySg.generate();
    mySg.show();
}

function generateOpponent(){
    opponentSg = new SG(dom.opponentContainer, true);
    opponentSg.generate();
    opponentSg.show();
}

function writeInfo(message){
    dom.info.innerText = message;
    dom.info2.innerText = '';
}

function writeInfo2(message){
    dom.info2.innerText = message;
}