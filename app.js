
var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

var filter =document.getElementById('filter');




document.addEventListener('submit',add);
document.addEventListener('click',remove)
filter.addEventListener('keyup',addFilter);

function add(e){
    e.preventDefault();
    var text=document.getElementById('item').value;
    var list=document.createElement('li');

    var btn=document.createElement('button');
    btn.className='btn btn-danger btn-sm float-right delete';
    list.className='list-group-item';
    list.appendChild(document.createTextNode(text));
    itemlist.appendChild(list);
    btn.appendChild(document.createTextNode("X"));
    list.appendChild(btn);
   }
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var k=e.target.parentElement;
           itemlist.removeChild(k);
        }
    }
   
}
 function addFilter(e){
    var text=e.target.value.toLowerCase()
    console.log(text);
    var items=itemlist.getElementsByTagName('li');
   
    console.log(items[0].innerText);
Array.from(items).forEach(function(item){
    var name=item.firstChild.textContent;
    if(name.toLowerCase().indexOf(text)!=-1){
        item.style.display='block'
    }else{
        item.style.display='none';
    }
    
   });

 }





 



