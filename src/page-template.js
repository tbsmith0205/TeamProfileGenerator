const completeTeam = (team) => {
  const addManager = (manager) => {
    return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getTitle()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`;
  };
  const employeeListCard = [];

  employeeListCard.push(
    team
      .filter((employee) => employee.getTitle() === "manager")
      .map((manager) => addManager(manager))
  );
  return employeeListCard.join("");
};

module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./assets/style.css" />
      </head>
      <body>
        <div class="container">
        row - container return ${GenerateTeam(team)}
        row
        </div>
      </body>
    </html>`;
};
