function addRow(){
var root=document.getElementById('table').getElementsByTagName('tbody')[0];
var rows=root.getElementsByTagName('tr');
var clone=cloneEl(rows[rows.length-1]);
root.appendChild(clone);
}
function cloneEl(el){
var clone_1=el.cloneNode(true);
return clone_1;
}
