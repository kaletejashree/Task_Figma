function add()
{
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;

    var list=document.querySelector('#list');
    var row=document.createElement('tr');

    row.innerHTML=`<td>${fname}</td>
                   <td>${lname}</td> 
                   <td><button class='btn btn-primary edit' onclick='editdata(this)'>edit</button>
                   <button class='btn btn-danger remove' onclick='removedata(this)'>remove</button></td>`;
    
    list.appendChild(row);
    getElementById('fname').value="";
    getElementById('lname').value="";
}

function editdata()
{
      let newrow=button.parentNode.parentNode;

             let fnamecell=newrow.cells[0];
             let lnamecell=newrow.cell[1];
         
             let fname=prompt("enter name",fnamecell.innerHTML);
             let lname=prompt("lastname=",lnamecell.innerHTML);
         
             fname=fnamecell.innerHTML;
             lname=lnamecell.innerHTML;
}
function removedata(){
    var row=button.parentNode.parentNode;
    row.parentNode.removeChild();
}