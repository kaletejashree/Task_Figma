$(document).ready(function()
{
   

    //validation--------------------------------
    //username validation


    $("#usercheck").hide();
let usernameError = true;
$("#usernames").keyup(function () {
    validateUsername();
});

function validateUsername() {
    let usernameValue = $("#usernames").val();
    if (usernameValue.length == "") {
        $("#usercheck").show();
        usernameError = false;
        return false;
    } else if (usernameValue.length < 3 || usernameValue.length > 10) {
        $("#usercheck").show();
        $("#usercheck").html("**length of username must be between 3 and 10");
        usernameError = false;
        return false;
    } else {
        $("#usercheck").hide();
    }
}


    //last name validation

  // Validate last Name
$("#lastnamecheck").hide();
let lastnameError = true;
$("#lastnames").keyup(function () {
    validateLastname();
});

function validateLastname() {
    let lastnameValue = $("#lastnames").val();
    if (lastnameValue.length == "") {
        $("#lastnamecheck").show();
        lastnameError = false;
        return false;
    } else if (lastnameValue.length < 3 || lastnameValue.length > 10) {
        $("#lastnamecheck").show();
        $("#lastnamecheck").html("**length of last must be between 3 and 10");
        lastnameError = false;
        return false;
    } else {
        $("#lastnamecheck").hide();
    }
}

//date of birth again check what is wrong
//date of birth
$("#dobcheck").hide();
let dobError = true;

$("#dateofbirth").change(function () {
    validateDateOfBirth();
});

function validateDateOfBirth() {
    let dobValue = $("#dateofbirth").val();

    if (dobValue == "") {
        $("#dobcheck").show();
        dobError = false;
        return false;
    }
    else if (!dobValue) {
        $("#dobcheck").show();
        dobError = false;
        return false;
    } else {
        // Check if age is greater than 18
        let today = new Date();
        let selectedDate = new Date(dobValue);
        let age = today.getFullYear() - selectedDate.getFullYear();

        if (age < 18) {
            $("#dobcheck").show();
            $("#dobcheck").html("**Age must be greater than 18");
            dobError = false;
            return false;
        } else {
            $("#dobcheck").hide();
        }
    }

   
}
    // Validate Email
    $("#emailvalid").hide();
    let emailError = true;
    $("#email").keyup(function () {
        validateEmail();
    });
    function validateEmail() {
        let emailValue = $("#email").val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (emailValue.trim() === '' || !emailRegex.test(emailValue)) {
            $("#emailvalid").show(); // Display error message
            emailError = false;
            return false;
        } else {
            $("#emailvalid").hide(); // Hide error message if validation passes
            emailError = true;
        }
    }
    
    // Validate Address
    $("#addresscheck").hide();
    let addressError = true;
    $("#address").keyup(function () {
        validateAddress();
    });
    
    function validateAddress() {
        let addressValue = $("#address").val();
        if (addressValue.length == "") {
            $("#addresscheck").show();
            lastnameError = false;
            return false;
        } else if (addressValue.length < 3 || addressValue.length > 10) {
            $("#addresscheck").show();
            $("#addresscheck").html("**length of address must be between 3 and 10");
            lastnameError = false;
            return false;
        } else {
            $("#addresscheck").hide();
        }
    }
    
    //graduation year validation
    $("#yearcheck").hide();
    let yearError=true;
    $("#graduationyear").keyup(function(){
        validateYear();
    });
    
    function validateYear()
    {
        let yearValue=$("#graduationyear").val();
        if(yearValue.length=="")
        {
            $("#yearcheck").show();
            yearError=false;
            return false;
        }
        else {
            $("#yearcheck").hide();
        }
    }



   //education table
        var counter=0;
        $("#addbtn").click(function(){
         var addrow=$("<tr>");
  
         addrow.append("<td><input type='text' name='School' placeholder='N.T.R school'></td>");
         addrow.append("<td><input type='text' name='College' placeholder='A.B.C college'></td>");
         addrow.append("<td><input type='month' name='Start' placeholder='june 2015'></td>");
         addrow.append("<td><input type='month' name='graduation' placeholder='jan 2016'></td>");
         addrow.append("<td><input type='text' name='Backlocks' placeholder='0'></td>");
         addrow.append("<td><button class='btn btn-primary minbtn'><i class='fa-solid fa-square-minus'></i></button></td>");
  
         $("#educationTable tbody").append(addrow);
         counter++;
  
        });
  
        $("#educationTable tbody").on('click', '.minbtn', function(){
         $(this).closest('tr').remove();
         counter--; // Decrement the counter when a row is removed
     });
    

    $("#submitbtn").click(function(){



        validateUsername();
        validateLastname();
        validateDateOfBirth();
        validateEmail();
        validateAddress();
        validateAddress();
        validateYear();
       
        var username=$("#usernames").val();
        var lastname=$("#lastnames").val();
        var dateofbirth=$("#dateofbirth").val();
        var email=$("#email").val();
        var address=$("#address").val();
        var graduationyear=$("#graduationyear").val();

    if (username.trim() === '' || lastname.trim() === '' || dateofbirth.trim() === '' || email.trim() === '' || address.trim() === '' || graduationyear.trim() === '') {
        alert('Please fill in all fields in student table.');
        return;
    }

    /*
    var isValid = true;

    // Loop through each row in the table
    $('#educationTable tbody tr').each(function(){
        var degreeBoard = $(this).find('input[name="School[]"]').val();
        var collegeName = $(this).find('input[name="College[]"]').val();
        var startDate = $(this).find('input[name="Start[]"]').val();
        var passYear = $(this).find('input[name="graduation[]"]').val();
     
        var backlogs = $(this).find('input[name="Backlocks[]"]').val();

        // Check if any field is blank
        if (degreeBoard === '' || collegeName === '' || startDate === '' || passYear === '' || percentage === '' || backlogs === '') {
            alert('Please fill in all fields.');
            isValid = false;
            return false;
        }

        // Check if start date is less than passout year
        if (new Date(startDate) >= new Date(passYear)) {
            alert('Start date should be less than passout year.');
            isValid = false;
            return false; 
        }

        // Check if backlogs are not negative
        if (parseInt(backlogs) < 0) {
            alert('Backlogs cannot be negative.');
            isValid = false;
            return false; 
        }
    });

    // If all checks passed, submit the form
    if (isValid) {
        
        alert('Form submitted successfully.');
    }
   



*/






















    

        var newRow="<tr><td>"+username+"</td><td>"+lastname+"</td><td>"+dateofbirth+"</td><td>"+email+"</td><td>"+address+"</td><td>"+graduationyear+"</td><td><button class='btn btn-primary editbtn'>Edit</button></td><td><button class='btn btn-danger removebtn'>Remove</button></td></tr>";
        
        $("#tableBody").append(newRow);
       
        //remove the button
        $("#tableBody tr").on('click','.removebtn',function()
    {
        $(this).closest('tr').remove();
    });
     //edit the row
     $(document).on("click", ".editbtn", function(){
               
        // Get the parent row of the clicked button 
        let row = $(this).closest("tr");
    
        // Get the cells within the row 
        let nameCell = row.find("td").eq(0);
        let lastnameCell = row.find("td").eq(1);
        let dateofbirthCell = row.find("td").eq(2);
        let emailCell = row.find("td").eq(3);
        let addressCell = row.find("td").eq(4);
        let graduationyearCell = row.find("td").eq(5);
    
        // Prompt the user to enter updated values 
        let firstname = prompt("Enter the updated first name:", nameCell.text());
        let lastname = prompt("Enter the updated last:", lastnameCell.text());
        let dateofbirth = prompt("Enter the updated date of birth:", dateofbirthCell.text());
        let email = prompt("Enter the updated email:", emailCell.text());
        let address = prompt("Enter the address:", addressCell.text());
        let graduationyear = prompt("Enter the graduation:", graduationyearCell.text());
    
        // Update the cell contents with the new values 
        nameCell.text(firstname);
        lastnameCell.text(lastname);
        dateofbirthCell.text(dateofbirth);
        emailCell.text(email);
        addressCell.text(address);
        graduationyearCell.text(graduationyear);
    
});

            
    });
   
    
})
