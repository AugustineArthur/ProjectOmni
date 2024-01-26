document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    window.open("http://127.0.0.1:5501/login.html", "_self");
  });
});
