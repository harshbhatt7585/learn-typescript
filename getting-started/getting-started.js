var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
;
// let user = { firstName: "Harsh", lastName: "Bhatt" };
var user = new Student("Harsh", "H.", "Bhatt");
document.body.textContent = greeter(user);
