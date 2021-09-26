var form = document.querySelector("form");

var input = document.querySelector("input");

var err = document.querySelector(".err");

form.addEventListener("submit", function(event){
    event.preventDefault()


    if (input.lenght < 0) {

    } else {
        err.innerHTML = "Thanks for your comment!!";
    }

})