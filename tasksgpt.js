

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

// document.getElementById("convet").addEventListener("click", function(){
//     let celsiusValue = document.getElementById("Celsius").value
//     let result = document.getElementById("result")

//     if(celsiusValue.trim() === "" || isNaN(celsiusValue)){
//         result.textContent = "Please enter a valid number."
//         return
//     }
//     let fahrenheit = (Number(celsiusValue) * 9/5) + 32
//     result.textContent = `${celsiusValue} C = ${fahrenheit.toFixed(2)} F`
// })

// document.getElementById("countBtn").addEventListener("click", function(){
//     let sentance = document.getElementById("sentance").value.trim();
//     let result = document.getElementById("result");

//     if(sentance === ""){
//         result.textContent = "Please enter a sentence."
//         return
//     }
//     let wordCount = sentance.split(/\s+/).length;

//     result.textContent = `Number of words: ${wordCount}`
// })

// const input = document.getElementById("todoInput")
// const addBtn = document.getElementById("addBtn")
// const todoList = document.getElementById("todoList")

// addBtn.addEventListener("click", function(){
//     const task = input.value.trim()
//     if(task === ""){
//         alert("Enter a task")
//         return
//     }
//     const li = document.createElement("li");
//     li.textContent = task

//     li.addEventListener("click", function(){
//         todoList.removeChild(li)
//     })

//     todoList.appendChild(li)
//     input.value =""
// })

// const quotes = [
//     "The best way to predict the future is to invent it. - Alan Kay",
//     "Life is what happens when you're busy making other plans. - John Lennon",
//     "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
//     "In the middle of every difficulty lies opportunity. - Albert Einstein"
// ];

// const button = document.getElementById("generateBtn")
// const disply = document.getElementById("quoteDisplay")

// button.addEventListener("click", function(){
//     const rand = Math.floor(Math.random() * quotes.length)
//     const random = quotes[rand]

//     disply.textContent = random
// })

// function updateClock() {
//     const now = new Date();
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds()

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds

//     const timeString = `${hours} : ${minutes} : ${seconds}`;

//     document.getElementById("clock").textContent = timeString
// }

// setInterval(updateClock, 1000)

// updateClock()

// document.getElementById("checkBtn").addEventListener("click", function() {
//     let input = document.getElementById("textInput").value;
//     let cleanInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

//     let reversed = cleanInput.split("").reverse().join("")

//     if(cleanInput === reversed){
//         document.getElementById("result").textContent = `"${input}" is a palindrome!`;
//     }
//     else{
//         document.getElementById("result").textContent = `"${input}" is not a palindrome`
//     }
// })

// document.getElementById("countBtn").addEventListener("click", function(){
//     let input = document.getElementById("textInput").value;
//     let resultDiv = document.getElementById("result")

//     if(input.trim() === ""){
//         resultDiv.textContent = "Please enter some text."
//         return;
//     }
//     let freq = {}

//     for(let char of input){
//         if(char!== " "){
//             char = char.toLowerCase();
//             freq[char] = (freq[char] || 0) +1
//         }
//     }
//     let output = "";
//     for(let key in freq) {
//         output += `${key}: ${freq[key]}<br>`
//     }
//     resultDiv.innerHTML = output
// })

// document.getElementById("userForm").addEventListener("submit", function(e){
//     e.preventDefault()

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let message = document.getElementById("message")


//     if(name === ""){
//         message.textContent = "Name cannot be empty."
//         message.style.color = "red"
//         return;
//     }
//     if(name.length < 3){
//         message.textContent = "Name must be at least 3 characters."
//         message.style.color = "red"
//         return;
//     }
//     let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if(!email.match(emailPattern)){
//         message.textContent = "Please enter a valid email address"
//         message.style.color = "red"
//         return;
//     }

//     message.textContent = `Form submitted sucessfully! Name: ${name}, Email: ${email}`;
//     message.style.color = "green"
// })

// 
// document.getElementById("submit").addEventListener("click", function(e){
//     e.preventDefault()

//     let strr = document.getElementById("str").value.trim()
//     let str = strr.split("")
//     let result = document.getElementById("result")
//     let flag = true
//     let count = 0
//     console.log("string enterd")

//     if(strr === ""){
//         result.textContent = "enter a valid string"
//     }

//     for(let i=0; i< str.length/2; i++){
//         if(str[i]!== str[str.length-1-i]){
//             flag = false
//             break
//         }
//     }
//     if(flag){
//         result.textContent = "palindrome"
//     }
//     else{
//         result.textContent = "not palindrome"
//     }
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let task = document.getElementById("task").value.trim();
//     let layout = document.getElementById("layout")
    
//     if(task === ""){
//         layout.textContent = "invalid"
//     }

//     let list = document.createElement("li")
//     list.textContent = `${task}`
    

//     const dltBtn = document.createElement("button")
//     dltBtn.textContent = "delete"
//     dltBtn.addEventListener("click", (e) => {
//         e.stopPropagation()
//         list.remove()
//     })
//     layout.appendChild(dltBtn)
//     layout.appendChild(list)

//     task.value = ""
// })

