var dom;
(function () {
  var 
    mySg,
    opponentSg,
    myId,
    peer;

    init();
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
            //dom.buttons.create.hidden = true;
            //dom.buttons.connect.hidden = true;
            dom.opponentContainer.hidden = false;
            generateOpponent();
            dom.writeInfo("Стартуємо!!!");
        };
        dom.buttons.stop.onclick = function () {
            dom.buttons.generate.hidden = false;
            dom.buttons.start.hidden = false;
            //dom.buttons.create.hidden = false;
            //dom.buttons.connect.hidden = false;
            dom.buttons.stop.hidden = true;
            dom.opponentContainer.hidden = true;
            generate();
            dom.writeInfo('');
        };
        /*
         dom.buttons.create.onclick = function () {
         startPeer();
         };

         dom.buttons.connect.onclick = function () {
         var opponentId = dom.opponentID.value;
         var conn = peer.connect(opponentId);
         conn.on('open', function() {
         // Receive messages
         conn.on('data', function(data) {
         console.log('Received', data);
         });

         // Send messages
         conn.send('Hello!');
         });
         };*/
        //startPeer();
    }

    function getDom(){
        return {
            myContainer:document.getElementsByClassName('game-container')[0],
            opponentContainer:document.getElementsByClassName('game-container')[1],
            //testContainer:document.getElementsByClassName('game-container')[2],
            buttons:{
                generate:document.getElementById('generate'),
                start:document.getElementById('start'),
                //create:document.getElementById('create'),
                //connect:document.getElementById('connect'),
                stop:document.getElementById('stop')
            },
            opponentID:document.getElementById('opponentId'),
            cells:document.getElementsByClassName('grid-cell'),
            info:document.getElementById('info'),
            info2:document.getElementById('info2'),
            writeInfo:function writeInfo(message){
                        this.info.innerText = message;
                        this.info2.innerText = '';
                      }
        };
    }

    function generate(){
        mySg = new SG(dom.myContainer, false);
        mySg.generate();
        mySg.show();
    }

    function generateOpponent(){
        opponentSg = new SG(dom.opponentContainer, mySg);
        opponentSg.generate();
        opponentSg.show();
    }          

    function startPeer(){
        peer = new Peer({key: '2jpvj3y8wbrfi529'});
        dom.writeInfo('Зачекайте, будь ласка');
        peer.on('open', function(id) {
            myId = id;
            dom.writeInfo('Ваша гра створена. Повідомте, будь ласка, ID гри вашому опоненту: ' + myId);
        });
    }
  }()
);


