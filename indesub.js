let jsonData

window.addEventListener("load", () => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => jsonData = data)
    .catch(err => console.log(err))
});

let inpuEl = document.querySelector("input")
let buttonEl = document.querySelector("button")
let headingEl = document.querySelector("h2")

buttonEl.addEventListener("click", () => {
    let value = inpuEl.value
    let id = Number(value)
    let user = jsonData.find(item => item.id == id)
    if(user)  headingEl.textContent = user.name
    else headingEl.textContent = "Not found"
})