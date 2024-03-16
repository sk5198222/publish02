let cMove='';
let uMove='';

let score = JSON.parse(localStorage.getItem('score')) || {win:0,lose:0,tie:0};

function compMove(){
  let move=Math.random();
  if(move<=(1/3))
    cMove= 'rock';
  else if(move<=(1/6))
    cMove= 'paper';
  else
    cMove= 'scissor';
  return cMove;
}

function Move(move){
  let c=compMove();
  u=move;
  res(c,u);
}

function res(cM,uM){
  let inHTML='';

  if(cM===uM){
    document.querySelector('.res').textContent='Tied';
    score.tie++;
  } 
  else if(cM==='rock' && uM==='paper' || cM==='scissor' && uM==='rock' || cM==='paper' && uM==='scissor'){
    document.querySelector('.res').textContent='Won';
    score.win++;
  }
  else{
    document.querySelector('.res').textContent='Lost';
    score.lose++;
  }

  localStorage.setItem('score',JSON.stringify(score));
  
  inHTML=`You <img class="pngs" src="${uM}.png">    <img class="pngs" src="${cM}.png"> Computer`;

  document.querySelector('.show').innerHTML=inHTML;
  document.querySelector('.counts').textContent=`Wins: ${score.win} Ties: ${score.tie} Losses: ${score.lose}`;
}

function resetScore(){
  localStorage.removeItem('score');
  score.win=0,score.tie=0,score.lose=0;

  document.querySelector('.res').innerHTML='Score has been reset.';
  document.querySelector('.show').innerHTML='Play again!!!';
  document.querySelector('.counts').textContent=`Wins: ${score.win}, Ties: ${score.tie}, Losses: ${score.lose}`;
}

let isplaying=false;
let intr;

function autoplay(){
  if(isplaying===false){
    intr=setInterval(function a1(){
      Move(compMove());
    }, 1000); 
    isplaying=true;
  }
  else{
    clearInterval(intr);
    isplaying=false;
  }
}

document.querySelector('.rockBtn').addEventListener('click',() =>{
  Move('rock');
})

document.querySelector('.paperBtn').addEventListener('click',() =>{
  Move('paper');
})

document.querySelector('.scissorBtn').addEventListener('click',() =>{
  Move('scissor');
})

document.querySelector('.resetBtn').addEventListener('click',() =>{
  resetScore();
})

document.querySelector('.aPBtn').addEventListener('click',() =>{
  autoplay();
})

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r' || event.key==='R')
    Move('rock');
  else if(event.key==='p' || event.key==='P')
    Move('paper');
  else if(event.key==='s' || event.key==='S')
    Move('scissor');
})