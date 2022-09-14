document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
});

function onSubmit() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log({ email, password });

    const feedback = document.getElementById("feedback")

  if (email.length <= 0) {
    alert("Email is required");
    return;
  }

  if (password.length <= 0) {
    alert("Password is required");
    return;
  }

  feedback.style.display = "block";
  document.getElementById("login").reset();
}

