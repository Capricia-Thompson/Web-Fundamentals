function login(element) {
    if (element.innerText === "Login") {
        return element.innerText = "Logout"
    } else {
        return element.innerText = "Login"
    }
}

function addDef(element) {
    element.remove();
}