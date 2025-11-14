// task_1/js/main.ts

// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // allow arbitrary extra properties (like contract)
  [key: string]: any;
}

// Example teacher object (from previous task)
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log('teacher3:', teacher3);

// Directors interface extends Teacher and requires numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('director1:', director1);

// Utility: pretty-print to page for quick visual verification
function prettyPrint(label: string, obj: object) {
  const heading = document.createElement('h3');
  heading.textContent = label;
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(obj, null, 2);
  document.body.appendChild(heading);
  document.body.appendChild(pre);
}

prettyPrint('Teacher 3', teacher3);
prettyPrint('Director 1', director1);

// Note: `readonly` is enforced at compile-time. The following line would cause a TS error:
// director1.firstName = 'SomeoneElse'; // Error: Cannot assign to 'firstName' because it is a read-only property.
