

// <------------- odd or even----------->
// document.getElementById("btn").addEventListener("click", function(){
//     let num = Number(document.getElementById("num").value)

//     let final = document.getElementById("finall")
//     if(num % 2 === 0){
//         final.textContent = "even"
//     }
//     else{
//         final.textContent = "odd"
//     }

// })

// document.addEventListener("DOMContentLoaded", function(){


// document.getElementById("op").addEventListener("change", function(){
//     let first = Number(document.getElementById("first").value)
//     let second = Number(document.getElementById("second").value)

//     let selectedValue = this.value
//     let Result = document.getElementById("Result")
//     let answer = 0

//     if(selectedValue === "add"){
//         answer = first + second
//         Result.textContent = `${answer}`
//     }
//     else if(selectedValue === "sub"){
//         answer = first - second
//         Result.textContent = `${answer}`
//     }
//     else if(selectedValue === "div"){
//         answer = first / second
//         Result.textContent = `${answer}`
//     }
//     else{
//         answer = first * second
//         Result.textContent = `${answer}`
//     }
//     console.log(selectedValue)
// })
// })

//  <------------ string reverse -------------->
// let str1 = "Hello"
// let arr = []
// for(let i=0; i<length.str1; i++){

// }

// document.getElementById("reverseBtn").addEventListener("click", function(){
//     let input = document.getElementById("textInput").value;
//     let reversed = input.split("").reverse().join("")

//     document.getElementById("result").textContent = reversed
// })

//  <----------background changing------------------->
// let bgbtn = document.getElementById("bgbtn")
// bgbtn.addEventListener("click", function(){

//     let colr = `rgb(${Math.floor(Math.random() *256)}, ${Math.floor(Math.random() *256)}, ${Math.floor(Math.random() *256)})`
//     document.body.style.backgroundColor = colr
// })


//  <-------------counterApp------------------>
// document.getElementById("incmt").addEventListener("click", function(){
//     let disply =document.getElementById("disply")
//     let val = Number(disply.textContent)

//     val = val + 1
//     disply.textContent = val

// })

// document.getElementById("decmt").addEventListener("click", function(){
//     let disply = document.getElementById("disply")
//     let val = Number(disply.textContent)

//     val = val - 1
//     disply.textContent = val
// })

// document.getElementById("reset").addEventListener("click", function(){
//     let disply = document.getElementById("disply")
//     let val = Number(disply.textContent)

//     val = 0
//     disply.textContent = val
// })

//  <------ dynamic list --------->
// document.getElementById("add").addEventListener("click", function(){
//    let container =  document.getElementById("cntainer")   
   
//    nxt = document.createElement("li")
//    container.appendChild(nxt)
//    container.appendChild(document.createElement("input"))
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let itm = document.getElementById("itm").value
//     let numArray = itm.split(",")

//     let number = numArray.map(num => Number(num.trim()));
//     let largest = Math.max(...number)

//     document.getElementById("result").textContent = "Largest Number: " + largest
// })

// <<-------------beginner level ----->
//  (1)
// function Hello(){
//     let num = Number(prompt("Enter Number"))
//     if(isNaN(num) || num <= 0){
//         console.log("Enter vallid number")
//     }
//     else{
//         for(let i=1; i<=num; i++){
//             console.log("Hello world")
//         }
//     }
    
// }
// Hello()

//  (2)

// function take (a,b){

//     return a+b
// }
// console.log(take(2,3))

// (3)

// let arr = []
// let size = Number(prompt("Enter size of an array"))
// let temp = []
// let sum = 0

// if(isNaN(size) || size == 0){
//     console.log("please enter a valid number")
// }
// else{

//     for(let i=0; i<size; i++){
//         temp[i] = Number(prompt(`enter ${i}th value`))
//         sum = sum + temp[i]
//     }
//     console.log(sum)
// }

// (4)

// function take(str){
//     let reversed = "";
//     for(let i = str.length - 1; i>=0; i--){
//         reversed += str[i]
//     }
//     return reversed
    
    
// }
// console.log(take("hello"))

// function reverse(str){
   
//     return str.split("").reverse().join("")
// }
// console.log(reverse("hello"))


//  <------------ intermediate ------------->
// function factorial(){

//     let num = Number(prompt("Enter a number"))
//     let fact = 1

//     if(num>0){
//         for(let i=num; i>0; i--){
//             fact = fact * i
//         }
        
//     }
//     else{
//         fact = 1
//     }

//     console.log(fact)
// }
// factorial()

