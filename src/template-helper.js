function createHtmlTop(){
    
    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Employee Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <div class='container text-center my-3'>
    <h1>Team Cards</h1>
    </div>
    <div class='container-fluid d-flex mt-4 gap-2 justify-content-center flex-wrap'>
    `
}

function createCard(employee){
    let specialCharactaristic = "";
    let githubProfile = "http://github.com/";
    let github;
    let githubUsername = "";
    if (employee.officeNumber){
        specialCharactaristic = "Office # " +  employee.officeNumber;
        githubProfile = "#";
    } else if (employee.github){
        githubProfile += employee.getGithub();
        githubUsername = employee.getGithub();
    } else {
        specialCharactaristic = employee.getSchool();
        githubProfile = "#";
    }
    return `
    <div class="card ${employee.getRole()} col-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getName()}</h5>
    <h6 class="card-subtitle mb-2">${employee.getRole()}</h6>
    <p class="card-text"><a href="${githubProfile}" class="card-link">${githubUsername}</a>${specialCharactaristic}</p>
    <a href="mailto:${employee.getEmail()}" class="card-link">email</a>
    
  </div>
</div>
    `
}

function createHtmlBottom(){
    return  `
    </div>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="./script.js"></script>
    </body>
  </html>
    `
}

module.exports = {
    createHtmlTop,
    createCard, 
    createHtmlBottom
};