interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};
console.log(printTeacher("John", "Doe")); 
console.log(printTeacher("Muthoni", "Mwangi")); 

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  
  [key: string]: any;
}


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log('teacher3:', teacher3);


interface Directors extends Teacher {
  numberOfReports: number;
}


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log('director1:', director1);


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
// Task 4

// Interface describing the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test
const student1 = new StudentClass({ firstName: "Muthoni", lastName: "Mwangi" });
console.log(student1.displayName());
console.log(student1.workOnHomework());

