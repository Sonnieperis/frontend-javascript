// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Kimani",
  age: 22,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Brian",
  lastName: "Otieno",
  age: 25,
  location: "Mombasa"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table with first name and location
const table = document.createElement('table');
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
const header2 = document.createElement('th');
header1.textContent = 'First Name';
header2.textContent = 'Location';
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
