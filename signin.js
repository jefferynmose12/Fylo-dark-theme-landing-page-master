var form = document.querySelector("form");

var email = document.querySelector(".email");

var password = document.querySelector(".password");

var err1 = document.querySelector(".err1");

var err2 = document.querySelector(".err2");

form.addEventListener("submit", function(event) {
    event.preventDefault()

    if (email.lenght > 0) {
        
    } else {
        err1.innerHTML = "provide a valid email!!";
    }

    if (password > 0) {

    } else {
        err2.innerHTML = "incorrect password!!";
    }
});