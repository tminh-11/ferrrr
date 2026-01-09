const x = 5;
console.log(`The value of x is: ${x}`);
if (x >= 0) {
    console.log(`${x} is a positive number.`);
} else{
    console.log(`${x} is a negative number.`)
}

const result = (x >= 0) ? `${x} is positive.` : `${x} is negative.`;
console.log(result);

const greet = (name, age = 18) => {
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet("Alice", 18));
console.log(greet("Bob"));

const square = n => n * n;
console.log(`The square of ${x} is: ${square(x)}`);

const printStudent = (student) => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
}
const student1 = {name: "Charlie", age: 20, grade: "A"};
printStudent(student1);

const students = [
    { name: "Charlie", age: 20, grade: "A" },
    { name: "Alice", age: 19, grade: "B" },
    { name: "Bob", age: 21, grade: "A-" },
    { name: "David", age: 22, grade: "C+" },
    { name: "Emma", age: 20, grade: "B+" },
    { name: "Frank", age: 23, grade: "B" },
    { name: "Grace", age: 18, grade: "A" },
    { name: "Helen", age: 21, grade: "A+" },
    { name: "Ian", age: 20, grade: "C" },
    { name: "Jane", age: 19, grade: "B-" }
];

// Gọi hàm cho từng student
students.forEach(student => printStudent(student));
students.forEach(student => {
    console.log(`Student Info - Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});
students.map(student => printStudent(student));
students.map(student => {
    console.log(`Student Info - Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});

students.forEach(({ name, age, grade }) => {
    console.log(`Student Info - Name: ${name}, Age: ${age}, Grade: ${grade}`);
});

students.map(({ name, age, grade }) =>
    console.log(`Student Info - Name: ${name}, Age: ${age}, Grade: ${grade}`)
);

const [StudentA, StudentB, ...restStudents] = students;
console.log("Student A:", StudentA);
console.log("Student B:", StudentB);
console.log("Remaining Students:", restStudents);

restStudents.map(s => console.log(`Student Info - Name: ${s.name}, Age: ${s.age}, Grade: ${s.grade}`));

const newStudent = { name: "Kevin", age: 22, grade: "A" };

const updatedRestStudents = [...restStudents, newStudent];

console.log("Updated Rest Students:");
updatedRestStudents.forEach(({ name, age, grade }) => {
    console.log(`Student Info - Name: ${name}, Age: ${age}, Grade: ${grade}`);
});