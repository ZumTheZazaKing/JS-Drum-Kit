let clap = document.getElementById('clap');
let hihat = document.getElementById('hihat');
let kick = document.getElementById('kick');
let openhat = document.getElementById('openhat');
let boom = document.getElementById('boom');
let ride = document.getElementById('ride');
let snare = document.getElementById('snare');
let tom = document.getElementById('tom');
let tink = document.getElementById('tink');

let A = document.getElementById('A');
let S = document.getElementById('S');
let D = document.getElementById('D');
let F = document.getElementById('F');
let G = document.getElementById('G');
let H = document.getElementById('H');
let J = document.getElementById('J');
let K = document.getElementById('K');
let L = document.getElementById('L');

let buttons = document.getElementsByClassName('button');

function drumKitPlay(event){

    if (event.code == 'KeyA'){


        A.style.transform = 'scale(2)';

        A.style.border = '5px solid yellow';

        A.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        clap.play();

    } else if (event.code == 'KeyS'){

        S.style.transform = 'scale(2)';

        S.style.border = '5px solid yellow';

        S.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        hihat.play();

    } else if (event.code == 'KeyD'){

        D.style.transform = 'scale(2)';

        D.style.border = '5px solid yellow';

        D.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        kick.play();

    } else if (event.code == 'KeyF'){

        F.style.transform = 'scale(2)';

        F.style.border = '5px solid yellow';

        F.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        openhat.play();

    } else if (event.code == 'KeyG'){

        G.style.transform = 'scale(2)';

        G.style.border = '5px solid yellow';

        G.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        boom.play();

    } else if(event.code == 'KeyH'){

        H.style.transform = 'scale(2)';

        H.style.border = '5px solid yellow';

        H.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        ride.play();

    } else if(event.code == 'KeyJ'){

        J.style.transform = 'scale(2)';

        J.style.border = '5px solid yellow';

        J.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        snare.play();

    } else if(event.code == 'KeyK'){

        K.style.transform = 'scale(2)';

        K.style.border = '5px solid yellow';

        K.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        tom.play();

    } else if(event.code == 'KeyL'){

        L.style.transform = 'scale(2)';

        L.style.border = '5px solid yellow';

        L.style.boxShadow = '0 0 5px 5px rgba(255, 255, 0, .5)';

        tink.play();

    }

}

function backToNormal(){

    for (var i = 0; i < buttons.length;i++){

        buttons[i].style.transform = 'scale(1)';

        buttons[i].style.border = 'none';

        buttons[i].style.boxShadow = 'none';

    }

}