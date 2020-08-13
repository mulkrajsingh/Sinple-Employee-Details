/*
This application is to show the CRUD operation on employee details using  HTML, Javascript and CSS.
Browser storage is used to store data.
*/


hideId();

let empTable = document.getElementById('empTable');
let updateData = false;
let updateIndex;
let updateId;

let numOfRows = empTable.rows.length;

//Hide the employee details table when no data is there.
if (numOfRows <= 1) {
    empTable.style.display = 'none'
}

//Add and Update the employee details.
function addUpdate() {

    let empName = document.getElementById('name').value;
    let empAge = document.getElementById('age').value;
    let empAddress = document.getElementById('address').value;

    //check if all the employee details is entered
    if (empName.length == 0 || empAge.length == 0 || isNaN(empAge) || empAddress.length == 0) {
        if (isNaN(empAge)) {
            alert('Age must be a number');
        } else {
            alert('Please enter all the details');
        }
    } else {
        //Add operation
        if (!updateData) {

            let numOfRows;
            let newRow;
            let empId = new Date().getTime();

            numOfRows = empTable.rows.length;
            newRow = empTable.insertRow(numOfRows);

            newRow.insertCell(0).innerHTML = empId;
            newRow.insertCell(1).innerHTML = empName;
            newRow.insertCell(2).innerHTML = empAge;
            newRow.insertCell(3).innerHTML = empAddress;

            newRow.insertCell(4).innerHTML = `<Button id="delete" 
    onClick="deleteRow(this)">Delete</Button> &nbsp <button id="update" 
    onClick="updateRow(this)">Update</button` ;

            numOfRows = empTable.rows.length;
            //show employee details table if employee data is present.
            if (numOfRows > 1) {
                empTable.style.display = 'block'
            }

        } else { //Update operation.
            let cellData = empTable.rows[updateIndex].cells;
            cellData[0].innerHTML = updateId;
            cellData[1].innerHTML = empName;
            cellData[2].innerHTML = empAge;
            cellData[3].innerHTML = empAddress;

            document.getElementById('add').innerHTML = 'Add';
            updateData = false;

            hideId();
        }
        reset();
    }
}

//Delete the Employee details.
function deleteRow(thisRow) {
    let delRow = thisRow.parentNode.parentNode.rowIndex;
    empTable.deleteRow(delRow);
    let numOfRows = empTable.rows.length;

    //Hide employee details table if no data available.
    if (numOfRows <= 1) {
        empTable.style.display = 'none'
    }
}

//Update the employee details.
function updateRow(thisRow) {

    showId();

    updateData = true;
    updateIndex = thisRow.parentNode.parentNode.rowIndex;
    updateId = empTable.rows[updateIndex].cells[0].innerHTML;
    document.getElementById('add').innerHTML = 'Update';
    document.getElementById('id').value = updateId;
    document.getElementById('name').value = empTable.rows[updateIndex].cells[1].innerHTML;
    document.getElementById('age').value = empTable.rows[updateIndex].cells[2].innerHTML;
    document.getElementById('address').value = empTable.rows[updateIndex].cells[3].innerHTML;
}

//Reset the input fields.
function reset() {

    document.getElementById('id').value = null;
    document.getElementById('name').value = null;
    document.getElementById('age').value = null;
    document.getElementById('address').value = null;
}

//Show the employee ID when update button is clicked.
function showId() {
    document.getElementById("emp-id").style.display = 'block';
    document.getElementById("enter-id").style.display = 'block';
}

//Hide the employee ID after Update operation is done.
function hideId() {
    document.getElementById("emp-id").style.display = 'none';
    document.getElementById("enter-id").style.display = 'none';
}