//  <------------- palidrome ----------------->
// function palidrome(str) {
//     str = str.toLowerCase();
//     let len = str.length

//     for(let i=0; i<len/2; i++){
//         if(str[i] !== str[len - 1 - i]){
//             return false
//         }
        
//     }
//     return true

// }
// console.log(palidrome("Madam"))

// function findMax(arr) {
//     if(arr.length === 0)
//         return "Array is empty"
//     let max = arr[0]

//     for(let i=1; i<arr.length; i++){
//         if(arr[i] >max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// let numbers = [3,7,2,9,4];
// console.log(findMax(numbers))

// let num = [3,7,2,4,10]
// let max = Math.max(...num)
// console.log(max)

// function reomveDupe(arr){
//     let uniArr = []

//     for(let i=0; i<arr.length; i++){
//         if(!uniArr.includes(arr[i])){
//             uniArr.push(arr[i])
//         }
//     }
//     return uniArr
// }

// let num = [1,2,22,3,2,4,45,4,10,10]
// console.log(reomveDupe(num))

// for(let i=1; i<=100; i++){
//     if(i % 3 === 0 && i% 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }
// }


//  age checker      
// document.getElementById("check").addEventListener("click", function(){
//     let age = Number(document.getElementById("age").value)
//     let result = document.getElementById("result")

//     if(age>50){
//         result.textContent = "Your are a senior"
//     }
//     else if(age>18){
//         result.textContent = "Your are a adult"
//     }
//     else if(age>10){
//         result.textContent = "your are teenager"
//     }
//     else{
//         result.textContent = "Your are a child"
//     }
// })    

// multiplication table
// document.getElementById("btn").addEventListener("click", function(){
//     let num = Number(document.getElementById("num").value)
//     let container = document.getElementById("container")
//     container.innerHTML = ''
//     let temp = 0

//     for(let i=1; i<=10; i++){
//         let result = document.createElement("div")
//         temp = i*num
//         result.textContent = `${i} * ${num} = ${temp}`
//         container.appendChild(result)
//     }
// })

// even numbers
// document.getElementById("btn").addEventListener("click", function(){
//     let container = document.getElementById("result")
//     let start = 1
//     let end = 50
//     let temp = 0
//     for(let i=1; i<= end; i++){
//         if(i % 2 === 0){
//             temp = i
        
//             let cnt = document.createElement("div")
//             cnt.textContent = `${i}`
//             container.appendChild(cnt)
//         }
//     }
// })

// reverse of the string

// function reverse(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverse("Welcome"))

// function reverse(str){
//     let revered = "";

//     for(let i=str.length-1; i>=0; i--){
//         revered = revered + str[i]
//     }
//     return revered
// }
// console.log(reverse("Welcome"))


// document.getElementById("btn").addEventListener("click", function(){
//     let str = document.getElementById("str").value
//     let result = document.getElementById("result")
//     let temp = ""

//     for(let i = str.length-1; i>=0; i--){
//         temp = temp + str[i]
//     }
//     result.textContent = `${temp}`
// })
// document.getElementById("btn").addEventListener("click", function(){
//     let num = Number(document.getElementById("num").value)
//     let result = document.getElementById("result")

//     if(num <= 1){
//         result.textContent = "Enter valid Number"
//         return;
//     }
//     let isPrime = true;

//     for(let i=2; i<num; i++){
//         if(num % i === 0){
//             isPrime = false
//             break
//         }
//     }
//     result.textContent = isPrime ? "prime" : "not prime"
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let num = Number(document.getElementById("num").value)
//     let result = document.getElementById("result")

//     function pn(num){
//         if(num <= 1)
//         {
//             result.textContent = "Enter valid Number"
//             return
//         }
//         let isPrime = true
        
//         for(let i=2; i<num; i++){
//             if(num % i === 0){
//                 isPrime = false
//                 break
//             }
//         }
//         result.textContent = isPrime ? "prime" : "not prime"
//     }
//     pn(num)

// })
// 

// let arr = [1,45,3,0]
// let large = arr[0]
// let smallt = arr[0]

// function small(array){
//     for(let i = 0; i<= array.length; i++){
//         if(array[i] > large){
//             large = array[i]
//         }
//         if(array[i] < smallt){
//             smallt = array[i]
//         }
//     }
//     console.log("Largest", large)
//     console.log("smallest", smallt)
// }
// small(arr)

// document.getElementById("btn").addEventListener("click", function() {
//     let numbers = document.getElementById("numbers").value
//     let arr = numbers.split(",").map(num => Number(num.trim()))
//     let small = document.getElementById("small")
//     let large = document.getElementById("large")

