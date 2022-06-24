
// create the html template and pass in the employee cards
function htmlTemplate(arr) {
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
  
  ${employeeCards(arr)}
  
  </div>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </body>
  </html>`
}
// arr is the employees array. It will create cards based on role
function employeeCards(arr) {
  let template = ""

  arr.forEach(employee => {
    if (employee.getRole() == "Manager") {
      template += `
      <div class="card ${employee.getRole()} col-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getName()}</h5>
        <h6 class="card-subtitle mb-2">${employee.getRole()}</h6>
        <p class="card-text">Office # ${employee.getOfficeNumber()}</p>
        <a href="mailto:${employee.getEmail()}" class="card-link">email</a>
        
      </div>
    </div>
      `
    } else if (employee.getRole() == "Engineer") {
      template +=`
      <div class="card ${employee.getRole()} col-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getName()}</h5>
        <h6 class="card-subtitle mb-2">${employee.getRole()}</h6>
        <p class="card-text">Gihub <a target="_blank" rel="noopener noreferrer" href="https://github.com/${employee.getGithub()}" class="card-link">${employee.getGithub()}</a></p>
        <a href="mailto:${employee.getEmail()}" class="card-link">email</a>
        
      </div>
    </div>
      `
    } else {
      template +=`
      <div class="card ${employee.getRole()} col-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getName()}</h5>
        <h6 class="card-subtitle mb-2">${employee.getRole()}</h6>
        <p class="card-text">School ${employee.getSchool()}</p>
        <a href="mailto:${employee.getEmail()}" class="card-link">email</a>
        
      </div>
    </div>
      `
    }
  })

  return template
}
module.exports = {
    htmlTemplate
};