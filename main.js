var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");
var scheduledate = document.getElementById("btnScheduleDate");

scheduledate.addEventListener("click", function () {
  
});

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/Edge-Hill-Univeristy-Web/CIS2169-Academic-Management-System/main/module-'+ pageCounter +'.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    // Parses data from json server
    var ourData = JSON.parse(ourRequest.responseText);

    // Create a new module object
    var newModule = {
      "module_code": "NEW-MODULE",
      "module_name": "New Module",
      "module_volume": "2000 words",
      "assignments": [
        {
          "assignment_name": "CW1",
          "description": "Create a new thing",
          "learning_outcomes": [
            "LO3",
            "LO4"
          ],
          "weight": 50
        },
        {
          "assignment_name": "CW2",
          "description": "Create another new thing",
          "learning_outcomes": [
            "LO4",
            "LO5"
          ],
          "weight": 50
        }
      ]
    };

    // Add the new module to the modules array
    ourData.modules.push(newModule);

    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3){
    //btn.classList.add("hide-me");
    btn.disabled = true;
  }
});

function renderHTML(data){
  // Render the data as before
}
