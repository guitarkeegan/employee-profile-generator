// Employee, Manager, Engineer, and Intern classes.
// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){

    }
    getId(){

    }
    getEmail(){

    }
    getRole(){

    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        // does something
        super(getRole);
    }
}

class Engineer extends Employee {
    constructor(name, id, email, githubUsername){
        super(name, id, email);
        this.github = githubUsername;
    }
    getGithub(){

    }
    getRole(){
        // does something
        super(getRole);
    }
}

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){

    }
    getRole(){
        // does something
        super(getRole);
    }
}