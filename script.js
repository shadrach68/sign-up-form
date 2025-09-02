const button = document.getElementById("button");
const input = document.getElementById("input");
const password = document.getElementById("inppass");
const email = document.getElementById("inpemail");
const label = document.getElementById("sign-up");
const forgBtn = document.getElementById("forg-btn")
button.addEventListener("click", changebutton);
function changebutton(){
    input.style.border = "2px solid blue"
    password.style.border = "2px solid blue";
    email.style.border = "2px solid blue";
    button.style.backgroundColor = "green";
    label.style.textShadow = "0 0 10px blue";
    forgBtn.style.textShadow = "0 0 10px blue";
}
button.addEventListener("click", hover);
function hover(){
    button.style.boxShadow = "0 0 10px blue";
}

function credentials(){
    const email = document.getElementById("inpemail").value;
    const password = document.getElementById("inppass").value;
    const input = document.getElementById("input").value;

    console.log("The username entered: ", input);
    console.log("The password entered: ", password);
    console.log("The email entered: ", email);
}