const form = document.getElementsById("form-claim")
const firstName = document.getElementById("fname")
const lastName = document.getElementById("lname")
const email = document.getElementById('email')
const password = document.getElementById('pass')


form.addEventListener("submit",function(event) {
    event.preventDefault();

    if(firstName.value ==="") {
        alert("first name is required");
    } else if (lastName.value ==="") {
        alert("last name is required");
    } else if (email.value ==="") {
        alert("Email is required");
    } else if (password.value ==="") {
        alert("Password is required");
    } else {
        alert("Form successfully submited");
    }

});







