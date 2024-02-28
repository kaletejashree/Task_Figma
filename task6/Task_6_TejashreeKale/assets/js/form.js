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



/*common button*/
function submitAndDisplayInfo() {
  
    submitEducationInfo();
    displayInfo();
   /* var jsonData = JSON.stringify(formData, null, 2);
    document.getElementById('displayData').innerHTML = '<pre>' + jsonData + '</pre>';*/
  }
/*educational data*/
  function submitEducationInfo() {
    var tableData = [];
         
    $("#educationTable tbody tr").each(function(index, row){
        var rowData = {};
        rowData["#"] = $(row).find("th").text();
        rowData["Degree/Board"] = $(row).find("input[name='boardname[]']").val();
        rowData["School/College"] = $(row).find("input[name='Collegename[]']").val();
        rowData["Start Date"] = $(row).find("input[name='startDate[]']").val();
        rowData["Passout Year"] = $(row).find("input[name='Passyear[]']").val();
        rowData["Percentage"] = $(row).find("input[name='percentage[]']").val();
        rowData["Backlogs"] = $(row).find("input[name='backlogs[]']").val();
        tableData.push(rowData);
    });

    // Display the extracted data below the table
    var displayHtml = "<h3>Educational Data:</h3>";
  displayHtml += "<ul>";
    tableData.forEach(function(data){
        displayHtml += "<li>";
        displayHtml += "<strong>#:</strong> " + data["#"] +"<br>";
        displayHtml += "<strong>Degree/Board:  </strong> " + data["Degree/Board"] + ", "+"<br>";
        displayHtml += "<strong>School/College:  </strong> " + data["School/College"] + ", "+"<br>";
        displayHtml += "<strong>Start Date:  </strong> " + data["Start Date"] + ", "+"<br>";
        displayHtml += "<strong>Passout Year:  </strong> " + data["Passout Year"] + ", "+"<br>";
        displayHtml += "<strong>Percentage:  </strong> " + data["Percentage"] + ", "+"<br>";
        displayHtml += "<strong>Backlogs:  </strong> " + data["Backlogs"]+"<br>"+"<br>";
        displayHtml += "</li>";
    });
    displayHtml += "</ul>";

    $("#displayData").html(displayHtml);
  }

  /*login formdata*/
  
  function displayInfo() {
    var fname=document.getElementById("firstName").value;
    var lname=document.getElementById("lastName").value;
    var BirthDate=document.getElementById("BirthDate").value;
    var Email=document.getElementById("email").value;
    var Address=document.getElementById("Address").value;
    var GraduationYear=document.getElementById("GraduationYear").value;

   var displayDiv = document.getElementById('displayInfo');
    displayDiv.innerHTML = '<h3>Student Information:</h3>' +
                           '<p><strong>First Name: </strong>' + fname + '</p>' +
                           '<p><strong>Last Name: </strong>' + lname + '</p>' +
                           '<p><strong>BirthDate: </strong>' + BirthDate + '</p>' +
                           '<p><strong>Email: </strong>' +  Email + '</p>' +
                           '<p><strong>Address: </strong>' + Address + '</p>' +
                           '<p><strong>Graduation Year: </strong>' + GraduationYear + '</p>';
  }
    



/* using json-----------------

// form.js

function submitAndDisplayInfo() {
    // Your existing form submission logic goes here

    // Collect form data and create a JSON object
    var formData = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        birthDate: $("#BirthDate").val(),
        email: $("#email").val(),
        address: $("#Address").val(),
        graduationYear: $("#GraduationYear").val(),
        education: []
    };

    // Loop through the education table rows and collect data
    $("#educationTable tbody tr").each(function () {
        var educationData = {
            boardName: $(this).find("input[name='boardname[]']").val(),
            collegeName: $(this).find("input[name='Collegename[]']").val(),
            startDate: $(this).find("input[name='startDate[]']").val(),
            passYear: $(this).find("input[name='Passyear[]']").val(),
            percentage: $(this).find("input[name='percentage[]']").val(),
            backlogs: $(this).find("input[name='backlogs[]']").val()
        };

        // Add education data to the formData
        formData.education.push(educationData);
    });

    // Display the JSON data in the 'displayData' div
    $("#displayData").html("<h2>Form Data in JSON:</h2><pre>" + JSON.stringify(formData, null, 2) + "</pre>");

    // Optional: You can also display the data in a table format
    displayDataInTable(formData);
}

function displayDataInTable(formData) {
    // Clear existing table content
    $("#displayData").append("<h2>Form Data in Table Format:</h2><table class='table'><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody>");

    // Display each field in the table
    for (var key in formData) {
        if (key === "education") {
            // Display education data in a nested table
            $("#displayData").append("<tr><td colspan='2'><h4>Education</h4></td></tr>");
            for (var i = 0; i < formData.education.length; i++) {
                $("#displayData").append("<tr><td colspan='2'><table class='table table-bordered'><tbody>");
                for (var eduKey in formData.education[i]) {
                    $("#displayData").append("<tr><td>" + eduKey + "</td><td>" + formData.education[i][eduKey] + "</td></tr>");
                }
                $("#displayData").append("</tbody></table></td></tr>");
            }
        } else {
            // Display other form fields in the table
            $("#displayData").append("<tr><td>" + key + "</td><td>" + formData[key] + "</td></tr>");
        }
    }

    // Close the table
    $("#displayData").append("</tbody></table>");
}

}*/
