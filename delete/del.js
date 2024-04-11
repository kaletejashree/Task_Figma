// $(document).ready(function()
// {
//     $("#datatable").DataTable();
// });


function submitinfo()
{
    if(!validation())
    {
        return ;
    }

    addinfo();

}









function validation()
{
    
    const deptnm=document.getElementById("deptname");
    const deptip=deptnm.value.trim();
    
    const error1=document.getElementById("error1");
    const deptregex=/^[a-zA-Z]+$/;
    if(!deptregex.test(deptip))
    {
        deptnm.style.border="2px solid red";
        error1.style.display="block";
        return false;
    }
    else if(deptip===""){
        deptnm.style.border="2px solid red";
        error1.style.display="block";
        return false;
    }
    else{
        deptnm.style.border="";
        error1.style.display="none";
    }

   

    //validation for the emp name

    const empnm=document.getElementById("empnm");
    const empnmip=empnm.value.trim();

    const errorempnm=document.getElementById("errorempnm");

    const empnmregex=/^[a-zA-z]+$/;

    if(!empnmregex.test(empnmip))
    {
        empnm.style.border="2px solid red";
        errorempnm.style.display="block";
        return false;
    }
    else if(empnmip===""){
        empnm.style.border="2px solid red";
        errorempnm.style.display="block";
        return false;
    }
    else{
        empnm.style.border="";
        errorempnm.style.display="none";
    }

    //validation for the age

    const dobip=document.getElementById("dob");
    const dobv=new Date(dobip.value);

    const errorage=document.getElementById("errorage");

    const currentdate=new Date();

    const age=currentdate-dobv;

    const ageInYears = age / (1000 * 60 * 60 * 24 * 365);
    if(ageInYears<18)
    {
        dobip.style.border="2px solid red";
        errorage.style.display="block";
        return false;
    }
    else{
        dobip.style.border="";
        errorage.style.display="none";
    }

    //validation for the salary

    const salary=document.getElementById("salary");
    const salaryip=salary.value;

    const salaryregex=/^[0-9]+$/;
    const errorsalary=document.getElementById("errorsalary");

    if(!salaryregex.test(salaryip)||isNaN(salaryip)||salaryip<=0)
    {
        salary.style.border="2px solid red";
        errorsalary.style.display="block";
        return false;
    }
    else{
        salary.style.border="";
        errorsalary.style.display="none";
    }

    //validation for email
    const emailip=document.getElementById("empemail");
    const emailv=emailip.value;
    const erroremail=document.getElementById("erroremail");

    const emailregex=/^[^/s@]+@[^/s@]+\.[^/s@]+$/;

    if(!emailregex.test(emailv))
    {
        emailip.style.border="2px solid red";
        erroremail.style.display="block";
        return false;
    }
    else{
        emailip.style.border="";
        erroremail.style.display="none";
    }
    return true;
}

document.getElementById("State").addEventListener("change",function(){
    
    var state = this.value;
    var cityDropdown = document.getElementById("City");
    cityDropdown.innerHTML = ""; // Clear existing options
    
    // Populate cities based on selected state
    if (state === "Maharashtra") {
      var MaharashtraCities = ["Pune", "Mumbai", "Nashik","Nagpur"];
      MaharashtraCities.forEach(function(City) {
        var option = document.createElement("option");
        option.text = City;
        option.value = City;
        cityDropdown.add(option);
      });
    } 
    else if(state==="Gujarat")
    {
        var guajaratcities=["ambli","Jamnagar","Bopal","Vadodara"];
        guajaratcities.forEach(function(City)
    {
        var option=document.createElement("option");
        option.text=City;
        option.value=City;
        cityDropdown.add(option);
    });
    }
    else{
        var panjabcities=["Amrutsar","Ludiyana","delhi"];
        panjabcities.forEach(function(City){
            var option=document.createElement("option");
            option.text=City;
            option.value=City;
            cityDropdown.add(option);
        });
    }

});

