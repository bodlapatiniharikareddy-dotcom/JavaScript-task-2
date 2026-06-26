// Task 1 - User Introduction


let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");

console.log("My name is " + userName);
console.log("I am " + userAge + " years old");


// Task 2 - Degree Confirmation


let degreeCompleted = confirm("Did you complete degree?");

if (degreeCompleted === true) {
    console.log("Degree Completed");
} else {
    console.log("Degree Not Completed");
}



// Task 3 - Mobile Price


let mobilePrice = 15000;
let discount = 2000;

let finalPrice = mobilePrice - discount;

console.log("Final Price : " + finalPrice);



// Task 4 - Age Eligibility


let voterAge = Number(prompt("Enter your age to check voting eligibility:"));

if (voterAge >= 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}



// Task 5 - Shopping Cart

let cart = [
    "Rice",
    "Milk",
    "Sugar",
    "Tea Powder"
];

console.log("First Product : " + cart[0]);
console.log("Last Product : " + cart[cart.length - 1]);
console.log("Total Products : " + cart.length);


// Task 6 - Student Details


let student = {
    name: "Naveen",
    age: 18,
    course: "MERN"
};

console.log("Student Name : " + student.name);
console.log("Student Course : " + student.course);


// Task 7 - Employee Salary Calculator

let salary = 25000;
let bonus = 5000;

let totalSalary = salary + bonus;

console.log("Total Salary : " + totalSalary);


// Task 8 - Website Login Check

let correctUsername = "admin";
let correctPassword = "1234";

let enteredUsername = prompt("Enter username:");
let enteredPassword = prompt("Enter password:");

if (
    enteredUsername === correctUsername &&
    enteredPassword === correctPassword
) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}



// Task 9 - Food Delivery App

let foodPrice = 350;
let deliveryCharge = 50;

let totalBill = foodPrice + deliveryCharge;
let gst = totalBill * 5 / 100;
let grandTotal = totalBill + gst;

console.log("Food Price : " + foodPrice);
console.log("Delivery Charge : " + deliveryCharge);
console.log("Total Bill : " + totalBill);
console.log("GST 5% : " + gst);
console.log("Grand Total : " + grandTotal);


// Task 10 - E-Commerce Product Details

let product = {
    name: "Laptop",
    price: 50000,
    brand: "ASUS",
    stock: true
};

console.log("Product Name : " + product.name);
console.log("Brand : " + product.brand);
console.log("Price : " + product.price);

if (product.stock === true) {
    console.log("Stock Available : Yes");
} else {
    console.log("Stock Available : No");
}


// Task 11 - Attendance System

let isPresent = confirm("Present?");

if (isPresent === true) {
    console.log("Attendance Marked");
} else {
    console.log("Absent");
}


// Task 12 - Banking Application

let currentBalance = Number(prompt("Enter your current balance:"));
let withdrawAmount = Number(prompt("Enter the withdrawal amount:"));

if (withdrawAmount <= currentBalance) {
    let remainingBalance = currentBalance - withdrawAmount;

    console.log("Transaction Successful");
    console.log("Remaining Balance : " + remainingBalance);
} else {
    console.log("Insufficient Balance");
}



// Mini Employee Management System

let employee = {
    name: prompt("Enter employee name:"),
    age: Number(prompt("Enter employee age:")),
    department: prompt("Enter employee department:"),
    salary: Number(prompt("Enter employee monthly salary:"))
};

let annualSalary = employee.salary * 12;

console.log("Employee Name : " + employee.name);
console.log("Employee Age : " + employee.age);
console.log("Department : " + employee.department);
console.log("Annual Salary : " + annualSalary);

if (employee.salary > 30000) {
    console.log("Senior Employee");
} else {
    console.log("Junior Employee");
}