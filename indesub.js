// let jsonData

// window.addEventListener("load", () => {
//     fetch("data.json")
//     .then(response => response.json())
//     .then(data => jsonData = data)
//     .catch(err => console.log(err))
// });

// let inpuEl = document.querySelector("input")
// let buttonEl = document.querySelector("button")
// let headingEl = document.querySelector("h2")

// buttonEl.addEventListener("click", () => {
//     let value = inpuEl.value
//     let id = Number(value)
//     let user = jsonData.find(item => item.id == id)
//     if(user)  headingEl.textContent = user.name
//     else headingEl.textContent = "Not found"
// })


// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     let conatiner = document.getElementById("products")
//     conatiner.innerHTML = ""

//     data.forEach(item => {
//         let card = `
//             <div class="card">
//                 <img src ="${item.pic}" alt="${item.propertiece.name}">
//                 <h2>${item.propertiece.name}</h2>
//                 <p>Rating: </strong> ${item.propertiece.rating} ⭐</p>
//                 <p><strong>RAM:</strong> ${item.propertiece.RAM}</p>
//                 <p><strong>Strong:</strong> ${item.propertiece.Strong}</p>
//                 <p><strong>Camera:</strong> ${item.propertiece.camera}</p>
//                 <p><strong>Display:</strong> ${item.propertiece.Display}</p>
//                 <p><strong>Battery:</strong> ${item.propertiece.Battery}</p>
//             </div>
//         `;
//         conatiner.innerHTML += card
//     })
// })

// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     data.forEach(item => {
//         let card = `
//             <tr class = "card">
//             <td> ${item.name}</td>
//             <td> ${item.email}</td>
//             <td> ${item.phone}</td>
//             <tr>
//         `;
//         conatiner.innerHTML += card
//     })
// })

// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     data.forEach(item => {
//         let card = `
//             <li><h3> ${item.title}</h3></li>
//             <li><h5> ${item.author}</h5></li>
//             <li><h6> ${item.year}</h6></li>
//         `;
        
//         conatiner.innerHTML += card
//     })
// })

// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML= ""
//     data.forEach (item => {
//         let content = `
//             <tr>
//                 <td> ${item.name}</td>
//                 <td> ${item.class}</td>
//                 <td> ${item.subject.AD}</td>
//                 <td> ${item.subject.DBMS}</td>
//                 <td> ${item.subject.CN}</td>
//             </tr>
//         `;
//         conatiner.innerHTML += content
//     })
// })


// let movieData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     movieData = data
//     displayMovie(movieData)
// })

// function displayMovie(movies) {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     movies.forEach(movie => {
//         let card = `
//             <div class="card"> 
//                 <h2> ${movie.name}</h2>
//                 <p><strong>Rating: </strong> ${movie.rating}</p>
                
//             </div>
//         `;
//         conatiner.innerHTML += card
//     })
// }

// function sortByRating() {
//     let sorted = [...movieData].sort((a,b) => b.rating - a.rating)
//     displayMovie(sorted)
// }


// let movieData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     movieData = data
//     displayData(movieData)
// })

// function displayData(movies){
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""
//     movies.forEach(movie => {
//         let card = `
//         <div>
//             <h3> ${movie.name}</h3>
//             <h4><strong>Rating: <strong> ${movie.rating}</h4>
//             <h5> ${movie.year}</h5>
//         </div>
//     `;
//         conatiner.innerHTML += card
//     })
    
// }

// function sortByRating() {
//     let sorted = [...movieData].sort((a,b) => b.rating - a.rating)
//     displayData(sorted)
// }

// let mobileData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     mobileData = data
//     displayData(mobileData)
// })

// function displayData(phones) {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""
//     phones.forEach(mobile => {
//         let card = `
//             <div>
//                 <h5> ${mobile.name}</h5>
//                 <h6> ${mobile.price}</h6>
//             </div>
//         `;
//         conatiner.innerHTML += card
//     })
// }

// function sortByRating() {
//     let arr = [...mobileData].sort((a,b) => b.price - a.price )
//     displayData(arr)
// }

// let productData = []

// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     productData = data
// })

// function displayData(products) {
//     let container = document.getElementById("container")
//     container.innerHTML = "";

