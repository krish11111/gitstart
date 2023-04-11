
document.addEventListener('submit',add);
var email;
var mybj;
var l1;
var l2;
var l3;
function add(e){
    e.preventDefault();
   var name=document.getElementById('filter').value;
   email=document.getElementById('mail').value;
   var phon=document.getElementById('phones').value;
  l1=document.createElement('li');
  l2=document.createElement('li');
   l3=document.createElement('li');
   mybj={
   name,email,phon
 }
 var obj=JSON.stringify(mybj);
 localStorage.setItem(email,obj);
 l1.innerText=name;
 l2.innerText=email;
 l3.textContent=phon;
 var btns=document.createElement('BUTTON');
console.log(btns);
var a=document.getElementById('items');
btns.className='btn btn-dark';
btns.textContent='DELETE'
a.appendChild(l1);
a.appendChild(l2);
a.appendChild(l3);
a.appendChild(btns);
btns.onclick=deleted;
  
}
function deleted(e){
    
    e.preventDefault();
    var des=localStorage.getItem(email);
    var st=JSON.parse(des);
    localStorage.removeItem(email);
 var del=document.getElementById('items');

  del.removeChild(des.email);
    

}