var dom;
document.addEventListener( 'DOMContentLoaded', function () {
    dom = getDom();
    generate();
    dom.buttons.generate.onclick = generate;
}, false );

function getDom(){
    return {
        container:document.getElementsByClassName('game-container'),
        buttons:{
            generate:document.getElementById('generate')
        }
    };
}
function generate(){
    var generator = new ShipGenerator(dom.container);
    generator.drawShips();
}