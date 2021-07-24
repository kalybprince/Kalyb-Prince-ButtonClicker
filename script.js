function hide(element) {
    element.remove();
}

function logInOut(element) {
    var myText = element.innerText
    if (myText == "Login") {
        element.innerText = "Log out";
    } else {
        element.innerText = "Login";
    }
}

function likeAlert(element) {
    alert("Ninja was liked!");
}

function likeUpdater(element) {
    var oldNum = parseInt(element.innerText);
    var newNum = (oldNum += 1);
    element.innerText = newNum + " likes";
}