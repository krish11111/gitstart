
document.addEventListener('submit',add);

function add(e){
    e.preventDefault();
   var name=document.getElementById('filter').value;
   var email=document.getElementById('mail').value;
   var phon=document.getElementById('phones').value;
  var l1=document.createElement('li');
  var l2=document.createElement('li');
  var l3=document.createElement('li');
  var mybj={
   name,email,phon
 }
 var obj=JSON.stringify(mybj);
 localStorage.setItem(email,obj);
 l1.innerText=name;
 l2.innerText=email;
 l3.textContent=phon;
var a=document.getElementById('items');
a.appendChild(l1);
a.appendChild(l2);
a.appendChild(l3);
  
}