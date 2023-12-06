var firstStudent = {
    firstName: "Rodgers",
    lastName: "Mogaka",
    age: 9,
    location: "Kitale"
};
var secondStudent = {
    firstName: "Chric",
    lastName: "Kuga",
    age: 24,
    location: "Nairobi"
};
var studentsList = [firstStudent, secondStudent];
var body = document.querySelector('body');
var table = document.createElement('table');
var row = document.createElement('tr');
row.innerHTML = "<tr><th>Firstname</th><th>Location</th></tr>";
table.appendChild(row);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    row.innerHTML = "<td>".concat(student.firstName, "</td><td>").concat(student.location, "</td>");
    table.appendChild(row);
});
body.appendChild(table);
