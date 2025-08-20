

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

let num1 = 5
let  num2 =10
if(num1<num2){
    console.log("wow")
}
else{
    console.log("not much")
}