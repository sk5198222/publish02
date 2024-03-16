let calc='';
document.querySelector('h3').textContent='------------------';

function assign(val){
  calc+=val;
  getVal();
}

function getVal(){
  document.querySelector('h3').textContent=calc;
}
      
function res(cal){
  calc=(eval(cal)).toString();
  document.querySelector('h3').textContent=calc;
}

function clearA(){
  document.querySelector('h3').textContent='All clear';
  calc='';
}

function clear1(){
  calc= calc.substring(0,calc.length-1);
  getVal();
}

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='Enter')
    res(calc);
  else if(event.key>='0' && event.key<='9')
    assign(event.key);
  else if(event.key==='Backspace')
    clear1();
  else if(event.key==='Delete')
    clearA();
  else{
    switch(event.key){
      case '+' : assign(event.key); break;
      case '/' : assign(event.key); break;
      case '*' : assign(event.key); break;
      case '-' : assign(event.key); break;
      case '.' : assign(event.key); break;
    }
  }
})