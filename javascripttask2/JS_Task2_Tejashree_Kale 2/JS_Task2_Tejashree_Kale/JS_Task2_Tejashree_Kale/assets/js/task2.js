let form=document.getElementById('form');
let firstname=document.getElementById('firstname');
let lasttname=document.getElementById('lastname');
let dateofbirth=document.getElementById('dateofbirth');
let email=document.getElementById('email');
let address=document.getElementById('address');
let graduationyear=document.getElementById('graduationyear');


//function to submit
form.addEventListener('submit',(event)=>
{
    event.preventDefault();
    validate();
    
})

form.addEventListener('submit',(event)=>
{
    event.preventDefault();
    submitvalidateForm();
    
})


const sendData=(count)=()=>{
    if(sRate===count){
        alert("registration successfull");
        swal("good job!","","success");
    }
}

//for validation
const Successmsg=()=>{
    let formCon=document.getElementsByClassName('form-control');
    var count=formCon.length-1;
    for(var i=0;i<formCon.length;i++){
        if(formCon[i].className==="form-control success"){
            var sRate=0+i;
          sendData(count);
        }
        else{
            return false;
        }
    }
}

//define validation function
 const validate=()=>{
    const firstnameVal=firstname.value.trim();  //remove the whitespaces
    const lastnameVal=lastname.value.trim();
    const dateofbirthVal=dateofbirth.value.trim();
    const emailVal=email.value.trim();
    const addressVal=address.value.trim();
    const graduationyearVal=graduationyear.value.trim();


    //validate firstname

if(firstnameVal==="")
{
    setErrormsg(firstname,'firstname cannot be blank');
}
else if(firstnameVal.length<=2){
    setErrormsg(firstname,'firstname min 3 char');
}
else{
    setSuccessmsg(firstname);
}

//validate lastname
if(lastnameVal==="")
{
    setErrormsg(lastname,'lastname cannot be blank');
}
else if(lastnameVal.length<=2){
    setErrormsg(lastname,'lastname min 3 char');
}
else{
    setSuccessmsg(lastname);
}

//validate date og birth
if(dateofbirthVal==="")
{
    setErrormsg(dateofbirth,'Date of birth cannot be blank');
}

else{
    setSuccessmsg(dateofbirth);
}


//email
const isEmail=(emailVal)=>{
    var atSymbol=emailVal.indexOf('@');
    if(atSymbol<1) return false;
    var dot=emailVal.lastIndexOf('.');
    if(dot<=atSymbol+2) return false;
    if(dot===emailVal.length-1) return false;
    return true;
}




if(emailVal==="")
{
    setErrormsg(email,'email cannot be blank');
}
else if(!isEmail(emailVal)){
    setErrormsg(email,'email min 3 char');
}
else{
    setSuccessmsg(email);
}
//validate address
if(addressVal==="")
{
    setErrormsg(address,'address cannot be blank');
}
else if(addressVal.length<=2){
    setErrormsg(address,'address should not be greater than 50 words');
}
else{
    setSuccessmsg(address);
}

//validate graduation year
if(graduationyearVal==="")
{
    setErrormsg(graduationyear,'graduation year cannot be blank');
}
else{
    setSuccessmsg(graduationyear);
}
setSuccessmsg();

 }
 //error msg
function setErrormsg(input,errormsgs){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText=errormsgs;
}

//success msg
function setSuccessmsg(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
    
}
//table info fill
$(document).ready(function(){
      
    var counter=2;
    $("#add").click(function(){
        var newRow = $("<tr>");
      
        newRow.append("<td><input type='text' name='boardname[]' placeholder='' class='form-control name_list' /></td>");
        newRow.append("<td><input type='text' name='Collegename[]' placeholder='' class='form-control name_email'/></td>");
        newRow.append("<td><input type='month' name='startDate[]' placeholder='' class='form-control total_amount'/></td>");
        newRow.append("<td><input type='month' name='Passyear[]' placeholder='' class='form-control pass_year'/></td>");
        newRow.append("<td><input type='text' name='percentage[]' placeholder='Dont use % sign' class='form-control percentage' /></td>");
        newRow.append("<td><input type='text' name='backlogs[]' placeholder='If Any' class='form-control backlog' /></td>");
        newRow.append("<td><button type='button' class='btn btn-dark rounded-circle remove'><i class='fa-solid fa-minus'></i></button></td>")

        
        $("#educationTable tbody").append(newRow);
        counter++;
    });

    $("#educationTable tbody").on('click', '.remove', function(){
        $(this).closest('tr').remove();
        counter--; // Decrement the counter when a row is removed
    });
    

});




