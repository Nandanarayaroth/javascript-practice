

let over = ""
let propty = ""
fetch("data.json")
.then(response => response.json())
.then(data => {
    data.forEach (item => {
        over += `<img src=${item.pic}>`
        propty += `<p>${item.propertiece.name}<br> ${item.propertiece.rating} <br> ${item.propertiece.RAM}<br>${item.propertiece.Storage}<br>${item.propertiece.Camera}<br>${item.propertiece.Display}<br>${item.propertiece.Processor}<br>${item.propertiece.Battery}`
    })
    document.getElementById('justone').innerHTML = over
    document.getElementById('justwo').innerHTML = propty
})