function addinfo()
{
    var deptname=document.getElementById("deptname").value;
    var deptdesc=document.getElementById("deptdesc").value;
    var State=document.getElementById("State").value;
    var City=document.getElementById("City").value;

    const list=document.querySelector("#list");

   if(list.rows.length>=10)
   {
    alert("you cannot enter more than 10 rows");
    return;
   }



    const row=document.createElement("tr");

    const nestedrow=document.createElement("tr");
    const nestedcol=document.createElement("td");
    nestedcol.colSpan=7;
    const nestedtable=document.createElement("table");
    nestedtable.classList.add("table","table-striped","table-responsive-lg");


   //insert nested table


   nestedtable.innerHTML=`
   <caption>Educational Form</caption>
   
   <tr>
   <th>Employee Name</th>
   <th>Date of birth</th>
   <th>Salary</th>
   <th>Joining Date</th>
   <th>Email</th>
   <th>Address</th>
   <th>Action</th>
</tr>
</thead>
<tbody id="listedu">
<tr>
</tr>
</tbody>`;
  nestedcol.appendChild(nestedtable);
  nestedrow.appendChild(nestedcol);



    row.innerHTML=`<td><button class="btn btn-info" onclick="expand(this)">></button></td>
                   <td>${deptname}</td>
                   <td>${deptdesc}</td>
                   <td>${State}</td>
                   <td>${City}</td>
                   <td><button class="btn btn-primary" onclick="Editinfo(this)">Edit</button>
                   <button class="btn btn-danger" onclick="removeinfo(this)">Remove</button></td>`;

        list.appendChild(row);
        list.appendChild(nestedrow);

        document.getElementById("deptname").value="";
        document.getElementById("deptdesc").value="";
        document.getElementById("State").value="";
        document.getElementById("City").value="";
 

     


       const listedu=nestedtable.querySelector("#listedu");

       var empnm=document.querySelectorAll("#empnm");
       var dob=document.querySelectorAll("#dob");
       var salary=document.querySelectorAll("#salary");
       var joiningdate=document.querySelectorAll("#joiningdate");
       var empemail=document.querySelectorAll("#empemail");
       var address=document.querySelectorAll("#address");

       for(let i=0;i<empnm.length;i++)
       {
        var empnmip=empnm[i].value;
        var dobip=dob[i].value;
        var salaryip=salary[i].value;
        var joiningdateip=joiningdate[i].value;
        var empemailip=empemail[i].value;
        var addressip=address[i].value;

        const addlist=document.createElement("tr");

        addlist.innerHTML=`<tr>
        <td>${empnmip}</td>
        <td>${dobip}</td>
        <td>${salaryip}</td>
        <td>${joiningdateip}</td>
        <td>${empemailip}</td>
        <td>${addressip}</td>
    </tr>`;
        
    listedu.appendChild(addlist);
       }



       empnm.forEach(input=>input.value="");
       dob.forEach(input=>input.value="");
       salary.forEach(input=>input.value="");
       joiningdate.forEach(input=>input.value="");
       empemail.forEach(input=>input.value="");
       address.forEach(input=>input.value="");
}

function removeinfo(button){
    const removedata=button.parentNode.parentNode;
    removedata.parentNode.removeChild(removedata);
    alert("delete the department row");
}

document.getElementById("State").addEventListener("change",function(){



})

function Editinfo(button)
{
    var deptnameedit=document.getElementById("deptname").value;
    var deptdescedit=document.getElementById("deptdesc").value;
    var Stateedit=document.getElementById("State").value;
    var Cityedit=document.getElementById("City").value;
    

    var itemnameedit=prompt("enter the category",deptnameedit.innerHTML);
    var itemdescedit=prompt("enter the category description",deptdescedit.innerHTML);
    var foodtypeedit=prompt("enter the status",Stateedit.innerHTML);
    var profitedit=prompt("enter the launch date",Cityedit.innerHTML);
  

    deptnameedit.innerHTML=itemnameedit;
    deptdescedit.innerHTML=itemdescedit;
    Stateedit.innerHTML=foodtypeedit;
    Cityedit.innerHTML=profitedit;
   
}

function expand(button)
{
  const expand=button.parentNode.parentNode.nextElementSibling;
  expand.classList.toggle("hidden");
}

function addrow()
{   
    const edulist2=document.querySelector("#edulist2");
    const addrow1=document.createElement("tr");

    addrow1.innerHTML=`<tr>
    <td><input type="text" id="empnm" placeholder="aaa" required><div id="errorempnm" style="display:none ;color: red;">Only alphabets are allow</div></td>
    <td><input type="date" id="dob" required ><div id="errorage" style="display:none ;color: red;">Age Should be greater than 18</div></td>
    <td><input type="number" id="salary" placeholder="500000" required><div id="errorsalary" style="display:none ;color: red;">Non negative and non zero number</div></td>
    <td><input type="date" id="joiningdate" required></td>
    <td><input type="email" id="empemail" placeholder="aaa@gmail.com" required><div id="erroremail" style="display:none ;color: red;">Improper Image</div></td>
    <td><input type="text" id="address" placeholder="pune" required></td>
</tr>`;
edulist2.appendChild(addrow1);
}
