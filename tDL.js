let finList=[{name:'',date:''}];
finList.splice(0,1);

function pushTDL(){
  let name=document.querySelector('.nameIn').value;
  let date=document.querySelector('.dateIn').value;
  if(name!='' && date!='')
    finList.push({name,date});
  renderTDL();
  name=document.querySelector('.nameIn').value='';
  date=document.querySelector('.dateIn').value='';
}

function renderTDL(){
  document.querySelector('.outputDiv').innerHTML='';
  finList.forEach(function(obj,i){
    let query=`<div>${obj.name}</div>  <div>${obj.date}</div>
    <button class="popQ" onclick="rmv(${i})">Delete</button>`;
    document.querySelector('.outputDiv').innerHTML+=query;
  })
}

function rmv(j){
  finList.splice(j,1);
  renderTDL();
}

document.querySelector('.add').addEventListener('click',()=>{
  pushTDL();
});