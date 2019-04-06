console.log("Home.js loaded");



// when user clicks search button
$("#search-task").on("click", function (event) {
  event.preventDefault();

  $("#search-task").animateCss('pulse', function () {
    //callback (things to do after all animations are done)
    window.location.href = "/dashboard"
  });

});


$("#post-task").on("click", function (event) {
  event.preventDefault();

  $("#post-task").animateCss('pulse', function () {
    window.location.href = "/post-tasks/new"
  });
});


$("#sign-up").on("click", function (event) {
  event.preventDefault();

  $("#sign-up").animateCss('pulse', function () {
    window.location.href = "/signup"
  });
});


$("#sign-in-modal").on("click", function (event) {
  event.preventDefault();

  $("#account-info").modal("show");
});

$("#go-home").on("click", function (event) {
  event.preventDefault();
  console.log("hello")
  $("#go-home").animateCss('pulse', function () {
    window.location.href = "/"
  });
});

$("#sign-in").on("click", function (event) {
  event.preventDefault();

  var user = {
    email: $("#email").val().trim(),
    account_key: $("#account_password").val().trim()
  }
  
  $.post("/login", user, function(results){
    if(results){
       $(location).attr('href', '/accounts/view')
     }else {
      $("#account-info").modal("close");
      alert("oops something went wrong, please try again!");

     }
   
  })

});
