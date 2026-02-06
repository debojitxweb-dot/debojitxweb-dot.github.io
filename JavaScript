function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;
  let response = document.getElementById("response");

  if (name === "" || email === "" || msg === "") {
    response.innerText = "Please fill all fields ❌";
    response.style.color = "red";
  } else {
    response.innerText = "Message sent successfully ✅";
    response.style.color = "lightgreen";
  }
}