// const postcntr = document.getElementById("posts")

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => {
//         const firstTen  = data.slice(0,10)

//         firstTen.forEach(post => {
//             const postDiv = document.createElement("div")
//             postDiv.innerHTML = `
//                 <div>${post.title}</div>
//                 <div>${post.body}</div>
//             `
//             postcntr.appendChild(postDiv)
//         })
//     })
//     .catch(error => {
//         postcntr.innerHTML = `<p style="color:red;">Error fetching posts`
//         console.error("Error", error);
        
//     })


// const mainn = document.getElementById("mainn")

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data =>{
//         const first = data.slice(0,10)

//         first.forEach(items => {
//             const high = document.createElement("div")
//             high.innerHTML = `
//                 <div>${items.title}</div>
//                 <div>${items.body}</div>
//             `
//             mainn.appendChild(high)
//         })
//     })
//     .catch(error => {
//         mainn.innerHTML = `<p>Error in fetching</p>`
//         console.error("Error",error)
//     })

// const questions = [
//     {
//         question: "What is the capital of France?",
//         answers: ["Berlin", "Madrid", "Paris", "Rome"],
//         correct: "Paris"
//     },
//     {
//         question: "Which language runs in the browser?",
//         answers: ["Java","C", "Python","JavaScript"],
//         correct: "JavaScript"
//     },
//     {
//         question: "What does CSS stands for?",
//         answers: ["Central Style Sheet", "Cascading Style Sheets", "Cars SUVs Sailboats"],
//         correct: "Cascading Style Sheets"
//     },
    
// ]
// let currentQuestionIndex = 0
// let score = 0
 
// const questionEl = document.getElementById("question")
// const optionsEl = document.getElementById("options")
// const nextBtn = document.getElementById("next-btn")
// const scoreEl = document.getElementById("score")

// function showQuestion() {
//     optionsEl.innerHTML = ""
//     nextBtn.style.display = "none"

//     let currentQuestion = questions[currentQuestionIndex]
//     questionEl.textContent = currentQuestion.question

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.textContent = answer
//             button.addEventListener("click", () => selectAnswer(answer))
//             optionsEl.appendChild(button)
//     })
// }
// function selectAnswer(answer) {
//     let correctAnswer = questions[currentQuestionIndex].correct
//     if(answer === correctAnswer){
//         score++
//     }
//     nextBtn.style.display = "block"
// }
// nextBtn.addEventListener("click", () => {
//     currentQuestionIndex++
//     if(currentQuestionIndex < questions.length){
//         showQuestion()
//     }
//     else{
//         showScore()
//     }
// })
// function showScore(){
//     questionEl.style.display = "none"
//     optionsEl.style.display = "none"
//     nextBtn.style.display = "none"
//     scoreEl.style.display = "block"
//     scoreEl.textContent = `you scored ${score} out of ${questions.length}`
// }
// showQuestion()


// let Comptnum = Math.floor(Math.random()* 100) + 1
// let score = 0
// document.getElementById("Checker").addEventListener("click", function(){
//     let numer = document.getElementById("num").value
//     let hint = document.getElementById("hint")
//     let mark = document.getElementById("mark")

//     if(numer.trim() === ""){
//         hint.textContent= "Enter a valid number"
//         return;
//     }
//     let num = Number(numer)

//     if(Comptnum > num){
//         hint.textContent = "too low"
//     }
//     else if(Comptnum < num){
//         hint.textContent = "too high"
//     }
//     else if(Comptnum == num){
//         hint.textContent = "Congrats your prediction is correct"
//         score = score + 1
//         mark.textContent = `Your score is ${score}`
//     }
// })

// const cells = document.querySelectorAll(".cell")
// const statusText = document.getElementById("status");
// const resetBtn = document.getElementById("reset")

// let currentPlayer = "X";
// let gameActive = true;
// let board = ["", "", "", "", "", "", "", "", ""];

// const winningCombos =[
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
// ];

// cells.forEach((cell, index) => {
//     cell.addEventListener("click", () => {
//         if(!gameActive || board[index] !== "") {
//             return
//         }
//         board[index] = currentPlayer;
//         cell.textContent = currentPlayer
//         cell.classList.add("taken");

//         if(checkWinner()) {
//             statusText.textContent = `Player ${currentPlayer} Wins`;
//             gameActive = false;
//         }
//         else if(board.every(cell => cell !== "")){
//             statusText.textContent = "It's a Draw"
//             gameActive = false;
//         }
//         else{
//             currentPlayer = currentPlayer === "X" ? "O" : "X";
//             statusText.textContent = `Player ${currentPlayer}'s Turn`;
//         }
//     })
// })

// resetBtn.addEventListener("click", function(){
//     currentPlayer = "X"
//     board = ["", "", "", "", "", "", "", "", ""];
//     gameActive = true
//     statusText.textContent = "Payer X's Turn";
//     cells.forEach(cell => {
//         cell.textContent = "";
//         cell.classList.remove("taken")
//     })
// })

// function checkWinner() {
    
//         return winningCombos.some(combo => {
//             return combo.every(index => board[index] === currentPlayer)
//         })
    
// }


// let rock = document.getElementById("rock")
// let paper = document.getElementById("paper")
// let scissors = document.getElementById("scissor")
// let choice = document.getElementById("choice")
// let instruction = document.getElementById("instruction")
// let score = document.getElementById("score")
// let playChoice = null;
// let count = 0

// let rockSelct
// let paperSelct
// let scissorSelct

//     rock.addEventListener("click", function(){
//         playChoice = "rock"
//         console.log(rock)
        
//     })

    
//     paper.addEventListener("click", function(){
//         playChoice = "paper"
//     })

    
//     scissors.addEventListener("click", function(){
//         playChoice = "scissor"
//     })

// document.getElementById("play").addEventListener("click", function(){
   
//     if(!playChoice){
//         instruction.textContent = "Select a option";
//         instruction.style.color = "purple"
//         return;
//     }
    

//     let Computer = Math.floor(Math.random() * 3) + 1
//     let ComputerChoice

//     if(Computer === 1){
//         choice.textContent = "🪨 Rock"
//         ComputerChoice = "rock"
//     }
//     else if(Computer === 2){
//         choice.textContent = "📄 Paper"
//         ComputerChoice = "paper"
//     }
//     else if(Computer === 3){
//         choice.textContent = "✂️ Scissors"
//         ComputerChoice = "scissor"
//     }

//    if (playChoice === ComputerChoice){
//     instruction.textContent = "It's Draw!"
//    }
//    else if(
//         (playChoice === "rock" && ComputerChoice === "scissor") || (playChoice === "paper" && ComputerChoice === "rock") || (playChoice === "scissor" && ComputerChoice === "paper")
//     ){
//         count++
//         instruction.textContent = "You win!";
//         instruction.style.color = "green"
//     }
//     else{
//         instruction.textContent = "You failed"
//         instruction.style.color = "red"
//     }
//     score.textContent = `Your Score: ${count} `
//     playChoice = null
    
// })


// for(let i=0; i<16; i++){
//     let cells = document.createElement("div")
//     cells.classList.add("cell")
//     cells.id = "cel"+i
//     overcell.appendChild(cells)
// }


// // shuffle
// let overcell = document.getElementById("overcell")
// let cards = []
// for(let i=1; i<=8; i++){
//     cards.push(i)
//     cards.push(i)
// }
// cards.sort(() => Math.random() - 0.5) 

// //  face-down
// for(let i = 0; i < cards.length; i++){
//     let cell = document.createElement("div")
//     cell.classList.add("cell")
//     cell.dataset.value = cards[i]
//     cell.textContent = "❓"
//     overcell.appendChild(cell)
// }

// // flip logic
// let firstCard = null
// let secondCard = null
// let lockboard = false

// overcell.addEventListener("click", function(e) {
//     let clicked = e.target

//     if(!clicked.classList.contains("cell") || lockboard) return
//     if(clicked === firstCard) return

//     clicked.textContent = clicked.dataset.value

//     if(!firstCard){
//         firstCard = clicked
//     }
//     else{
//         secondCard = clicked
//         lockboard = true

//         if(firstCard.dataset.value === secondCard.dataset.value) {
//             firstCard = null
//             secondCard = null
//             lockboard = false
//         }
//         else{
//             setTimeout(() => {
//                 firstCard.textContent = "❓"
//                 secondCard.textContent ="❓"
//                 firstCard = null
//                 secondCard = null
//                 lockboard = false
//             }, 1000)
//         }
//     }
// })

// document.getElementById("adtask").addEventListener("click", function(){

//     let todo = document.getElementById("todo").value.trim()
//     console.log(todo)

//     if(todo){
//         let over = document.getElementById("over")
//         let list = document.createElement("li")
//         let checkbox = document.createElement("input")
//         checkbox.type = "checkbox"
//         list.appendChild(checkbox)

//         let text = document.createTextNode(`${todo}`)
//         list.appendChild(text)

//         checkbox.addEventListener("change", function(){
//             list.style.textDecoration = this.checked ? "line-through" : "none"
//         })

//         over.appendChild(list)
//         document.getElementById("todo").value = ""
        
//     }
    

// })
// let dlt = document.getElementById("dlt").addEventListener("click", function(){
//             let tasks = over.getElementsByTagName("li")
//             if(tasks.length > 0){
//                 over.removeChild(tasks[tasks.length - 1])
//             }
// })

// document.getElementById("addColor").addEventListener("click", function(){
//     let colorInput = document.getElementById("colorInput").value.trim()
//     let pal = document.getElementById("pal")

//     console.log(colorInput)

//     if(colorInput){
//        let square = document.createElement("div")
//         square.id ="palette"
//         square.style.backgroundColor = `${colorInput}`
//         pal.appendChild(square)
//     }
// })

// document.getElementById("deleteColor").addEventListener("click", function(){
//     let clr = pal.getElementsByTagName("div")
//     if(clr.length > 0){
//         pal.removeChild(clr[clr.length - 1])
//     }
// })


// let questions =[
//     {
//         q: "What is 2 + 2?",
//         Options: ["3", "4", "5", "6"],
//         answer : "4"
//     },
//     {
//         q: "what is the capital of france?",
//         Options: ["Paris", "Rome", "Berlin", "Madrid"],
//         answer: "Paris"
//     },
//     {
//         q: "Which language is used for web development?",
//         Options: ["Python", "Javascript", "C++", "Java"],
//         answer: "Javascript"
//     }
// ]

// let currentQuestion = 0;
// let score = 0

// let questionEl = document.getElementById("question")
// let optionsEl = document.getElementById("options")
// let nextBtn = document.getElementById("next-btn")
// let scoreEl = document.getElementById("score")

// function showQuestion() {
//     optionsEl.innerHTML = "";
//     questionEl.textContent = questions[currentQuestion].q
//     questions[currentQuestion].Options.forEach(Option => {
//         let btn = document.createElement("button")
//         btn.textContent = Option
//         btn.addEventListener("click", selectOption)
//         optionsEl.appendChild(btn)
//     })
// }

// function selectOption(e) {
//     let selected = e.target.textContent;
//     let correct = questions[currentQuestion].answer

//     if(selected === correct){
//         score++;
//         alert("Correct!")
//     }else{
//         alert(`Wrong! Correct answer is: ${correct}`)
//     }
//     Array.from(optionsEl.children).forEach(btn => btn.disabled = true)
// }
// nextBtn.addEventListener("click", function(){
//     currentQuestion++;
//     if(currentQuestion < questions.length){
//         showQuestion()
//     }else{
//         questionEl.textContent = "Quiz Over!";
//         optionsEl.innerHTML = "";
//         scoreEl.textContent = `Your score: ${score} / ${questions.length}`
//     }
// })

// showQuestion()

// let num1 = 5
// let  num2 =10
// if(num1<num2){
//     console.log("wow")
// }
// else{
//     console.log("not much")
// }

// function reverse(str){
//     return str.split("").reverse().join("")
// }

// console.log(reverse("hello"))

// document.getElementById("btn").addEventListener("click", function(){
//     let str = document.getElementById("str").value
//     let result = document.getElementById("result")

//     let propty = str.split("").reverse().join("")

//     result.textContent = `${propty}`
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let str = document.getElementById("str").value
//     let result = document.getElementById("result")
//     let len = str.length
//     let palindrome = true

//     for(let i=0; i<str.length/2; i++){
//         if(str[i] !== str[len - 1 - i]){
//             palindrome = false
//         }
//     }
//     result.textContent = palindrome ? "palindrome" : "not palindrome"
    
// })

// function CounterVovel(str){
//     let counter = 0

//     for(let i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i] === "A"){
//             counter = counter + 1
//         }
//         else if(str[i] === "e" || str[i] === "E"){
//             counter = counter + 1
//         }
//         else if(str[i] === "i" || str[i] === "I"){
//             counter = counter + 1
//         }
//         else if(str[i] === "o" || str[i] === "O"){
//             counter = counter + 1
//         }
//         else if(str[i] === "u" || str[i] === "U"){
//             counter = counter + 1
//         }
//     }
//     console.log(counter)
// }

// CounterVovel("javascript")

// document.getElementById("btn").addEventListener("click", function(){
//     let str = document.getElementById("str").value
//     let result = document.getElementById("result")
//     let counter = 0

//     for(let i=0; i<str.length; i++){
//         if(str[i] == "a" || str[i] == "A"){
//             counter = counter + 1
//         }
//         else if(str[i] == "e" || str[i] =="E"){
//             counter = counter + 1
//         }
//         else if(str[i] == "i" || str[i] == "I"){
//             counter = counter + 1
//         }
//         else if(str[i] == "o" || str[i] == "O"){
//             counter = counter + 1
//         }
//         else if(str[i] == "u" || str[i] == "U"){
//             counter = counter + 1
//         }
//     }
//     result.textContent = `${counter}`

// })

// document.getElementById("btn").addEventListener("click", function(){
//     let result = document.getElementById("result")
//    let  str = document.getElementById("str").value
//     let temp = str.split("")
//     let sum = 0

//     for(let i=0; i<temp.length; i++){
//         sum = sum + Number(temp[i])
//     }
//     result.textContent = `${sum}`
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let result = document.getElementById("result")
//     let str = document.getElementById("str").value
//     let temp = str.split("")
//     let sample = Number(temp[0])
//     let store

//     for(let i=0; i<temp.length; i++){
//         if(sample<Number(temp[i])){
//             sample=Number(temp[i])
//         }
//     }
//     result.textContent = `${sample}`
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let result = document.getElementById("result")
//     let num = Number(document.getElementById("num").value)
//     let temp = 1

//    if(num>1){
//     for(let i=2;i<=num;i++){
//         temp = temp * i
//     }}

//     result.textContent = `${temp}`
// })

// document.getElementById("btn").addEventListener("click", function(){
//     let result = document.getElementById("result")
//     let num = Number(document.getElementById("num").value)
//     let flag = true
    
//     if(num>1){
//         for(let i=2; i<num; i++){
//             if(num % i === 0){
//                 flag = false
//             }
//         }
//         result.textContent = flag ? "Its a prime" : "Its not a prime"
//     }
//     else{
//         result.textContent = `Enter a greater than 1`
//     }
// })

// let arr = [4, 2, 7, 1]

// let temp = [arr[0]]
// let store = []

// for(let i=0; i<arr.length - 1; i++){
//     // if(temp[i] > arr[i]){
//     //     store[i] = arr[i]
//     // }
//     for(let j = 0; j< arr.length-i-1; j++){
//         if(arr[j] > arr[j + 1]){
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr)

// let arr = [1,2,2,3,4,4]
// let temp = []

// let uniArr = arr.filter((value, index) => arr.indexOf(value) === index)
// console.log(uniArr)

// let arr = [5, 9, 2, 8]

// arr.sort((a,b) => b - a)

// console.log(arr[1])

// let arr = [5, 9, 2, 8]

// let temp

// for(let i = 0; i< arr.length; i++){
//     for(let j=0; j<arr.length-i-1; j++){
//         if(arr[j] > arr[j+1]){
//             temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr[arr.length-2])

// document.getElementById("btn").addEventListener("click", function(){
//     let num = Number(document.getElementById("num").value)
//     let result = document.getElementById("result")
//     let temp
//     let store = [0,1]
//     for(let i = 2; i<num; i++){
//         store[i] = store[i-1] + store[i - 2]
//     }
//     result.textContent = `${store}`
//     console.log(store)
//     // for(let i=0; i<num; i++){
//     //     result.textContent = `${store}`
//     // }

    
// })


// function isAmstrong(num) {
//     let digits = num.toString().split('').map(Number)
//     let n = digits.length

//     let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, n), 0)

//     return sum === num
// }
// console.log(isAmstrong(153))
// console.log(isAmstrong(123))


//  multipurpose function
// function gernerateFibonacci() {
//     let n = parseInt(document.getElementById("inputValue").value)
//     if(isNaN(n) || n<= 0){
//         document.getElementById("result").innerText = "Enter a positive number!"
//         return
//     }
//     let fib = [0,1]
//     for(let i=2; i<n; i++){
//         fib[i] = fib[i - 1] + fib[i -2]
//     }
//     document.getElementById("result").innerText = `Fibonacci (${n} terms): ${fib.slice(0,n)}`
// }
// function checkArmstrong() {
//     let num = parseInt(document.getElementById("inputValue").value)
//     if(isNaN(num)) {
//         document.getElementById("result").innerText = "Enter a valid number"
//         return
//     }
//     let digits = num.toString().split('').map(Number)
//     let n = digits.length
//     let sum = digits.reduce((acc, d) => acc + Math.pow(d,n), 0)
//     let result = (sum === num) ? `${num} is an Armstrong number` : `${num} is NOT an Armstrong number`;
//     document.getElementById("result").innerText = result
// }
//  function removeDuplicates() {
//     let input= document.getElementById("inputValue").value.trim()
//     if(!input) {
//         document.getElementById("result").innerText = "Enter some numbers!"
//         return
//     }
//     let arr = input.split(" ").map(Number)
//     let uniqueArr = [...new Set(arr)]
//     document.getElementById("result").innerHTML = `Without duplicates: ${uniqueArr}`
//  }

//  function findSecondLarge() {
//     let input = document.getElementById("inputValue").value.trim()
//     if(!input) {
//         document.getElementById("result").innerText = "Enter some numbers!"
//         return
//     }
//     let arr = [...new Set(input.split(" ").map(Number))].sort((a, b) => b - a)
//     if(arr.length < 2){
//         document.getElementById("result").innerText = "No second largest number!"
//         return
//     }
//     document.getElementById("result").innerText= `Second largest: ${arr[1]}`;
//  }

// function checkPrime() {
//     let num = parseInt(document.getElementById("inputValue").value)
//     if(isNaN(num) || num < 2) {
//         document.getElementById("result").innerText = "Enter a number greater than 1!"
//         return
//     }
//     let isPrime = true
//     for(let i = 2; i<= Math.sqrt(num); i++){
//         if(num % i === 0){
//             isPrime = false
//             break
//         }
//     }
//     document.getElementById("result").innerText = isPrime ? `${num} is Prime` : `${num} is not prime`
// }

// javascipt multi-feature App
// function generateFibonacci() {
//     let n = parseInt(document.getElementById("userInput").value)
//     if(isNaN(n) || n<= 0){
//         showResult("Enter a positive number!")
//         return
//     }
//     let fib = [0,1]
//     for(let i=2; i<n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     showResult(`Fibonacci (${n} terms): ${fib.slice(0, n).join(",")}`)
// }

// function checkArmstrong() {
//     let num =parseInt(document.getElementById("userInput").value)
//     if(isNaN(num)) {
//         showResult("Enter a valid number!")
//         return
//     }
//     let digits = num.toString().split('').map(Number)
//     let n = digits.length
//     let sum = digits.reduce((acc, d) => acc + Math.pow(d, n),0)
//     showResult(sum === num ? `${num} is an Armstrong number` : `${num} is NOT an Armstrong number`)
// }
// function checkPrime(){
//     let num = parseInt(document.getElementById("userInput").value)
//     if(isNaN(num) || num < 2){
//         showResult("Enter a number greater than 1")
//         return;
//     }
//     let isPrime = true
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num % i === 0){
//             isPrime = false
//             break
//         }
//     }
//     showResult(isPrime ? `${num} is Prime` : `${num} is NOT Prime`)
// }

// function reverseString() {
//     let str  = document.getElementById("userInput").value
//     if(!str){
//         showResult("Enter some text!")
//         return
//     }
//     let reversed = str.split("").reverse().join("")
//     showResult(`Reversed String: ${reversed}`)
// }

// function checkPalindrome() {
//     let str = document.getElementById("userInput").value
//     if(!str) {
//         showResult("Enter some text!")
//         return
//     }
//     let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//     let reversed = cleanStr.split("").reverse().join("")
//     showResult(cleanStr === reversed ? `"${str}" is a Palindrome` : `"${str}" is NOT a Palindrome`)
// }

// function showResult(msg){
//     document.getElementById("result").innerText = msg
// }

// Quiz App
// const quizData = [
//     {
//         question: "Which language runs in a web browser?",
//         options : ["Java", "C", "Python", "JavaScript"],
//         answer:"JavaScript"
//     },
//     {
//         question: "What does CSS stand for?",
//         options: ["Central Style Sheets", "Cascading Style Sheet", "Computer Style Sheets", "Creative Style Sheets"],
//         answer: "Cascading Style Sheet"
//     },
//     {
//         question: "What is the correct HTML elements for inserting a line break?",
//         options: ["<lb>", "<br>", "<brak>", "<line>"],
//         answer: "<br>"
//     }
// ]
// let currentIndex = 0;
// let score = 0

// function loadQuestion() {
//     const currentQuiz = quizData[currentIndex]
//     document.getElementById("question").innerText = currentQuiz.question
//     const optionsContainer = document.getElementById("options")
//     optionsContainer.innerHTML ="";
//     currentQuiz.options.forEach(option => {
//         const div = document.createElement("div")
//         div.classList.add("option")
//         div.innerText = option
//         div.onclick = () => selectOption(option)
//         // option.appendChild(div)
//         optionsContainer.appendChild(div)
//     })
// }

// function selectOption(selected) {
//     const correct = quizData[currentIndex].answer
//     if(selected === correct) {
//         score++
//     }
//     document.getElementById("result").innerText = 
//         selected === correct ? "Correct" : `Wrong Answer: ${correct}`;

// }

// function nextQuestion() {
//     if(currentIndex < quizData.length - 1){
//         currentIndex++;
//         document.getElementById("result").innerText = ""
//         loadQuestion()
//     }
//     else{
//         document.querySelector(".quiz-container").innerHTML = 
//         `<h2>Quiz Completed! </h2><p>Your Score: ${score} / ${quizData.length}</p>`
//     }
// }

// loadQuestion()

// WeatherApp
// async function getWeather() {
//     const city = document.getElementById("city").value.trim()
//     const apiKey = "YOUR_API-KEY";
//     if(!city) {
//         document.getElementById("weatherInfo").innerText = "Please enter a city name!"
//         return
//     }
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     try {
//         const response = await fetch(url)

//         if(!response.ok) {
//             throw new Error("City not found")
//         }
//         const data = await response.json()
//         const temp = data.main.temp
//         const condition = data.weather[0].description;
//         const icon = data.weather[0].icon

//         document.getElementById("weatherInfo").innerHTML = `
//             <p><strong>${data.name}</strong></p>
//             <p>Temperature: ${temp}C</p>
//             <p>Condition: ${condition}</p>
//             <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
//         `
//     }
//     catch(error){
//         document.getElementById("weatherInfo").innerText = "Error: " + error.message
//     }
// }

// let PlayerScore = 0
// let computerScore = 0

// function play(playChoice) {
//     const choice = ['rock', 'paper', 'scissors']
//     const ComputerChoice = choice[Math.floor(Math.random() * 3)]

//     let result = ''
//     if(playChoice === ComputerChoice){
//         result = `It's a draw! Both chose ${playChoice}`
//     }else if(
//         (playChoice === 'rock' && ComputerChoice === 'scissors') ||
//         (playChoice === 'paper' && ComputerChoice === 'rock') ||
//         (playChoice === 'scissors' && computerScore === 'paper')
//     ){
//         result = `You win! ${playChoice} beats ${ComputerChoice}`
//         PlayerScore++
//     }else{
//         result = `You lose! ${ComputerChoice} beats ${playChoice}`
//         computerScore++
//     }

//     document.getElementById('result').innerText = result
//     document.getElementById('score').innerText = `player: ${PlayerScore} | Computer: ${computerScore}`
// }

// let secretNumber = Math.floor(Math.random() * 100) + 1
// let attempts = 0

// function checkGuess() {
//     const guess = Number(document.getElementById('guessInput').value)
//     attempts++

//     let feedback = ''
//     if(guess === secretNumber){
//         feedback = `Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempts`
//     }else if(guess > secretNumber){
//         feedback = `Too high!  Try again`
//     }
//     else if(guess < secretNumber){
//         feedback = `Too low! Try again`
//     }else{
//         feedback = `Please enter a valid number`
//     }
//     document.getElementById('feedback').innerText = feedback
//     document.getElementById('attempts').innerText = `Attempts: 0`;
//     document.getElementById('guessInput').value = ''
// } 


// document.getElementById("Changer").addEventListener("click", function(){
//     let color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`
//     let detailes = document.querySelector('.base')
//     detailes.style.backgroundColor = color
// })

// document.getElementById("timer").addEventListener("click", function(){
    
//     const now = new Date()
//     const timeString = now.toLocaleTimeString()
//     document.getElementById('result').textContent = timeString
// })

// document.getElementById("add").addEventListener("click", function() {
//     let layout = document.getElementById("layout")

//     let kutta = document.createElement('imput')
//     kutta.type = "text"
    
//     layout.appendChild(kutta)
// })

// const taskInput = document.getElementById('taskInput')
// const addBtn = document.getElementById('add')
// const taskList = document.getElementById('taskList')

// let tasks = JSON.parse(localStorage.getItem('tasks')) || []

// function saveTasks() {
//     localStorage.setItem('tasks', JSON.stringify(tasks))
// }

// function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li')
//         if(task.completed) li.classList.add('completed')

//         const span = document.createElement('span')
//         span.textContent = task.text

//         span.addEventListener('click', () => {
//             tasks[index].completed = !tasks[index].completed
//             saveTasks()
//             renderTasks()
//         })
//         const deleteBtn = document.createElement('button')
//         deleteBtn.textContent = 'Delete'
//         deleteBtn.classList.add('delete-btn')
//         deleteBtn.addEventListener('click', () => {
//             tasks.splice(index, 1)
//             saveTasks()
//             renderTasks()
//         })

//         li.appendChild(span)
//         li.appendChild(deleteBtn)
//         li.appendChild(li)
//     })
// }

// addBtn.addEventListener('click', () => {
//     const taskText = taskInput.ariaValueMax.trim()
//     if(taskText !== ''){
//         tasks.push({text: taskText, completed: false})
//         taskInput.value = '';
//         saveTasks();
//         renderTasks()
//     }
// })

// taskInput.addEventListener('keypress', (e) => {
//     if(e.key === 'Enter'){
//         addBtn.click()
//     }
// })

// renderTasks()


// const quiz = [
//     {
//         question: "What is 2 + 2? ",
//         options: ["3", "4", "5", "6"],
//         answer: "4"
//     },
//     {
//         question: "What is the capital of France?", 
//         options: ["London", "Berlin", "Paris", "Rome"],
//         answer: "Paris"
//     },
//     {
//         question: "Which language runs in a browser?", 
//         options: ["Python", "Java", "Javascript", "C++"],
//         answer: "Javascript"
//     }
// ]

// let currentQuestion = 0

// const questionEl = document.getElementById('question')
// const optionBtn = document.querySelectorAll('.option')
// const feedbackEl = document.getElementById('feedback')

// function loadQuestion() {
//     const q = quiz[currentQuestion]
//     questionEl.textContent = q.question
//     optionBtn.forEach((btn, index) => {
//         btn.textContent = q.options[index]
//         btn.disabled = false
//     })
//     feedbackEl.textContent = ''
// }

// optionBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const selected = btn.textContent
//         const correct = quiz[currentQuestion].answer

//         if(selected === correct){
//             feedbackEl.textContent = "Correct!"
//             feedbackEl.style.color = "green"
//         }
//         else{
//             feedbackEl.textContent = `Wrong! Correct answer: ${correct}`;
//             feedbackEl.style.color = "red"
//         }
//         optionBtn.forEach(b => b.disabled = true)

//         setTimeout(() => {
//             currentQuestion++
//             if(currentQuestion < quiz.length){
//                 loadQuestion()
//             }
//             else{
//                 questionEl.textContent = "Quiz Finished!"
//                 feedbackEl.textContent = '';
//                 optionBtn.forEach(b => b.style.display = 'none')
//             }
//         }, 1500)
//     })
// })
// loadQuestion()

// const billInput = document.getElementById('bill')
// const tipInput = document.getElementById('tip')
// const peopleInput = document.getElementById('people')
// const tipPerPersonEl = document.getElementById('tipPerPerson')
// const totalPerPersonEl = document.getElementById('totalPerPerson')

// function calculateTip(){
//     const bill = parseFloat(billInput.value) || 0
//     const tipPercent = parseFloat(tipInput.value) || 0
//     const people = parseInt(peopleInput.value) || 1

//     if(people <= 0){
//         tipPerPersonEl.textContent = '0.00'
//         totalPerPersonEl.textContent = '0.00'
//         return
//     }

//     const totalTip = bill * (tipPercent / 100)
//     const tipPerPerson = totalTip / people
//     const totalPerPerson = (bill + totalTip) / people

//     tipPerPersonEl.textContent = tipPerPerson.toFixed(2)
//     totalPerPersonEl.textContent = totalPerPerson.toFixed(2)
// }

// billInput.addEventListener('input', calculateTip)
// tipInput.addEventListener('input', calculateTip)
// peopleInput.addEventListener('input', calculateTip)


// document.addEventListener('DOMContentLoaded', () => {
//     const quotes = [
//     "The best way to get started is to quit talking and begin doing.",
//     "Don't let yesterday take up too much of today",
//     "It's not whether you get knocked down, it's whether you get up.",
//     "If you are working on something exciting, it will keep you get up.",
//     "Success is not in what you have, but who you are.",
//     "Hard work beats talent when talent doesn't work hard."
//     ]

//     const quoteEl = document.getElementById('quote')
//     const newQuoteBtn = document.getElementById('newQuoteBtn')

//     function showRandomQuote() {
//         const randomIndex = Math.floor(Math.random() * quotes.length)
//         quoteEl.textContent = quotes[randomIndex]
//     }
//     newQuoteBtn.addEventListener('click', showRandomQuote)
// })


// let expenses = JSON.parse(localStorage.getItem('expenses')) || []

// const expenseList = document.getElementById('expenseList')
// const totalAmountEl = document.getElementById('totalAmount')
// const addExpenseBtn = document.getElementById('addExpenseBtn')
// const expenseNameInput = document.getElementById('expenseName')
// const expenseAmountInput = document.getElementById('expenseAmount')

// function renderExpenses() {
//     expenseList.innerHTML = '';
//     let total = 0;
//     expenses.forEach((expense, index) => {
//         total += expense.amount
//         const li = document.createElement('li')
//         li.innerHTML = `
//             ${expense.name} - $${expense.amount.toFixed(2)}
//             <span class="delete-btn" data-index="${index}">X</span>
//         `;
//         expenseList.appendChild(li)
//     })
//     totalAmountEl.textContent = total.toFixed(2)

//     document.querySelectorAll('.delete-btn').forEach(btn => {
//         btn.addEventListener('click', () => {
//             const index = btn.getAttribute('data-index')
//             expenses.splice(index, 1)
//             localStorage.setItem('expenses', JSON.stringify(expenses))
//             renderExpenses()
//         })
//     })
// }

// addExpenseBtn.addEventListener('click', () => {
//     const name = expenseNameInput.value.trim()
//     const amount = parseFloat(expenseAmountInput.value)
//     if(name && !isNaN(amount) && amount > 0){
//         expenses.push({name, amount})
//         localStorage.setItem('expenses', JSON.stringify(expenses))
//         expenseNameInput.value = ''
//         expenseAmountInput.value = ''
//         renderExpenses()
//     }
//     else{
//         alert('Please enter a valid name and amount.')
//     }
// })
// renderExpenses()

// const paragraphEl = document.getElementById('paragraph')
// const typingInput = document.getElementById('typingInput')
// const wpmEl = document.getElementById('wpm')
// const errosEl = document.getElementById('errors')

// const text = paragraphEl.textContent
// let startTime = null
// let errors = 0

// typingInput.addEventListener('input', () => {
//     if (!startTime) startTime = new Date()
//     const typed = typingInput.value
//     errors = 0

//     for(let i=0; i<typed.length; i++){
//         if(typed[i] !== text[i]) errors++
//     }

//     errosEl.textContent = errors

//     const now = new Date()
//     const minutes= (now - startTime) / 100 /60;
//     const wordsTyped = typed.trim().split(/\s+/).length
//     const wpm = Math.round(wordsTyped / minutes)
//     wpmEl.textContent = isNaN(wpm) ? 0 : wpm

//     if(typed === text) {
//         typingInput.disabled = true
//     }
// })

// const toggleBtn = document.getElementById('toggleBtn')
// const body = document.body

// const savedTheme = localStorage.getItem('theme')
// if(savedTheme) {
//     body.classList.add(savedTheme)
// }
// else{
//     body.classList.add('light')
// }

// toggleBtn.addEventListener('click', () => {
//     if(body.classList.contains('light')){
//         body.classList.replace('light','dark')
//         localStorage.setItem('theme', 'dark')
//     }
//     else{
//         body.classList.replace('dark', 'light')
//         localStorage.setItem('theme', 'light')
//     }
// })

// document.getElementById('btn').addEventListener("click", function(){
//     let result = document.getElementById('result')

//     let now = new Date()
//     let timer = now.toLocaleTimeString()
//     result.textContent = timer
// })

// function updateClock() {
//     const now = new Date()
//     const hours =String(now.getHours()).padStart(2, '0')
//     const minutes = String(now.getMinutes()).padStart(2, '0')
//     const seconds = String(now.getSeconds()).padStart(2,'0')

//     document.getElementById('result').textContent=`${hours}:${minutes}:${seconds}`
// }

// const textarea = document.getElementById('msg')
// const counter = document.getElementById('count')
// const LIMIT = 100
// const  WARN_THRESHOLD = 20

// function updateCounts() {
//     const remaining = LIMIT - textarea.value.length
//     counter.textContent = `${remaining} character${remaining === 1 ? '' : 's'} remaining`;

//     counter.classList.remove('warn', 'danger')
//     if(remaining <= 0){
//         counter.classList.add('danger')
//     }
//     else if(remaining <= WARN_THRESHOLD){
//         counter.classList.add('warn')
//     }
// }

// updateCounts()
// textarea.addEventListener('input', updateCounts)

// const passwordInput = document.getElementById('password')
// const toggleBtn = document.getElementById('toggleBtn')

// toggleBtn.addEventListener('click', () => {
//     if(passwordInput.type === 'password'){
//         passwordInput.type = 'text'
//         toggleBtn.text = '🙈'
//     }else{
//         passwordInput.type = 'password'
//         toggleBtn.textContent = '👁'
//     }
// })

// const timeInput = document.getElementById('timeInput')
// const startBtn = document.getElementById('startBtn')
// const display = document.getElementById('display')

// let countdownInterval

// startBtn.addEventListener('click', () => {
//     let time = parseInt(timeInput.value)

//     if(isNaN(time) || time <= 0){
//         alert('Please enter a valid time in seconds')
//         return
//     }
//     clearInterval(countdownInterval)

//     display.textContent = `Time: ${time}`;
//     countdownInterval = setInterval(() => {
//         time--;
//         display.textContent =`Time: ${time}`

//         if(time <= 0){
//             clearInterval(countdownInterval)
//             alert('⏰ Time is up!')
//         }
//     },1000)
// })


// CUSTOM MODAL POPUP
// const modal = document.getElementById('myModal')
// const openBtn = document.getElementById('openModalBtn')
// const closeBtn = document.getElementById('closeBtn')

// openBtn.addEventListener('click', () => {
//     modal.style.display = 'block'
// })

// closeBtn.addEventListener('click', () => {
//     modal.style.display = "none"
// })
// window.addEventListener('click', (e) => {
//     if(e.target === modal){
//         modal.style.display = 'none'
//     }
// })
// window.addEventListener('keydown', (e) => {
//     if(e.key === 'Escape'){
//         modal.style.display = 'none'
//     }
// })
// END OF CUSTOM MODAL POPUP


// DRAG & DROP TO-DO
// const tasks = document.querySelectorAll('.task')
// const columns = document.querySelectorAll('.column')

// let draggedTask = null

// tasks.forEach(task => {
//     task.addEventListener('dragstart', (e) => {
//         draggedTask = task
//         e.dataTransfer.effectAllowed = "move"
//         task.style.opacity = '0.5'
//         // setTimeout(() => task.style.display = 'none', 0)
//     })
//     task.addEventListener('dragend', () => {
//         draggedTask.style.opacity = '1'
//         draggedTask = null
//         // setTimeout(() => {
//         //     draggedTask.style.display = 'block'
//         //     draggedTask = null
//         // }, 0)
//     })
// })

// columns.forEach(column => {
//     column.addEventListener('dragover', e => e.preventDefault())
//     column.addEventListener('drop', e => {
//         e.preventDefault()
//         if(draggedTask){
//             column.appendChild(draggedTask)
//         }
//     })
// })
// END OF TO-DO

// const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'
// const btn = document.getElementById('getWeatherBtn')
// const weatherInfo = document.getElementById('weatherInfo')
// const locationEl = document.getElementById('location')
// const tempEl = document.getElementById('temp')
// const humidityEl = document.getElementById('humidity')
// const description = document.getElementById('description')
// const iconEl = document.getElementById('icon')

// btn.addEventListener('click', () => {
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(position => {
//             const lat = position.coords.latitude
//             const lon = position.coords.longitude

//             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
//             .then(response => response.json())
//             .then(data => {
//                 weatherInfo.classList.remove('hidden')
//                 locationEl.textContent = data.name + ',' +data.sys.country
//                 tempEl.textContent = data.main.temp.toFixed(1)
//                 humidityEl.textContent = data.main.humidity
//                 description.textContent = data.weather[0].description
//                 iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

//             })
//             .catch(err => alert('Error frtching weather: '+ err))
//         }, () => alert('Geolocation permission denied.'))
//     }
//     else{
//         alert('Geolocation is not supported by your browser')
//     }
// })

// const form = document.getElementById('signupForm')
// const nameInput = document.getElementById('name')
// const emailInput = document.getElementById('email')
// const passwordInput = document.getElementById('password')

// function showError(input, message){
//     const errorEl = input.nextElementSibling
//     errorEl.textContent = message
//     input.classList.add('invalid')
// }

// function clearInput(input) {
//     const errorEl = input.nextElementSibling
//     errorEl.textContent = ''
//     input.classList.remove('invalid')
// }

// nameInput.addEventListener('input', () => {
//     if(nameInput.value.trim() === ''){
//         showError(nameInput, 'Name is required')
//     }
//     else{
//         clearError(nameInput)
//     }
// })

// emailInput.addEventListener('input', () => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!regex.test(emailInput.value.trim())){
//         showError(emailInput, 'Email is not valid')
//     }
//     else{
//         clearError(emailInput)
//     }
// })

// passwordInput.addEventListener('input', () => {
//     if(passwordInput.value.length<6){
//         showError(passwordInput, 'Password must be at least 6 characters')
//     }
//     else{
//         clearError(passwordInput)
//     }
// })
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if(
//         nameInput.value.trim() !== '' &&
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()) &&
//         passwordInput.value.length >= 6
//     ){
//         alert('Form submitted successfully')
//         form.reset()
//     }
//     else{
//         alert('Please fix errors before submitting')
//     }
// })



// function show() {
//     alert("Hello!")
// }


// document.getElementById('btn').addEventListener("click", function(){
//     let username = document.getElementById("username").value
//     let password = document.getElementById("password").value

//     console.log(username)
//     console.log(password)

//     if(username === '' || password === ''){
//         alert('Please fill username and password')
//     }
//     else{
//         alert('submitted sucessfully')
//     }

// })


// document.getElementById('btn').addEventListener("click", function(){
//     let text = document.getElementById("text")
//     let btn = document.getElementById("btn")
//     document.body.classList.toggle('bg')

//     text.textContent = "Dark Mode"
//     text.classList.toggle("ttext")
//     btn.classList.toggle("bbtn")
// })

// let incre = 0
// // let decre
// document.getElementById("btn-in").addEventListener("click", function(){
//     let count = document.getElementById("count")
//     console.log(count)
//     incre = incre + 1
//     count.textContent = incre
// })

// document.getElementById("btn-de").addEventListener("click", function() {
//     let count = document.getElementById("count")
//    incre = incre - 1
//     count.textContent = incre
//     console.log(decre)
// })
// // //     

// const taskInput = document.getElementById('taskInput')
// const addTaskBtn = document.getElementById('addtask')
// const taskList = document.getElementById('taskList')

// let tasks = JSON.parse(localStorage.getItem('tasks')) || []
// renderTasks()

// addTaskBtn.addEventListener('click', () => {
//     const taskText = taskInput.value.trim()
//     if(taskText === '') return

//     const newTask = { text: taskText, completed: false}
//     tasks.push(newTask)
//     saveTasks()
//     renderTasks()
//     taskInput.value = ''
// })

// function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li')
//         li.textContent = task.text
//         if(task.completed) li.classList.add('completed')

//             li.addEventListener('click', () => {
//                 tasks[index].completed = !tasks[index].completed
//                 saveTasks()
//                 renderTasks()
//             })
            
//             const delBtn = document.createElement('button')
//             delBtn.textContent = 'X'
//             delBtn.addEventListener('click', (e) => {
//                 e.stopPropagation()
//                 tasks.splice(index, 1)
//                 saveTasks()
//                 renderTasks()
//             })
//             li.appendChild(delBtn)
//             taskList.appendChild(li)
//     })
// }

// function saveTasks() {
//     localStorage.setItem('task', JSON.stringify(tasks))
// }

// const slides = document.getElementById('slides')
// const nextBtn = document.getElementById('next')
// const prevBtn = document.getElementById('prev')
// const totalSlides = slides.children.length

// let index = 0

// nextBtn.addEventListener('click', () => {
//     index = (index + 1) % totalSlides
//     updateSlide()
// })

// prevBtn.addEventListener('click', () => {
//     index = (index - 1 + totalSlides) % totalSlides
//     updateSlide()
// })

// function updateSlide(){
//     slides.style.transform = `translateX(${-index * 600}px)`
// }

// const quizData = [
//     {
//         question: "What is the capital of France?",
//         options: ["Paris", "London", "Berlin", "Madrid"],
//         answer: "Paris"
//     },
//     {
//         question: "Which language runs in a web browser?",
//         options: ["java", "c", "Python", "JavaScript"],
//         answer: "Javascript"
//     },
//     {
//         question: "Who wrote Hamlet ?",
//         options: ["Charles Dickens", "Willian Shakespeare", "Mark Twain", "J.K Rowling"],
//         answer: "Willian Shakespeare"
//     },
//     {
//         question: "What is 5 + 7?",
//         options: ["10", "12", "13", "11"],
//         answer: '12'
//     }
// ]

// const questionEl = document.getElementById("question")
// const optionsEl = document.getElementById("options")
// const quizContainer = document.getElementById("quiz")

// let currentQuiz = 0
// let score = 0

// function loadQuiz() {
//     const currentQuizData = quizData[currentQuiz]
//     questionEl.textContent = currentQuizData.question
//     optionsEl.innerHTML = ''
    
//     currentQuizData.options.forEach(option => {
//         const button = document.createElement("button")
//         button.textContent = option
//         button.addEventListener("click", () => selectOption(option))
//         optionsEl.appendChild(button)
//     })
// }

// function selectOption(selected) {
//     if(selected === quizData[currentQuiz].answer){
//         score++
//     }
//     currentQuiz++;
//     if(currentQuiz < quizData.length){
//         loadQuiz()
//     }
//     else{
//         showScore()
//     }
// }

// function showScore() {
//     quizContainer.innerHTML = `
//         <div class = "score">You scored ${score} / ${quizData.length}</div>
//         <button id="restart" onclick="restartQuiz()">Reset Quiz</button>
//     `;
// }

// function restartQuiz() {
//     currentQuiz = 0;
//     score = 0
//     loadQuiz()
//     quizContainer.innerHTML = `
//         <div class="question" id="question"></div>
//         <div class="options" id="options"></div>
//     `;
//     loadQuiz()
// }
// loadQuiz()

// const tracker = document.getElementById('tracker')

// document.addEventListener('mousemove', (e) => {
//     const x = e.clientX
//     const y = e.clientY
//     tracker.textContent = `X: ${x}, Y: ${y}`
// })


// const display = document.getElementById('display')
// const buttons = document.querySelectorAll('.buttons button')

// let currentInput =''

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const value = button.textContent

//         if(value === 'C'){
//             currentInput = ''
//             display.value = ''
//         }
//         else if(value === '=') {
//             try{
//                 display.value = eval(currentInput)
//                 currentInput = display.value
//             }catch{
//                 display.value = 'Error'
//                 currentInput = ''
//             }
//         }else{
//             currentInput += value
//             display.value = currentInput
//         }
//     })
// })

// const passwordInput = document.getElementById('password')
// const generateBtn = document.getElementById('generate')

// function generatePassword(length = 12) {
//     const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?"
//     let password =""
//     for(let i=0; i< length; i++){
//         const randomIndex = Math.floor(Math.random() * chars.length)
//         password += chars[randomIndex]
//     }
//     return password
// }

// generateBtn.addEventListener('click', () => {
//     const newPassword = generatePassword(12)
//     passwordInput.value = newPassword
// })

// const headers = document.querySelectorAll('.accordion-header')

// headers.forEach(header => {
//     header.addEventListener('click', () => {
//         header.classList.toggle('active')
//         headers.forEach(h => {
//             if(h !== header) h.classList.remove('active')
//         })
//     })
// })

// class TaskManager{
//     constructor() {
//         this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
//         this.taskList = document.getElementById('task-list')
//         this.taskInput = document.getElementById('task-input')
//         this.addBtn = document.getElementById('add-task')

//         this.addBtn.addEventListener('click', ()=> this.addTask())
//         this.renderTasks()
//     }
//     saveTasks(){
//         localStorage.setItem('tasks', JSON.stringify(this.tasks))
//     }
//     addTask(){
//         const taskText = this.taskInput.value.trim()
//         if(!taskText) return

//         const task = {
//             id: Date.now(),
//             text: taskText,
//             completed: false
//         };
//         this.tasks.push(task)
//         this.taskInput.value = ''
//         this.saveTasks()
//         this.renderTasks()
//     }
//     toggleTask(id) {
//         this.tasks = this.tasks.map(task =>
//             task.id === id ? {...task, completed: !task.completed} : task
//         )
//         this.saveTasks()
//         this.renderTasks()
//     }
//     deleteTasks(id) {
//         this.tasks = this.tasks.filter(task => task.id !== id)
//         this.saveTasks()
//         this.renderTasks()
//     }
//     renderTasks(){
//         this.taskList.innerHTML = '';
//         this.tasks.forEach(task => {
//             const li = document.createElement('li')
//             li.textContent = task.text
//             li.style.textDecoration = task.completed ? 'Line-thorugh' : 'none'
//             li.addEventListener('click', () => this.toggleTask(task.id))

//             const deleteBtn = document.createElement('button')
//             deleteBtn.textContent = 'X'
//             deleteBtn.addEventListener('click', (e) => {
//                 e.stopPropagation()
//                 this.deleteTasks(task.id)
//             })
//             li.appendChild(deleteBtn)
//             this.taskList.appendChild(li)
//         })
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     new TaskManager()
// })

// class WeatherApp{
//     constructor(apiKey){
//         this.apiKey = apiKey
//         this.cityInput = document.getElementById('city-input')
//         this.searchBtn = document.getElementById('search-weather')
//         this.resultDiv = document.getElementById('weather-result')

//         this.searchBtn.addEventListener('click', () => this.getWeather())
//     }
//     async getWeather() {
//         const city = this.cityInput.value.trim()
//         if(!city) {
//             this.resultDiv.textContent = "Please enter a city name!"
//             return
//         }
//         this.resultDiv.textContent = "Loading..."
//         try{
//             const response = await fetch(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
//             )
//             if (!response.ok) throw new Error("City not found!")
//             const data = await response.json()
//             this.displayWeather(data)

//         }catch(error) {
//             this.resultDiv.textContent = error.message
//         }
//     }
//     displayWeather(data){
//         const { name, main, weather} = data
//         this.resultDiv.innerHTML = `
//             <h3>${name}</h3>
//             <p>Temperature: ${main.temp}°C </p>
//             <p>Condition: ${weather[0].description} </p>
//         `;
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const app = new WeatherApp('YOUR_API_KEY_HERE')
// })

// class QuizApp{
//     constructor(question){
//         this.questions = question
//         this.cureentIndex = 0
//         this.score = 0

//         this.container = document.getElementById("quiz-container")
//         this.renderQuestion()
//     }
//     renderQuestion() {
//         if(this.cureentIndex >= this.questions.length){
//             this.showResult()
//             return
//         }
//         const q = this.questions[this.cureentIndex]
//         this.container.innerHTML = `
//             <h2>${q.question}</h2>
//             <ul>
//                 ${q.options
//                     .map(
//                         (opt, index) =>
//                             `<li><button data-index="${index}">${opt}</button></li>`
//                     )
//                     .join("")
//                 }
//             </ul>
//         `;
//         const buttons = this.container.querySelectorAll("button")
//         buttons.forEach((btn) => 
//             btn.addEventListener("click", (e) => this.checkAnswer(e))
//         )
//     }
//     checkAnswer(event) {
//         const selectedIndex = parseInt(event.target.dataset.index)
//         const correctIndex = this.questions[this.cureentIndex].answer
//         if(selectedIndex === correctIndex){
//             this.score++
//         }
//         this.cureentIndex++
//         this.renderQuestion()
//     }
//     showResult() {
//         this.container.innerHTML = `
//             <h2>Quiz Completed</h2>
//             <p>Your score: ${this.score} / ${this.questions.length}</p>
//             <button id="restart">Restart Quiz</button>
//         `;
//         document
//             .getElementById("restart")
//             .addEventListener("click", () => this.restart())
//     }
//     restart(){
//         this.cureentIndex = 0
//         this.score = 0
//         this.renderQuestion()
//     }
// }

// const questions = [
//     {
//         question: "What is 2 + 2 ?",
//         options: ["3", "4", "5", "6"],
//         answer: 1
//     },
//     {
//         question: "Which is a JS framework?",
//         options: ["React", "HTML", "CSS", "Python"],
//         answer: 0
//     },
//     {
//         question: "which lanuage is used for styling web pages?",
//         options: ["HTML", "Python", "CSS", "Java"],
//         answer: 2
//     },
//     {
//         question: "Which company developed Javascript?",
//         options: ["Microsoft", "Netscape", "Google", "Apple"],
//         answer: 1
//     },
//     {
//         question: "What does DOM stands for?",
//         options: [
//             "Document Object Model",
//             "Data Object Model",
//             "Desktop Object Modal",
//             "Digital Object Management"
//         ],
//         answer: 0
//     },
//     {
//         question: "What is the output of 'typeof null' in javaScript?",
//         options: ["Object", "null", "undefined", "number"],
//         answer: 0
//     },
//     {
//         question: "Which HTML tag is used to include JavaScript?",
//         options: ["<js>", "<script>", "<javascript>", "<code>"],
//         answer: 1
//     },
//     {
//         question: "Which operator is used for strict equality in JavaScript?",
//         options: ["=","==","===","!="],
//         answer: 2
//     },
//     {
//         question: "Which method converts JSON to a JavaScript object?",
//         options: ["JSON.parse()", "JSON.stringfy()", "JSON.Object()", "JSON.convert()"],
//         answer: 0
//     },
//     {
//         question: "What is the correct way to write a javaScript arrow function?",
//         options: [
//             "function() => {}",
//             "() => {}",
//             "=> function() {}",
//             "function => () {}"
//         ],
//         answer: 1
//     }
// ];
// document.addEventListener("DOMContentLoaded", () => {
//     new QuizApp(questions)
// })

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#taskInput")
    const addBtn = document.querySelector('#addTask')
    const taskList = document.querySelector('#taskList')

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    renderTasks()

    addBtn.addEventListener("click", addTask)

    function addTask() {
        const task = input.value.trim()
        if(task === "") return
        tasks.push({ text : task, completed: false})
        input.value = ""
        saveTasks()
        renderTasks()
    }
    function renderTasks() {
        taskList.innerHTML = ""
        tasks.forEach((task, index) => {
            const li = document.createElement("li")
            li.innerHTML = `
                <span style="text-decoration: ${task.completed ? 'Line-through' : 'none'}">
                    ${task.text}
                </span>
                <button onclick = "toggleComplete(${index})">✔</</button>
                <button onClick = "deleteTask(${index})">X</button>
            `;
            taskList.appendChild(li)
        })
    }
    window.toggleComplete = function (index) {
        tasks[index].completed = !tasks[index].completed
        // tasks.splice(index, 1)
        saveTasks()
        renderTasks()
    }
    window.deleteTask = function(index) {
        tasks.splice(index, 1)
        saveTasks()
        renderTasks()
    }
    function saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})



//                                   