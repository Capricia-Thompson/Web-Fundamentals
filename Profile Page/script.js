function changeName() {
    document.querySelector(".username").innerText = "Capricia Thompson"
}

function acceptUser(element) {
    document.querySelector(element).remove()
    document.querySelector(".requests").innerText--
    document.querySelector(".connects").innerText++

}

function rejectUser(element) {
    document.querySelector(element).remove()
    document.querySelector(".requests").innerText--
}