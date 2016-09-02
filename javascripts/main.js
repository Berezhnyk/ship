var dom;
document.addEventListener( 'DOMContentLoaded', function () {
    init();
}, false );

function init(){
    dom = getDom();
    generate();
    dom.buttons.generate.onclick = function(){
        generate()
    };
    dom.buttons.start.onclick = function () {
        dom.buttons.generate.hidden = true;
        dom.buttons.start.hidden = true;
        dom.buttons.stop.hidden = false;
        dom.opponentContainer.hidden = false;
    };
    dom.buttons.stop.onclick = function () {
        dom.buttons.generate.hidden = false;
        dom.buttons.start.hidden = false;
        dom.buttons.stop.hidden = true;
        dom.opponentContainer.hidden = true;
        generate();
        generateOpponent();
    };
    generateOpponent();

}

function getDom(){
    return {
        myContainer:document.getElementsByClassName('game-container')[0],
        opponentContainer:document.getElementsByClassName('game-container')[1],
        buttons:{
            generate:document.getElementById('generate'),
            start:document.getElementById('start'),
            stop:document.getElementById('stop')
        },
        cells:document.getElementsByClassName('grid-cell')
    };
}

function generate(){
    var generator = new ShipGenerator(dom.myContainer, false);
    generator.drawShips();
}

function generateOpponent(){
    var opponentGenerator = new ShipGenerator(dom.opponentContainer, true);
    opponentGenerator.drawShips();
}