//     products.forEach(item => {
//         let card = `
//             <div class="card">
//                 <h4>${item.name}</h4>
//                 <p><strong>Category: </strong>${item.category}</p>
//                 <p><strong>Price: </strong>${item.price}</p>
//             </div>
//         `;
//         container.innerHTML += card
//     })
// }

// function filterCat(category){
//     if(category === "All"){
//         displayData(productData)
//     }
//     else{
//         let filterd = productData.filter(item => item.category === category)
//         displayData(filterd)
//     }
// }

// let productData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     productData = data
    
// })

// function Display(products){
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""
//     products.forEach(item => {
//         let card = `
//             <div class="card"> 
//                 <h5>${item.name}</h5>
//                 <p>Category: ${item.category}</p>
//                 <p>Price: ${item.price} </p>
//             </div>
//         `;
//         conatiner.innerHTML += card
//     })
// }

// function filtercat(category) {
//     if(category === 'All'){
//         Display(productData)
//     }
//     else{
//         let filtered = productData.filter(item => item.category === category)
//         Display(filtered)
//     }
// }

// let productData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     productData = data

// })

// function Display(products){
//     let container = document.getElementById("container")
//     container.innerHTML = ""
//     products.forEach(item => {
//         let card = `
//             <div class="card">
//                 <p><strong> ${item.name}</strong></p>
//                 <p> ${item.color}</p>
//                 <p> ${item.price}</p>
//             </div>
//         `
//         container.innerHTML += card
//     })
// }

// function filterCat(category) {
//     if(category === "All"){
//         Display(productData)
//     }
//     else if(category === "Churithar"){
//         let filtred = productData.filter(item => item.name === 'Churithar')
//         Display(filtred)
//     }
//     else if(category === 'Croptop'){
//         let filter = productData.filter(item => item.name === 'Croptop')
//         Display(filter)
//     }
//     else if(category === 'Skirt'){
//         let filtered = productData.filter(item => item.name === 'Skirt')
//         Display(filtered)
//     }
// }


// let employeeData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     employeeData = data
//     displayEmployees(employeeData)
// })

// function displayEmployees(emplyees){
//     let conatiner =document.getElementById("container")
//     conatiner.innerHTML = ""

//     emplyees.forEach(emp => {
//         let card = `
//             <div class="card">
//                 <h4>${emp.name}</h4>
//                 <p><strong>Department: ${emp.department}</strong></p>
//             </div>
//         `
//         conatiner.innerHTML += card
//     })
// }

// function searchEmployees() {
//     let query = document.getElementById("searchInput").value.toLowerCase()

//     let filtered = employeeData.filter(emp => 
//         emp.name.toLowerCase().includes(query) ||
//         emp.department.toLowerCase().includes(query)
//     )
//     displayEmployees(filtered)
// }

// let todoData = []
// fetch("indesub.json")
// .then( response => response.json())
// .then(data => {
//     todoData = data
//     displayTodo(todoData)
// })

