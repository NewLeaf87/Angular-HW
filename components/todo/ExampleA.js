var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourly, wages) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourly = hourly;
        this.wages = wages;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getLocation = function () {
        return this.zipCode + " " + this.state;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.getHourly = function () {
        return this.hourly;
    };
    Person.prototype.getWages = function () {
        return this.wages;
    };
    return Person;
}());
var me = new Person('larell', 'mcbride', 33, 7042413391, 'nc', 28215, 'dev', "$28/hr", 1120);
var him = new Person('Lennon', 'Mcbride', 18, 7042413392, 'NY', 28217, 'Gamer', '$18/hr', 720);
var her = new Person('Ellie', 'Mcbride', 19, 7042413393, 'NC', 28288, 'Model', '$80/hr', 3200);
document.getElementById("para2").innerHTML = her.getFullName();
document.getElementById("para3").innerHTML = him.getOccupation();
document.getElementById("para4").innerHTML = him.getLocation();
document.getElementById("para5").innerHTML = him.getFullName();
document.getElementById("para6").innerHTML = her.getHourly();
document.getElementById("para7").innerHTML = her.getFullName();
