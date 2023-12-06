interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const firstStudent: Student = {
  firstName: "Charlie",
  lastName: "Osoti",
  age: 54,
  location: "Kisumu"
}

const secondStudent: Student = {
  firstName: "Victor",
  lastName: "Kulundeng",
  age: 24,
  location: "Nairobi"
}

const studentsList: Array<Student> = [firstStudent, secondStudent];

const body: HTMLBodyElement = document.querySelector('body');
const table: HTMLTableElement = document.createElement('table');
const row: HTMLTableRowElement = document.createElement('tr');

row.innerHTML = `<tr><th>Firstname</th><th>Location</th></tr>`;
table.appendChild(row);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

body.appendChild(table);