//     if(arr.some(isNaN) || arr.length === 0){
//         small.textContent = "Invalid input"
//         return
//     }
//     let ll = arr[0]
//     let sm = arr[0]
//     function checker(array){
//         for(let i=1; i< array.length; i++){
//             if(array[i]>ll){
//                 ll = array[i]
//             }
//             if(array[i] < sm){
//                 sm = array[i]
//             }
//         }
//         small.textContent = `Smallest is ${sm}`;
//         large.textContent = `Largest is ${ll}`;
//     }
//     checker(arr)

// })

// document.getElementById("btn").addEventListener("click", function(){
//     let numbers = document.getElementById("numbers").value
//     let arr = numbers.split(",").map(num => Number(num.trim()))
//     let result = document.getElementById("result")

//     if(arr.some(isNaN) || arr.length === 0){
//         result.textContent= "Invalid Input"
//         return
//     }
//     let temp =[]
//     let store = []
//     for(let i=0; i<arr.length; i++){
//         let found = false

//         for(let j=0; j<store.length; j++){
//             if(arr[i] === store[j]){
//                 found = true
//                 break;
//             }
//         }
//         if(!found){
//             store.push(arr[i])
//         }
//     }
//     result.textContent = "Array without duplicates: " + store

// })

// document.getElementById("btn").addEventListener("click", function(){
//     let numbers = document.getElementById("numbers").value
//     let arr = numbers.split(",").map(num =>Number( num.trim()))
//     let result = document.getElementById("result")

//     if(arr.some(isNaN) || arr.length === 0){
//         result.textContent = "Invalid input"
//         return 
//     }
//     let uniqArr = []
    
//     for(let i=0; i<arr.length; i++){
//         let found = false

//         for(let j=0; j<uniqArr.length; j++){
//             if(arr[i] === uniqArr[j]){
//                 found = true
//                 break
//             }
//         }
//         if(!found){
//             uniqArr.push(arr[i])
//         }
//     }
//     result.textContent =`${uniqArr}`
// })


// document.getElementById("btn").addEventListener("click", function(){
//     let result = document.getElementById("result")
//     let  person = {
//         name: document.getElementById("name").value,
//         age: document.getElementById("age").value,
//         hobbies: document.getElementById("hobbies").value.split(",").map(num => num.trim())
//     };

//     function description(p){
//         return `${p.name} is ${p.age} years old and enjoys ${p.hobbies.join(",")}`;
//     }
//     result.textContent = description(person)
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let result = document.getElementById("result")
//     let college = {
//         name : document.getElementById("name").value,
//         count: Number(document.getElementById("count").value),
//         dept: document.getElementById("dept").value.split(",").map(comes => comes.trim())
//     }

//     function description(clg){
//         return `${clg.name} is number one college in kerala, there are ${clg.count} different departments which are ${clg.dept.join(",")}`
//     }
//     result.textContent = description(college)
// })

// document.getElementById("bgbtn").addEventListener("click", function(){
//     let random = "#" + Math.floor(Math.random()*16777215).toString(16)
//     document.body.style.backgroundColor = random
// })


// document.getElementById("btn").addEventListener("click", function(){
//     let items = ["Apple", "Banana", "Orange", "Mango", "Grapes"]

//     let ul = document.createElement("ul")

//     for(let i=0; i< items.length; i++){
//         let li = document.createElement("li")
//         li.textContent = items[i]
//         ul.appendChild(li)
//     }
//     document.getElementById("listcntr").appendChild(ul)
// })

// document.getElementById("userForm").addEventListener("submit", function(event){
//     event.preventDefault()

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;

//     document.getElementById("result").textContent = `Name: ${name}, Email: ${email}`
// })

// document.getElementById("usee").addEventListener("submit", function(event){
//     event.preventDefault()

//     let name = document.getElementById("name").value
//     let email = document.getElementById("email").value

//     document.getElementById("result").textContent = `Entered name is ${name}, and entered email is ${email}`
// }) 

// document.getElementById("change").addEventListener("click", function(){
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)

//     let rand = `rgb(${r},${g},${b})`

//     document.body.style.backgroundColor = rand
// })

// document.getElementById("strt-btn").addEventListener("click", function(){
//     let timeLeft = 10;
//     let timerDisplay = document.getElementById("timer")

//     let countdown = setInterval(function(){
//         if(timeLeft > 0){
//             timerDisplay.textContent = timeLeft;
//             timeLeft--;
//         }
//         else{
//             clearInterval(countdown)
//             timerDisplay.textContent = "Time's up!"
//         }
//     }, 1000)
// })