// function displayTodo(todo){
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     todo.forEach((todo, index) => {
//         let checked = todo.completed ? "checked" : ""
   
//     let item = `
//         <div class="todo-item">
//             <input type="checkbox" id="todo-${index}" ${checked} onchange="toggleTodo(${index})"/>
//             <label for="todo-${index}" class="${todo.completed ? 'completed' : ""}"> 
//                 ${todo.task}
//             </label>
//         </div>
//     `
//     conatiner.innerHTML += item
//     })

// }

// function toggleTodo(index) {
//     todoData[index].completed = !todoData[index].completed
//     displayTodo(todoData)
// }

// let employeeData = []

// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     employeeData = data
//     displayEmployees(employeeData)
// })

// function displayEmployees(employees){
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     employees.forEach(emp => {
//         let card = `
//             <div class="card">
//                 <h4>${emp.name}</h4>
//                 <p><strong>Department:</strong/>${emp.department}</p>
//             </div>
//         `;
//         conatiner.innerHTML += card
//     })
// }

// function filterByDepartment() {
//     let selectedDept = document.getElementById("departmentSelect").value

//     if(selectedDept === "All"){
//         displayEmployees(employeeData)
//     }
//     else{
//         let filterd = employeeData.filter(emp => emp.department === selectedDept)
//         displayEmployees(filterd)
//     }
// }

// let employeeData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     employeeData = data
//     displayEmployees(employeeData)
// })

// function displayEmployees(employees) {
//     let conatiner = document.getElementById('container')
//     conatiner.innerHTML = ""

//     employees.forEach(item => {
//         let card = `
//             <div class="card">
//                 <h4>${item.name}</h4>
//                 <p><strong> Department:</strong>${item.department}</p>
//             </div>
//         `;
//         conatiner.innerHTML += card
//     })
// }

// function filterByDepartment(){
//     let selectedDept = document.getElementById("departmentSelect").value

//     if(selectedDept === "All"){
//         displayEmployees(employeeData)
//     }
//     else{
//         let filtered = employeeData.filter(item => item.department === selectedDept)
//         displayEmployees(filtered)
//     }
// }

// let totalData = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     totalData = data
//     DisplayData(totalData)
// })

// function DisplayData(wheels) {
//     let container = document.getElementById("container")
//     container.innerHTML = ""

//     wheels.forEach(wheel =>{
//         let card = `
//             <div class="imaginary">
//                 <h5> ${wheel.name}</h5>
//                 <h6> ${wheel.wheel}</h6>
//             </div>
//         `;
//         container.innerHTML += card
//     })
// }

// function selectedDept() {
//     let selected = document.getElementById("mainSelect").value
//     if(selected === 'All'){
//         DisplayData(totalData)
//     }
//     else{
//         let filterd = totalData.filter(item => item.wheel === selected)
//         DisplayData(filterd)
//     }
// }

// let totlProduct = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     totlProduct = data
// })

// function filerProduct() {
//     const minPrice = parseFloat(document.getElementById("minPrice").value)
//     const maxPrice = parseFloat(document.getElementById("maxPrice").value)

//     const filterd = totlProduct.filter(product => 
//         product.price >= minPrice && product.price <= maxPrice
//     )
//     const conatiner = document.getElementById("container")
//     conatiner.innerHTML = ''

//     if(filterd.length === 0) {
//         conatiner.innerHTML = "Product not found"
//     }
//     else{
//         filterd.forEach(product => {
//             conatiner.innerHTML += `
//                 <div class="card">
//                     <h4>${product.name}</h4>
//                     <p>Category: ${product.category}</p>
//                     <p>Price: $ ${product.price} </p>
//                 </div>
//             `
//         })
//     }
// }

// let totalMovie = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     totalMovie = data
// })

// function operation() {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""
//     let SelectedYr = Number(document.getElementById("SelectedYr").value)

//     const filterd = totalMovie.filter(movie => 
//         movie.year>= SelectedYr
//     )

//     if(filterd.length === 0){
//         conatiner.innerHTML = "Movie not found"
//     }
//     else{
//        filterd.forEach(yers => {
//         conatiner.innerHTML += `
//             <div class="card">
//                 <h4>${yers.title} </h4>
//                 <h4>${yers.year} </h4>
//                 <h4>${yers.rating} </h4>
//             </div>
//         `
//        })
//     }
// }

// let totalRating = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     totalRating = data
// })

// function operation() {
//     let enterdValue = Number(document.getElementById("ratingEnter").value)
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     let filted = totalRating.filter(item => item.rating >= enterdValue)

//     if(filted.length === 0){
//         conatiner.innerHTML = "Movie not found"
//     }
//     else{
//         filted.forEach(movie => {
//             conatiner.innerHTML += `
//                 <div class="card">
//                     <h4> ${movie.title}</h4>
//                     <h4> ${movie.year}</h4>
//                     <h3> ${movie.rating}</h3>
//                 </div>
//             `
//         })
//     }
// }

// let total = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     total = data
//     Display(total)
// })

// function Display(student){
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     student.forEach (items => {
//         let card = `
//             <div class="card"> 
//                 <h4> ${items.name}</h4>
//                 <h4> ${items.Mark}<h4>
//             </div>
//         `
//         conatiner.innerHTML += card
//     })
// }

// function operation(){
    
//     let filterd = total.filter(items => 
//         items.Mark >= 50
//     )
//     Display(filterd)
// }

// let total = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => 
//     total = data

// )

// function Display(task) {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     task.forEach(item => {
//         conatiner.innerHTML += `
//             <div class="card">
//                 <h4>Task: ${item.task}</h4>
//                 <h4>Status: ${item.status ? "completed" : "Incompleted"}</h4>
//             </div>
//         `
//     })
// }

// function completed(task) {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     let filterd = task.filter(item => item.status === true)
//     if(filterd){
//         Display(filterd)
//     }
// }

// function incompleted(task) {
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     let filtred = task.filter(item => item.status === false)
//     if(filtred){
//         Display(filtred)
//     }
// }

// let count = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     count = data
// })

// function Aviyal(item){
//     let conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     let filted = item.filter(product => product.Availability === true) 
//     filted.forEach(item => {
//         conatiner.innerHTML +=`
//             <div class="card">
//                 <h4>${item.name} <h4>
//                 <h4>${item.Availability ? "Available" : "Not available"} </h4>
//             </div>
//         `
        
//     })
// }

// let products = []

// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     products = data

// })

// function Display(product) {
//     const conatiner = document.getElementById("container")
//     conatiner.innerHTML = ""

//     product.forEach(item => {
//         conatiner.innerHTML +=`
//             <div class="card">
//                 <h4> ${item.name}</h4>
//                 <p>Category: ${item.category} </p>
//                 <p>Price: ${item.price} </p>
//             </div>
//         `
//     })
// }

// function filterProducts() {
//     const selectedCategory = document.getElementById("CategorySelect").value
//     const minPrice = Number(document.getElementById("minPrice").value) || 0
//     const maxPrice = Number(document.getElementById("maxPrice").value) || Infinity

//     const filted = products.filter(product => {
//         const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
//         const matchesPrice = product.price >= minPrice && product.price <= maxPrice
//         return matchesCategory && matchesPrice
//     })
//     Display(filted)
// } 

// let items = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => 
//     items = data
// )

// function Display(products){
//     let container  = document.getElementById("container")
//     container.innerHTML = ""

//     products.forEach(product => {
//         container.innerHTML += `
//             <div class="card">
//                 <h4>${product.name}</h4>
//                 <h4>Category: ${product.category} </h4>
//                 <h4>Price: ${product.price} <h4>
//             </div>
//         `
//     })
// }

// function filterProducts() {
//     const category = document.getElementById("CategorySelect").value
//     const minPrice = Number(document.getElementById("minPrice").value)
//     const maxPrice = Number(document.getElementById("maxPrice").value)
    
//     const filted = items.filter(thosth => {
//         const matchedCategory = thosth.category === category || category === "All"
//         const matchesPrice = thosth.price >= minPrice && thosth.price <= maxPrice

//         return matchedCategory && matchesPrice
//     })
//     Display(filted)
// }

// let total = []
// fetch("indesub.json")
// .then(response => response.json())
// .then(data => {
//     total = data
//     DisplayBook(total)
// })

// function DisplayBook(books) {
//     const container = document.getElementById("container")
//     container.innerHTML = ""

//     books.forEach(book => {
//         container.innerHTML += `
//             <div class="card">
//                 <h4>${book.title} </h4>
//                 <h4>${book.author} </h4>
//             </div>
//         `
//     })
// }

// function filterByAuthor(){
//     const searchTerm = document.getElementById('entered').value.toLowerCase()
//     const filterd = total.filter(book => 
//         book.author.toLowerCase().includes(searchTerm)
//     )
//     DisplayBook(filterd)
// }


let orders = []

fetch("indesub.json")
.then(response => response.json())
.then(data => {
    orders = data
    displayOrders(orders)
})

function displayOrders(list) {
    const container = document.getElementById("container")
    container.innerHTML = ""

    list.forEach(items => {
        container.innerHTML +=`
            <div class="card">
                <p><strong>Order ID: </strong>${items.orderId}</p>
                <p><strong>Status: </strong>${items.status}</p>
                <p><strong>Date: </strong>${items.date}</p>
            </div>
        `
    })
}

function filterOrders() {
    const selectedStatus = document.getElementById('statusSelect').value
    const selectedDate = document.getElementById('dateInput').value

    const filtered = orders.filter(order => {
        const statusMatch = selectedStatus === "All" || order.status === selectedStatus
        const dateMatch = selectedDate === '' || order.date > selectedDate
        return statusMatch && dateMatch
    })
    displayOrders(filtered)

}