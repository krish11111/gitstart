
var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');






document.addEventListener('submit',add);
document.addEventListener('click',remove)

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
var delbtn=document.createElement('button');
delbtn.className="btn btn-danger btn-sm float-right";
for(var i=0;i<itemlist.length;i++){
    document.children[i].appendChild(delbtn.appendChild(document.createTextNode('Ed')));





 



