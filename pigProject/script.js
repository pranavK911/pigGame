let sc0=document.querySelector("#score--0");
let sc1=document.querySelector("#score--1");

let dice=document.querySelector(".dice");
const diceroll=document.querySelector('.btn--roll');
const dicenew=document.querySelector('.btn--new');
const dicehold=document.querySelector('.btn--hold');

const current0scro=document.getElementById('current--0');
const current1scro=document.getElementById('current--1');

const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');


sc0.innerHTML=0;
sc1.innerHTML=0;
dice.classList.add('hidden');
let currentscore=0;
let activeplayer=0;
let finalscore=[0,0];
let play=1;


const switchplayer=()=>{
    document.getElementById(`current--${activeplayer}`).innerHTML=0;
    currentscore=0;
    activeplayer=activeplayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

diceroll.addEventListener('click',()=>{
    if(play){
    dice.classList.remove('hidden');
    const dicenum=Math.trunc(Math.random()*6)+1;
    dice.src=`pigProject/dice-${dicenum}.png`;

    if(dicenum!==1){
        currentscore+=dicenum;
        document.getElementById(`current--${activeplayer}`).innerHTML=currentscore;
    }   
    else{
        switchplayer();
    }
}
})

dicehold.addEventListener('click',()=>{
    if(play){

    
    finalscore[activeplayer]+=currentscore;
    // console.log(finalscore);
    document.getElementById(`score--${activeplayer}`).textContent=finalscore[activeplayer];
    if(finalscore[activeplayer]>=20){
        dice.classList.add('hidden');
        play=0;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`player--${activeplayer}`).classList.remove('player--active')
       
    }
    else{
       switchplayer();
    }
}

});



dicenew.addEventListener('click',()=>{
   sc0.innerHTML=0;
   sc1.innerHTML=0;
   dice.classList.add('hidden');
   currentscore=0;
   activeplayer=0;
   finalscore=[0,0];
   play=1;
   document.querySelector('.player--0').classList.add('player--active');
   document.querySelector('.player--1').classList.remove('player--active');
   document.querySelector('.player--0').classList.remove('player--winner');
   document.querySelector('.player--1').classList.remove('player--winner');
   document.getElementById('current--0').textContent=0;
   document.getElementById('current--1').textContent=0;


})


