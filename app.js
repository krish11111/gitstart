var div=document.createElement('div');
div.id='krishna';
div.setAttribute('class','hello');
var text=document.createTextNode('hello world');
div.appendChild(text);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(div,h1);

