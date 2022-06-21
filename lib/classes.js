// Employee, Manager, Engineer, and Intern classes.
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

const { moduleExpression } = require("@babel/types");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        // return Manager
        super(getRole);
    }
}

class Engineer extends Employee {
    constructor(name, id, email, githubUsername){
        super(name, id, email);
        this.github = githubUsername;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        // return Engineer
        super(getRole);
    }
}

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        // return Intern
        super(getRole);
    }
}
// node or ES6 exports?
module.exports = {
    Employee: Employee,
    Manager: Manager,
    Engineer: Engineer,
    Intern: Intern
    }

