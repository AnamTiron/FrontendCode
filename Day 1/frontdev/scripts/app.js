var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table class="table table-condensed table-striped" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualization</th><th>Delete</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td> <td><button type="button" onclick="vizualization()" class="btn btn-default">Vizualization</button></td> <td><button type="button" onclick="deleteRow()" class="btn btn-default">delete</button></td></tr>';
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}



var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    
}
function totalSalary() {
    var total=0; 
    for(var i in employeesList) {

        total= employeesList[i].salary+ total;
        
    }
    console.log(total);
    document.getElementById("salaryTotal").value = total;
}
function deleteEmployee() {
   employeesList.pop();
    showList();

}
function vizualization()
{
// var message=employee.firstName+ " " +employee.lastName +" "+ employee.phone+ " "+ employee.salary;
alert();

}
function deleteRow(){
    var table = document.getElementById(myTable);
    var rowCount = table.rows.length;



}