// document.getElementById("str").addEventListener("click", function(){
//     let deflt = 10
//     let disply = document.getElementById("time")

//     let seter = setInterval(function(){
//         if(deflt > 0){
//             disply.textContent = deflt
//             deflt--;
//         }
//         else{
//             clearInterval(seter)
//             disply.textContent = "time is up"
//         }
//     }, 1000)
// })

// let numbers = [2,5,8,12,15]

// let double = numbers.map(num => num * 2)
// let greaterThanTen = double.filter(num => num > 10);

// let sum = greaterThanTen.reduce((total, num) => total + num, 0)

// console.log("Original:", numbers)
// console.log("Doubled:", double)
// console.log("Greater than 10:", greaterThanTen)
// console.log("Sum:", sum)

// let origin = [4,5,1,9,8]

// let two = origin.map(num => num * 2)
// let greater = two.filter(num => num > 10)
// let totl = greater.reduce((total, num) => totl + num, 0)


// document.getElementById("loadBtn").addEventListener("click", function(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(data => {
//             let tableBody = document.getElementById("userTable")
//             tableBody.innerHTML = ""

//             data.forEach(user => {
//                 let row = `
//                     <tr>
//                         <td>${user.id}</td>
//                         <td>${user.name}</td>
//                         <td>${user.email}</td>
//                     </tr>
//                 `;
//                 tableBody.innerHTML += row
//             })
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error)
//         })
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let str = document.getElementById("str").value
//     let strii = str.split("").reverse().join("")
//     console.log(strii)
//     let result = document.getElementById("result")
//     result.textContent = strii
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let num = document.getElementById("num").value
//     let result = document.getElementById("result")
//     if(num === ""){
//         result.textContent ="enter a valid input"
//     }
//     if(num % 2 === 0){
//         result.textContent = "even"
//     }
//     else{
//         result.textContent = "odd"
//     }
// })
// document.addEventListener("DOMContentLoaded", function(){


// document.getElementById("calculate").addEventListener("click", function(){
//     let raw1 = document.getElementById("num1").value;
//     let raw2 = document.getElementById("num2").value;
//     let num1 = Number(raw1);
//     let num2 = Number(raw2);
//     let operator = document.getElementById("operator").value
//     let result = document.getElementById("result")

//     if(raw1.trim() === "" || raw2.trim() === "" || isNaN(num1) || isNaN(num2)){
//         result.textContent = "Enter valid numbers";
//         return
//     }
//     let output;
//     switch(operator){
//         case "+":
//             output = num1 + num2
//             break;
//         case "-":
//             output = num1 - num2
//             break;
//         case "*":
//             output = num1 * num2
//             break;
//         case "/":
//             output = num1 / num2
//             break;
//     }
//     result.textContent = `Result: ${output}`
// })
// })

// document.getElementById("calcul").addEventListener("click", function(){
//     let num1 = Number(document.getElementById("num1").value)
//     let num2 = Number(document.getElementById("num2").value)
//     let operator = document.getElementById("operator").value;
//     let result = document.getElementById("result")

//     if(isNaN(num1) || isNaN(num2)){
//         result.textContent = "Enter valid number"
//         return
//     }
//     let op
//     switch(operator){
//         case "+":
//             op = num1 + num2
//             break;
//         case "-":
//             op = num1 - num2
//             break;
//         case "*":
//             op = num1 * num2
//             break;
//         case "/":
//             if(num2 === 0){
//                 result.textContent = "Cannot divide by zero"
//                 return;
//             }
//             op = num1 / num2
//             break;
//     }
//     result.textContent = `Result: ${op}`;
// })
// const text = document.getElementById("text")
// const counter = document.getElementById("counter")

// const limitInput = document.getElementById("limit")
// const limitInfo = document.getElementById("limitInfo")

// function updateCounts(){
//     const len = text.value.length
//     const max = Number(limitInput.value) || 0;

//     counter.textContent = `${len} ${len === 1 ? "character" : "characters"}`

//     if(max > 0){
//         limitInfo.textContent = `${len} / ${max}`;
//         limitInfo.classList.toggle("warn", len >= max * 0.9 && len <= max) 
//         limitInfo.classList.toggle("over", len > max) 
//     }
//     else{
//         limitInfo.textContent = `${len}`;
//         limitInfo.classList.remove("warn", "over")
//     }
// }

// text.addEventListener("input", updateCounts)
// limitInput.addEventListener("input", updateCounts)

// updateCounts()