
//? creare due variabili

let userNumber = Math.floor(Math.random() * 7);
let pcNumber = Math.floor(Math.random() * 7);

//** creare il generatore di numeri

for(i = 1; i <= 6; i ++){
    if( userNumber > pcNumber ){
        console.log('Humans rules');
        document.getElementById('human').innerHTML = 'GO HUMAN'
    }else if( pcNumber > userNumber){
        console.log('AI won')
        document.getElementById('machine').innerHTML = 'MACHINE WON'
    }else{
        document.getElementById('none').innerHTML = '0 - 0'
    }
}

//todo Creata la variabile utente e la lista da confrontare

const listEmail = ['lilo@gmail.com', 'stitch@gmail.com', 'Nani@gmail.com', 'CobraBubbles@gmail.com', 'Duchessa@gmail.com', 'Groviera@gmail.com', 'Romeo@gmail.com', 'Minuo@gmail.com', 'Matisse@gmail.com', 'Bizet@gmail.com']

const userMail =  document.getElementById('user-mail');


//! Verificare se l'utente è nella lista

if ( userMail.value == listEmail.value){
    console.log('ENJOY');
}else if (userMail != listEmail){
    console.log('DORY...AGAIN, you forget it again?');
}else{
    console.log('Still empty :)');
}
