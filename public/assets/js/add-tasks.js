$("#add-task").on("click", function (event) {
    event.preventDefault();
    //console.log("Testing in add task button")
    addTask();
    function addTask() {
      // make a newAccount obj
      var newTask = {
        task_name: $("#inputTaskName").val().trim(),
      };
  
      // send an AJAX POST-request with jQuery
      $.post("/post-tasks/new", newTask)
        .then(function (data) {
          // log the data we found
          console.log(data);
          // tell the user we're adding a  with an alert window
          alert("Adding Task...");
        });
  
      // empty each input box by replacing the value with an empty string
  
      $("#inputTaskName").val("");
      $("#inputTaskName").val("");
    }
  });

/*
  $("#update-task").on("click", function(event) {
      event.preventDefault();
      completeTask();
      function completeTask() {
        //finish this
      }
    }
*/