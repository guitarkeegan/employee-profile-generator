function createHtmlTop(){

    return `
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Employee Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>
    <h1 class='mx-auto'>Team Cards</h1>
    <div class='container row'>
      <div class='col-md-4'>
        
      </div>
    </div>
    `
}

function createCard(employee){
    let specialCharactaristic = "";
    let githubProfile = "http://github.com/";
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
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
    <p class="card-text">${specialCharactaristic}</p>
    <a href="${employee.getEmail()}" class="card-link">email</a>
    <a href="${githubProfile}" class="card-link">${githubUsername}</a>
  </div>
</div>
    `
}

function createHtmlBottom(){
    return `
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
  </html>
    `
}

module.exports = {
    createHtmlTop,
    createCard, 
    createHtmlBottom
};