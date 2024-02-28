$(document).ready(function(){

   $("#dataTable").DataTable();

   
// Validate Username
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

//date of birth
$("#dobcheck").hide();
let dobError = true;

$("#dateofbirth").change(function () {
    validateDateOfBirth();
});

function validateDateOfBirth() {
    let dobValue = $("#dateofbirth").val();

    if (!dobValue) {
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

    dobError = true;
    return true;
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






//Education table validation
$('#submitbtn').click(function(e){
    e.preventDefault();
    var isValid = true;

    // Loop through each row in the table
    $('#educationTable tbody tr').each(function(){
        var degreeBoard = $(this).find('input[name="boardname[]"]').val();
        var collegeName = $(this).find('input[name="Collegename[]"]').val();
        var startDate = $(this).find('input[name="startDate[]"]').val();
        var passYear = $(this).find('input[name="Passyear[]"]').val();
        var percentage = $(this).find('input[name="percentage[]"]').val();
        var backlogs = $(this).find('input[name="backlogs[]"]').val();

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
    $(".name_list").val("");
    $(".college_list").val("");
    $(".start_date").val("");
    $(".pass_year").val("");
    $(".percentage").val("");
    $(".backlog").val("");
});



//submit button
$("#submitbtn").click(function (e) {
    e.preventDefault();
    validateUsername();
    validateLastname();
    validateDateOfBirth();
    validateEmail();
    validateAddress();
    validateYear();
    if (
        usernameError == true &&
        lastnameError == true &&
        dobError == true &&
        emailError == true &&
        lastnameError==true &&
        yearError==true
    ) {
        return true;
    } else {
        return false;
    }
});


//while click on the add button row should added in educational table
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




//fetching the data
$("#submitbtn").click(function(e)
{      e.preventDefault();
    var username=$("#usernames").val();
    var lastname=$("#lastnames").val();
    var dob=$("#dateofbirth").val();
    var email=$("#email").val();
    var address=$("#address").val();
    var graduationyear=$("#graduationyear").val();
    
    


    var newRow = "<tr><td>" + username + "</td><td>" + lastname + "</td><td>" + dob + "</td><td>" + email + "</td><td>" + address + "</td><td>" + graduationyear + "</td><td><button class='btn btn-danger butt'>Remove</button></td><td><button class='btn btn-primary btnclick'>Edit</button></td></tr>";

        // Append the new row to the table body
        $("#tableBody").append(newRow);

        //Clear form fields after submission
        $("#usernames").val("");
        $("#lastnames").val("");
        $("#dateofbirth").val("");
        $("#email").val("");
        $("#address").val("");
        $("#graduationyear").val("");

        //remove the row on click
        $(document).on('click','.butt',function(){
            $(this).parent().parent().remove();        
            });

        //edit the row
        $(document).on("click", ".btnclick", function(){
               
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