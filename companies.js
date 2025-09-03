// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name" : "Spongebob", "age": 20, "isStudent": false}`
// const jsonPeople = `[("name" : "Spongebob", "age": 30, "isEmployed": false),
//                     ("name" : "Patrick", "age": 25, "isEmployed": true),
//                     ("name": "squidward", "age": 50, "isEmployed" : true)
//                     ("name" : "Sandy", "age": 27, "isEmployed" : true)]`

// const parseData = JSON.parse(jsonPerson)
// console.log(parseData)

// fetch("data.json")
//   .then(response => response.json())
//   .then(values => values.forEach(value => console.log(value.name)))

// fetch("companies.json")
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(post => {
//             listEl.insertAdjacentHTML('beforeend', `<li>${post.data}</li>`)
//         })
//     })

// let list = ""
// fetch("companies.json")
// .then(response => response.json())
// .then(data => {
//     data.users.forEach(user =>{
//         list += `<li>${user.name}</li>`
//     })
//     document.querySelector("ul").innerHTML = list
//     console.log(data.users[0].address.city)
// })
// .catch(err => console.log(err))
//  

// let listEl = ""
// let nameEl = ""
// fetch("companies.json")
// .then(response => response.json())
// .then(user => {user.users.forEach(user => {
//     listEl += `<li>${user.name}</li>`
//     nameEl += `<li>${user.address.city}`
//     })
//     document.querySelector("ul").innerHTML = listEl
//     document.querySelector("ol").innerHTML = nameEl
// })

var person = {
    name: "Brand"
}

console.log(person)