function submitvalidateForm() {
    // Get all input elements
    const inputElements = document.querySelectorAll('#educationTable input');

    // Check if any input field is empty
    let isValid = true;
    inputElements.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            return;
        }
    });

    // Display alert if any input field is empty
    if (!isValid) {
        alert('Fill the all information!');
    }
    else{
        const rows = document.querySelectorAll("#educationTable tbody tr");

        for (let i = 0; i < rows.length; i++) {
            const startDateInput = rows[i].querySelector(".start_date");
            const passYearInput = rows[i].querySelector(".pass_year");
            const backlogInput = rows[i].querySelector(".backlog");

            const startDate = new Date(startDateInput.value);
            const passYear = new Date(passYearInput.value);
            const backlog = parseFloat(backlogInput.value);

            // Validate start date less than pass year
            if (startDate >= passYear) {
                alert("Start Date should be less than Passout Year for row " + (i + 1));
                return;
            }

            // Validate backlogs not negative
            if (backlog < 0) {
                alert("Backlogs should not be negative for row " + (i + 1));
                return;
            }
        }

        alert("Form submitted successfully!"); 
    }
    
       
    }




// Your existing code for submitting the form
function handleSubmit(event) {
    event.preventDefault();

    // form data
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const dateofbirth = document.getElementById('dateofbirth').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const graduationyear = document.getElementById('graduationyear').value;

    // Add data to the table
    addRow(firstname, lastname, dateofbirth, email, address, graduationyear);
   
}

// Your existing code for adding a new row
function addRow(firstname, lastname, dateofbirth, email, address, graduationyear) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const row = table.insertRow(table.rows.length);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);

    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = dateofbirth;
    cell4.innerHTML = email;
    cell5.innerHTML = address;
    cell6.innerHTML = graduationyear;
    cell7.innerHTML='<button onclick="editData(this)"><i class="fa-solid fa-pencil"></i></button>'+ 
    '<button onclick="deleteData(this)"><i class="fa-solid fa-trash"></i></button>';
    
   
}

//updated form
function editData(button) { 
            
    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode; 
    
    // Get the cells within the row 
    let nameCell = row.cells[0]; 
    let lastnameCell = row.cells[1]; 
    let dateofbirthCell = row.cells[2]; 
    let emailCell = row.cells[3]; 
    let addressCell = row.cells[4]; 
    let graduationyearCell = row.cells[2]; 

    
    // Prompt the user to enter updated values 
        let firstname =   prompt("Enter the updated first name:",  nameCell.innerHTML); 
        let lastname = prompt("Enter the updated last:",  lastnameCell.innerHTML); 
        let dateofbirth = prompt("Enter the updated date of birth:", dateofbirthCell.innerHTML  ); 
        let email = prompt("Enter the updated email:", emailCell.innerHTML );
        let address = prompt("Enter the address:", addressCell.innerHTML  ); 
        let graduationyear = prompt("Enter the graduation:", graduationyearCell.innerHTML ); 
    
    // Update the cell contents with the new values 
    nameCell.innerHTML = firstname; 
    lastnameCell.innerHTML = lastname; 
    dateofbirthCell.innerHTML = dateofbirth; 
    emailCell.innerHTML = email; 
    addressCell.innerHTML = address; 
    emailCell.innerHTML = graduationyear; 
} 

function deleteData(button) { 
            
    let row = button.parentNode.parentNode; 

    row.parentNode.removeChild(row); 
} 
function clearInputs() { 
    
    // Clear input fields 
    document.getElementById("firstname").value = ""; 
    document.getElementById("lastname").value = ""; 
    document.getElementById("dateofbirth").value = ""; 
    document.getElementById("email").value = ""; 
    document.getElementById("address").value = ""; 
    document.getElementById("graduationyear").value = ""; 
} 



/*
function editData(button) {
    // Get the parent row of the clicked button 
    let row = button.parentNode.parentNode;

    // Get the cells within the row 
    let nameCell = row.cells[0]; 
    let lastnameCell = row.cells[1]; 
    let dateofbirthCell = row.cells[2]; 
    let emailCell = row.cells[3]; 
    let addressCell = row.cells[4]; 
    let graduationyearCell = row.cells[5]; 


    // Populate the form with existing values
    document.getElementById('editFirstName').value = nameCell.innerHTML;
    document.getElementById('editLastName').value = lastnameCell.innerHTML;
    document.getElementById('editDateOfBirth').value = dateofbirthCell.innerHTML;
    document.getElementById('editEmail').value = emailCell.innerHTML;
    document.getElementById('editAddress').value = addressCell.innerHTML;
    document.getElementById('editGraduationYear').value = graduationyearCell.innerHTML;

    // Show the update form
    document.getElementById('updateForm').style.display = 'block';
}

function updateData() {
    // Get updated values from the form
    let firstname = document.getElementById('editFirstName').value;
    let lastname = document.getElementById('editLastName').value;
    let dateofbirth = document.getElementById('editDateOfBirth').value;
    let email = document.getElementById('editEmail').value;
    let address = document.getElementById('editAddress').value;
    let graduationyear = document.getElementById('editGraduationYear').value;

    // Update the cell contents with the new values
    let row = document.getElementById('dataTable').rows[1]; 
    row.cells[0].innerHTML = firstname;
    row.cells[1].innerHTML = lastname;
    row.cells[2].innerHTML = dateofbirth;
    row.cells[3].innerHTML = email;
    row.cells[4].innerHTML = address;
    row.cells[5].innerHTML = graduationyear;

    // Hide the update form
    document.getElementById('updateForm').style.display = 'none';
}

function cancelUpdate() {
    // Hide the update form
    document.getElementById('updateForm').style.display = 'none';
}*/