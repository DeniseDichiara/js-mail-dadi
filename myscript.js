
//? creare due variabili

let userNumber = Math.floor(Math.random() * 7);
let pcNumber = Math.floor(Math.random() * 7);

//** creare il generatore di numeri

for(i = 0; i < 7; i ++){
    if( userNumber > pcNumber ){
        console.log('Humans rules');
    }else if( pcNumber > userNumber){
        console.log('AI won')
    }
}