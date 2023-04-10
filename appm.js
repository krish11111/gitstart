
document.addEventListener('submit',add);


function add(e){
var user=document.getElementById('item').value;
e.preventDefault();
localStorage.setItem('name',user);
var myobj={
    name :'aditya',
    age :36
}

let ser=JSON.stringify(myobj);
localStorage.setItem('myobj',ser);

let des=JSON.parse(localStorage.getItem('myobj'));



}
