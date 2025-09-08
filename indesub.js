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

let employeeData = []
fetch("indesub.json")
.then(response => response.json())
.then(data => {
    employeeData = data
    displayEmployees(employeeData)
})

function displayEmployees(emplyees){
    let conatiner =document.getElementById("container")
    conatiner.innerHTML = ""

    emplyees.forEach(emp => {
        let card = `
            <div class="card">
                <h4>${emp.name}</h4>
                <p><strong>Department: ${emp.department}</strong></p>
            </div>
        `
        conatiner.innerHTML += card
    })
}

function searchEmployees() {
    let query = document.getElementById("searchInput").value.toLowerCase()

    let filtered = employeeData.filter(emp => 
        emp.name.toLowerCase().includes(query) ||
        emp.department.toLowerCase().includes(query)
    )
    displayEmployees(filtered)
}

