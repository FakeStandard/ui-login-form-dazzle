const inputs = document.querySelectorAll('.input-group input')

function addFocus() {
    this.parentNode.parentNode.classList.add("focus")
}

function removeFocus() {
    if (this.value == "") {
        this.parentNode.parentNode.classList.remove("focus")
    }
}

inputs.forEach(i => {
    i.addEventListener("focus", addFocus)
    i.addEventListener("blur", removeFocus)
})