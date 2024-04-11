function submitInfo()
{
    //first name validation
    const fnameip=document.getElementById('fname');
    const fna=fnameip.value;

    const fnregex=/^[a-zA-Z]+$/;

    if(!fnregex.test(fna))
    {
        fnameip.style.border="2px solid red";
        alert("fill only alphabetical info")
    }
    else{
        fnameip.style.border=" ";
    }

    //last name

   const lnameip=document.getElementById('lname');
   const lna=lnameip.value;

   const lnregex=/^[a-zA-Z]+$/;

   if(!lnregex.test(lna))
   {
       lnameip.style.border="2px solid red";
       alert("fill only alphabetical info")
   }
   else{
       lnameip.style.border=" ";
   }

    //age shoould greater than 18

    const ageinput=document.getElementById('dob');

    const age=parseInt(ageinput.value);

    console.log(age);
    if(isNaN(age) ||age<=18)
    {
        ageinput.style.border="2px solid red";
        console.log(age);
        alert("age should be greater than 18");
        return
    }
    else{
        ageinput.style.border="";
    }

    //positive number
    const marksinput=document.getElementById("marks");
    const mar=parseFloat(marksinput.value);

    if(isNaN(mar)||mar<=0)
    {
        marksinput.style.border="2px solid blue"
        alert("only enter the positive number");
        return;
    }
    else{
        marksinput.style.border="";
    }



    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var dob=document.getElementById("dob").value;
    var marks=document.getElementById("marks").value;

    const list=document.querySelector("#list");
    const row=document.createElement("tr");

    row.innerHTML=`<td>${fname}</td>
                   <td>${lname}</td>
                   <td>${dob}</td>
                   <td>${marks}</td>
                   <td><td><button class='btn btn-info' onclick='edit(this)'>edit</button></td>
                   <button class='btn btn-info' onclick='remove(this)'>remove</button></td>`;

    list.appendChild(row);
     
    document.getElementById("fname")="";
    document.getElementById("lname")="";
    document.getElementById("dob")="";
    document.getElementById("marks")="";



   

}
function edit(button)
{
    const newrow=button.parentNode.parentNode;

    var fcell=newrow.cells[0];
    var lcell=newrow.cells[1];
    var dobcell=newrow.cells[2];
    var markscell=newrow.cells[3];

    var fnameedit=prompt("enter the fname value",fcell.innerHTML);
    var lnameedit=prompt("enter the lname value",lcell.innerHTML);
    var dobedit=prompt("enter the dob",dobcell.innerHTML);
    var marksedit=prompt("enter the marks",markscell.innerHTML);

    fcell.innerHTML=fnameedit;
    lcell.innerHTML=lnameedit;
    dobcell.innerHTML=dobedit;
    markscell.innerHTML=marksedit;
}

function remove(button)
{
    let removerow=button.parentNode.parentNode;
    removerow.parentNode.removeChild(removerow);
}



