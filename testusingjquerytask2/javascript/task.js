$(document).ready(function(){

   $("#dataTable").DataTable();
   

//submit button
$("#submitbtn").click(function (e) {
    e.preventDefault();
});


//while click on the add button row should added in educational table
    var counter=1;
    $("#add").click(function(){
        var newRow = $("<tr>");
      
            newRow.append("<td><input type='number'  name='number[]' placeholder='1' class='form-control number' /></td>");
            newRow.append("<td><input type='text'  name='Item[]' placeholder='cold coffee' class='form-control Item' /></td>");
            newRow.append("<td><input type='text' name='itemdesc[]' placeholder='cold coffee' class='form-control itemdesc' /></td>");
            newRow.append("<td><input type='text' name='foodtype[]' placeholder='veg' class='form-control foodtype' /></td>");
            newRow.append("<td><input type='number' name='Iprice[]' placeholder='88' class='form-control Iprice' /></td>");
            newRow.append("<td><input type='number' name='discount[]' placeholder='15' class='form-control discount' /></td>");
            newRow.append("<td><input type='number' name='discountprice[]' placeholder='120' class='form-control discountprice' /></td>");
            newRow.append("<td><input type='text' name='active[]' placeholder='yes' class='form-control active' /></td>");

        
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
    var categoryname=$("#categoryname").val();
    var categorydesc=$("#categorydesc").val();
    var active=$("#active").val();
    var launchdate=$("#launchdate").val();
 

    var newRow = $("<tr><td><button class='btn btn-success rounded-circle expandplus'><i class='fa-solid fa-plus'></i></button></td><td>" + categoryname + "</td><td>" + categorydesc + "</td><td>" + active + "</td><td>" + launchdate + "</td><td><button class='btn btn-danger butt'>Remove</button></td><td><button class='btn btn-primary btnclick'>Edit</button></td></tr>");

        // Append the new row to the table body
        $("#tableBody").append(newRow);

    
      

       

        //Clear form fields after submission
        $("#categoryname").val("");
        $("#categorydesc").val("");
        $("#active").val("");
        $("#launchdate").val("");
        




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
                let categorynameCell = row.find("td").eq(1);
                let  categorydescCell = row.find("td").eq(2);
                let activeCell = row.find("td").eq(3);
                let launchdateCell = row.find("td").eq(4);
               
            
                // Prompt the user to enter updated values 
                let firstname = prompt("Enter the updated categorynameCell:", categorynameCell.text());
                let lastname = prompt("Enter the updated categorydescCell:", categorydescCell.text());
                let dateofbirth = prompt("Enter the updated activeCell:", activeCell.text());
                let email = prompt("Enter the updated launchdateCell:", launchdateCell.text());
               
                // Update the cell contents with the new values 
                ex.text();
                categorynameCell.text(firstname);
                categorydescCell.text(lastname);
                activeCell.text(dateofbirth);
                launchdateCell.text(email);
               
            
        });

        education()

});
function education(){

    
    var number=$(".number").val();
    var Item=$(".Item").val();
    var itemdesc=$(".itemdesc").val();
    var foodtype=$(".foodtype").val();
    var Iprice=$(".Iprice").val();
    var discount=$(".discount").val();
    var discountprice=$(".discountprice").val();
    var active=$(".active").val();
    

    
    var rowplus=$(   
    "<tr>" +
    "<th><button class='btn btn-danger minusbtn'><i class='fa-solid fa-minus'></i></button></th>" +
    "<th>Number</th>" +
    "<th>Item</th>" +
    "<th>Item description</th>" +
    "<th>Food Type</th>" +
    "<th>Item Price</th>" +
    "<th>discount</th>" +
    "<th>discount price</th>" +
    "<th>active</th>" +
    "</tr>" +
    
    "<tr>" +
    "<td><button class='btn btn-danger minusbtn'><i class='fa-solid fa-minus'></i></button></td>" +
    "<td>" + number + "</td>" +
    "<td>" + Item + "</td>" +
    "<td>" + itemdesc + "</td>" +
    "<td>" + foodtype + "</td>" +
    "<td>" + Iprice + "</td>" +
    "<td>" + discount + "</td>" +
    "<td>" + discountprice + "</td>" +
    "<td>" + active + "</td>" +
    "</tr>");
  
    $("#tableBody").append(rowplus);
   
  
 }


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

});