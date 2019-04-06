console.log("Accounts.js loaded");


// ADD    ****************
$("#add-account").on("click", function (event) {
  event.preventDefault();

  console.log("Entere'd add account button.")
  // make a newAccount obj
  var newAccount = {
    email: $("#inputEmail").val().trim(),
    account_key: $("#inputPassword").val().trim()

  };

  if (newAccount.email.length > 0 && newAccount.account_key.length > 0) {
    $.ajax({
      type: "post",
      url: "/signup",
      data: newAccount
    }).then(function (data) {
      window.location.href = "/"
    });
  }else {
    console.log("**Please fill out entire form**");
    $("#create-err-msg").empty("").text("**Please fill out entire form**");
  }
});