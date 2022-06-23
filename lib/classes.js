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
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
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
        return "Engineer";
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
        return "Intern";
    }
}

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}

