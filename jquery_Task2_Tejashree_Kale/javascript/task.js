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









//submit button
$("#submitbtn").click(function (e) {
    e.preventDefault();
   /* var isValid = true;

    // Loop through each row in the table
    $('#form').each(function(){
        var usernames = $(this).find('input[name="username[]"]').val();
        var lastname = $(this).find('input[name="lastname[]"]').val();
        var dateofbirth = $(this).find('input[name="dateofbirth[]"]').val();
        var email = $(this).find('input[name="email[]"]').val();
        var address = $(this).find('input[name="address[]"]').val();
        var graduationyear = $(this).find('input[name="graduationyear[]"]').val();

        // Check if any field is blank
        if (usernames === '' || lastname === '' || dateofbirth === '' || email === '' || address === '' || graduationyear === '') {
            alert('Please fill in all fields.');
            isValid = false;
            return false;
        }*/
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

   //check the fields are fill or not
    if (username.trim() === '' || lastname.trim() === '' || dob.trim() === '' || email.trim() === '' || address.trim() === '' || graduationyear.trim() === '') {
        alert('Please fill in all fields in student table.');
        return;
    }
    
    var newRow = $("<tr><td><button class='btn btn-success rounded-circle expandplus'><i class='fa-solid fa-plus'></i></button></td><td>" + username + "</td><td>" + lastname + "</td><td>" + dob + "</td><td>" + email + "</td><td>" + address + "</td><td>" + graduationyear + "</td><td><button class='btn btn-danger butt'>Remove</button></td><td><button class='btn btn-primary btnclick'>Edit</button></td></tr>");

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
                let ex=row.find("td").eq(0);
                let nameCell = row.find("td").eq(1);
                let lastnameCell = row.find("td").eq(2);
                let dateofbirthCell = row.find("td").eq(3);
                let emailCell = row.find("td").eq(4);
                let addressCell = row.find("td").eq(5);
                let graduationyearCell = row.find("td").eq(6);
            
                // Prompt the user to enter updated values 
                let firstname = prompt("Enter the updated first name:", nameCell.text());
                let lastname = prompt("Enter the updated last:", lastnameCell.text());
                let dateofbirth = prompt("Enter the updated date of birth:", dateofbirthCell.text());
                let email = prompt("Enter the updated email:", emailCell.text());
                let address = prompt("Enter the address:", addressCell.text());
                let graduationyear = prompt("Enter the graduation:", graduationyearCell.text());
            
                // Update the cell contents with the new values 
                ex.text();
                nameCell.text(firstname);
                lastnameCell.text(lastname);
                dateofbirthCell.text(dateofbirth);
                emailCell.text(email);
                addressCell.text(address);
                graduationyearCell.text(graduationyear);
            
        });

        

});
function education(){

    
    var school=$(".name_list").val();
    var college=$(".college_list").val();
    var start=$(".start_date").val();
    var pass=$(".pass_year").val();
    var percentage=$(".percentage").val();
    var back=$(".backlog").val();
    
    var rowplus=$(   
    "<tr>" +
    "<th><button class='btn btn-danger minusbtn'><i class='fa-solid fa-minus'></i></button></th>" +
    "<th>School</th>" +
    "<th>College</th>" +
    "<th>Start Date</th>" +
    "<th>Pass Year</th>" +
    "<th>Percentage</th>" +
    "<th>Backlogs</th>" +
    "</tr>" +
    
    "<tr>" +
    "<td><button class='btn btn-danger minusbtn'><i class='fa-solid fa-minus'></i></button></td>" +
    "<td>" + school + "</td>" +
    "<td>" + college + "</td>" +
    "<td>" + start + "</td>" +
    "<td>" + pass + "</td>" +
    "<td>" + percentage + "</td>" +
    "<td>" + back + "</td>" +
    "</tr>");
  
    $("#tableBody").append(rowplus);
   
  
 }

//  $(document).on('click', '.minusbtn', function() {
//     // Get the parent row and hide it
//     var rowToRemove = $(this).closest('tr');
//     rowToRemove.hide();

//     // Add a class to the row for identification
//     rowToRemove.addClass('removed-row');

//     // Create a button to show the removed row
//     var showButton = "<button class='btn btn-info showRemoved'>Show Removed Row</button>";

//     // Append the show button to the container (you can adjust the selector as needed)
//     $('#tableBody').append(showButton);
// });

// // Function to handle showing the removed row
// $(document).on('click', '.showRemoved', function() {
//     // Find the removed row with the class and show it
//     $('.removed-row').show();

//     // Remove the show button after showing the row
//     $(this).remove();
// });


//toggle the row while click on plus button
$(document).on('click', '.minusbtn', function() {
   
    var rowToRemove = $(this).closest('tr');
    rowToRemove.hide();
    rowToRemove.addClass('removed-row');

   
});

// Function to handle showing the removed row using the existing "addplus" button
$(document).on('click', '.expandplus', function() {
 
    $('.removed-row').show();
    $('.removed-row').removeClass('removed-row');
});


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

   education();

    
      




    // //add the data------------------------------------------------
    // $(document).on('click','.expandplus',function()
    // {
    //   var school=$(".name_list").val();
    //   var college=$(".college_list").val();
    //   var start=$(".start_date").val();
    //   var pass=$(".pass_year").val();
    //   var percentage=$(".percentage").val();
    //   var back=$(".backlog").val();

    //   var rowplus="<tr><td><button class='btn btn-danger butt'><i class='fa-solid fa-minus'></i></button></td><td>"+school+"</td><td>"+college+"</td><td>"+start+"</td><td>"+pass+"</td><td>"+percentage+"</td><td>"+back+"</td></tr>";
     
    //   $("#tableBody").append(rowplus);
    
    // });
    // $(document).on('click', '.butt', function () {
    //     var rowedit = $(this).closest('tr.toggle-row');
    //     rowedit.toggle();
    //   });



    $(".name_list").val("");
    $(".college_list").val("");
    $(".start_date").val("");
    $(".pass_year").val("");
    $(".percentage").val("");
    $(".backlog").val("");
});





})

