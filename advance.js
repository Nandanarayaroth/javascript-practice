// 1) ===> remainder of two numbers  -> with %

// let a = Number(prompt("Enter first number"));

// let b = Number(prompt("Enter second number"));

// let remainder;

// function getRemainder(){
//     remainder = a%b
//     console.log("The remainder",remainder)
// }
// getRemainder()

//   ==> remainder of two numbers -> without %

// let num1 = Number(prompt("Enter First number"))
// let num2 = Number(prompt("Enter second number"))

// let remdr;

// function getRemdr(){
//     let quotient = Math.floor(num1/num2)

//     remdr = num1 - (num2 * quotient) 
//     console.log("The remainder is ", remdr)
// }

// getRemdr()

// using html
// document.getElementById("get-remainder").addEventListener("click", function () {
//     let num1 = Number(document.getElementById("upp").value)
//     let num2 = Number(document.getElementById("down").value)
//     let result = document.getElementById("result")

//     let remdr
//     let quotient
//     quotient = Math.floor(num1/num2)

//     remdr = num1 - (num2 * quotient)
//     console.log("this is remainderr", remdr)
//     result.textContent = `
//     this is the result ${remdr}
//     `
// })
// 2) ===> find the average of the numbers of an array

// let size = 4;
// let Arr = [1,2,3,4]
// let sum = 0
// let avg
// for(let i = 0; i<size; i++){
//     sum = sum + Arr[i]
//     console.log(sum)
// }
// console.log("sum is over")
// avg = sum / size

// console.log("average is ", avg)

// using html
// let inputCreated = false

// document.getElementById("sumt").addEventListener("click", function(event){
//     event.preventDefault();
//     const container = document.getElementById("inputcontr")
//     const size = Number(document.getElementById("size").value)
//     const values = []
//     if(! inputCreated)
//     {
        
//         // const container = document.getElementById("inputcontr")

//         container.innerHTML = "";

//         if(!isNaN(size) && size > 0){
//             for(let i = 0; i < size; i++){
//                 const input =document.createElement("input")
//                 input.type = "number"
//                 input.placeholder = `enter ${i+1} value`;
//                 input.classList.add("array-input")
//                 container.appendChild(input)
//                 container.appendChild(document.createElement("br"))
//             }
//             inputCreated = true
//             this.textContent = "Get Array"
//         }
//     }else{
//         const inputs = document.querySelectorAll(".array-input")
        
//         inputs.forEach(input => {
//             values.push(Number(input.value))
//         })
//         document.getElementById("result").textContent = `Array: [${values.join(", ")}]`;
        

        
//     }
    
//     function getavg(){
//         let sum = 0
//         let avgg
//         for(let i =0; i< size; i++){
//             sum = sum + values[i]
//             // console.log("this is inside",sum)
//         }
//         avgg = sum / size
//         console.log(avgg)
//         let result = document.getElementById("result")
//         result.innerHTML = ""
//         result.textContent = `
//             average is ${avgg}
//         `
//     }
//     getavg()
// })


// 3) ===> add two matrix

// let rows1 = 3;
// let cols1 = 4;
// let matrix1 = []


// for(let i = 0; i < rows1; i++){
//     matrix1[i] = []
//     for(let j = 0; j < cols1; j++){
//         let valu1 = Math.floor(Math.random() * 10) + 1
//         matrix1[i][j] = valu1;
//     }
// }
// console.log(matrix1)

// let rows2 = 3
// let cols2 = 4
// let matrix2 = []

// for(let i=0; i<rows2; i++){
//     matrix2[i] = []
//     for(let j=0; j<cols2; j++){
//         let valu2 = Math.floor(Math.random() *10) +1
//         matrix2[i][j] = valu2
//     }
// }
// console.log(matrix2)

// let rows3 = 3
// let cols3 = 4
// let matrix3 = []

// for(let i=0; i<rows3; i++){
//     matrix3[i] =[]
//     for(let j=0; j<cols3; j++){
//         matrix3[i][j] = matrix1[i][j] + matrix2[i][j]
//     }
// }
// console.log(matrix3)

// user input

// let row = Number(prompt("Enter number of rows"))
// let col = Number(prompt("Enter number of columns"))


// let matrix1 = []
// let matrix2 = []
// let matrix3 = []
// for(let i=0; i<row; i++){
//     matrix1[i] =[]
//     matrix2[i] =[]
//     matrix3[i] =[]
//     for(let j=0; j<col; j++){
//         let val = Math.floor(Math.random() * 10) + 1
//         matrix1[i][j] = val
//         matrix2[i][j] = val
//         matrix3[i][j] = matrix1[i][j] + matrix2[i][j]
//     }
// }
// console.log(matrix1)
// console.log(matrix2)
// console.log(matrix3)

// 4) ===> to find the area of rectangel 

// document.getElementById("get-are").addEventListener("click", function() {
//     let breadth = Number(document.getElementById("breadth").value)
//     let length = Number(document.getElementById("length").value)

//     let area
//     if(length && breadth){
//         area = length * breadth
//     }
//     let result = document.getElementById("result")
//     result.textContent = `
//         area of the rectange ${area}
//     `;
// })

// 5) ===> check the given matrix is diagonal or not
// let col = 3
// let row = 3
// let flag = 0

// let matrix = []
// for(let i = 0; i< col; i++){
//     matrix[i] = []
//     for(let j = 0; j< row; j++){
//         let val = Math.floor(Math.random() * 10) + 1
//         // val = 3
//         matrix[i][j] = val
//     }
// }
// console.log(matrix)
// for(let i =0; i<col; i++){
//     for(let j =0; j<row; j++){
//         if( i==j){
//            if (matrix[i][j] > 0){
//                 flag = 1
//            } 
//         }
//         else if( i!=j){
//             if(matrix[i][j] === 0){
//                 flag = flag + 1
//             }
//         }
        
//     }
// }
// if(flag > 1){
//     console.log("it is diagonal")
// }
// else{
//     console.log("not diagonal")
// }

// using user input
// document.getElementById("entry").addEventListener("click", function() {
//     let rowcolum = Number (document.getElementById("rcb").value)
//     let matrix = []
//     let flag = 0

//     let container = document.getElementById("matrix-cntr")
//     container.innerHTML = "";


//     for(let i=0; i<rowcolum; i++){
//         for(let j=0; j<rowcolum; j++){
//             let input = document.createElement("input")
//             input.type = "number";
//             input.style.width = "50px"
//             input.style.margin = "5px"
//             input.placeholder = `${i},${j}`;
//             input.classList.add("matrix-input");
//             container.appendChild(input)
//         }
//         container.appendChild(document.createElement("br"))
//     }
//     let btn = document.createElement("button")
//     btn.textContent = "CHECKK"
//     btn.type = "button"
//     container.appendChild(btn)
//     const result = document.getElementById("result")

//     btn.addEventListener("click", function() {
//         let inputs = document.querySelectorAll(".matrix-input")
//         // let matrix = []
//         let isDigona = true
//         let index = 0
//         for (let i=0; i<rowcolum; i++){
//             for(let j=0; j<rowcolum; j++){
//                 index = i * rowcolum + j
//                 let val = Number(inputs[index].value)
//                 if( i !== j && val !== 0){
//                     isDigona = false
//                 }
//                 
//             }
//         }
//       
//         result.textContent = isDigona ? "Diagonal" : "not Diagonal"
//     })
// })


// <-- hollo matrix --->
// let enter = Number(prompt("Enter row and colum of the matrix"))
// let col=enter
// let row=enter

// let matrix1 = []
// for(let i=0; i<col; i++){
//     matrix1[i] = []
//     for(let j=0; j<row; j++){
//         let val = Number(prompt(`Enter value for ${i},${j}th item`))
//         // let val = 1;
//         matrix1[i][j] = val
        
//     }
// }
// for(let ii = 0; ii < col; ii++){
//     for(let jj = 0; jj< row; jj++){
//         if(ii == jj){
//             if( matrix1[ii][jj] === 0){
//                 console.log("diagonal")
//             }
                    
//             else{
//                 console.log("not diagonal")
//             }
//         }
                
//     }
// }
// console.log(matrix1)

// ===> using html
// document.getElementById("entry").addEventListener("click", function() {
//     let rowcolum = Number(document.getElementById("rcb").value)
//     let matrix = []
//     let container = document.getElementById("matrix-cntr")

//     container.innerHTML = "";

//     for(let i = 0; i< rowcolum; i++){
//         for(let j = 0; j< rowcolum; j++){
//             let input = document.createElement("input")
//             input.type = "number";
//             input.style.width = "50px";
//             input.style.margin = "5px";
//             input.placeholder = `${i},${j}`;
//             input.classList.add("matrix-input");
//             container.appendChild(input)
//         }
//         container.appendChild(document.createElement("br"))
//     }
//     let btn = document.createElement("button")
//     btn.textContent = "CHECKK"
//     btn.type = "button"
//     container.appendChild(btn)
//     const result = document.getElementById("result")

//     btn.addEventListener("click", function() {
//         let inputs = document.querySelectorAll(".matrix-input")
//         let matrix = []
//         let index = 0

//         for(let ii=0; ii<rowcolum; ii++){
//             for(let jj=0; jj<rowcolum; jj++){
//                 if( ii === jj){
//                     if(matrix[ii][jj] == 0){
//                         result.textContent = "it is a diagonal matrix"
//                     }
//                     else{
//                         result.textContent ="it is not a diagonal"
//                     }
//                 }
//             }
//         }
//     })
    
// })


// 6) <-------- check the matrix is identity or not----------->

// let rowcolum = Number(prompt("Enter number of colum or row"))


// let matrix = []

// for(let i=0; i<rowcolum; i++){
//     matrix[i] =[]
//     for(let j=0; j<rowcolum; j++){
//         let val = Number(prompt(`Enter ${i},${j}th value`))
//         matrix[i][j] = val
//         // console.log(val)
//     }
// }
// console.log(matrix)
// let isIdentity = true
// for(let i=0; i<rowcolum; i++){
//     for(let j=0; j<rowcolum; j++){
//         if(i != j && matrix[i][j] !==0){
//             isIdentity = false
//             console.log("inside  if")
//         }
//         else if( i==j && matrix[i][j] !== 1){
//             isIdentity = false
//             console.log("inside else")
//         }
            
//     }
// }
// if(isIdentity){
//     console.log("Identity")
// }
// else{
//     console.log("not identity")
// }


// <--- using html ---------->
// document.getElementById("entry").addEventListener("click", function(){
//     let rowcolum = Number(document.getElementById("rowcolum").value)
//     let matrix = []
//     let container = document.getElementById("matrix-cntr")

//     container.innerHTML = "";
//     for(let i=0; i<rowcolum; i++){
//         for(let j=0; j<rowcolum; j++){
//             let input = document.createElement("input")
//             input.style.width = "50px"
//             input.style.margin = "5px"
//             input.type = "number"
//             input.placeholder = `${i},${j}th item`
//             input.classList.add("matrixinput")
//             container.appendChild(input)
//         }
//         container.appendChild(document.createElement("br"))
//     }
    
//     let btn = document.createElement("button")
//     btn.type = "button"
//     btn.textContent = "CHECK IDENTITY"
//     container.appendChild(btn)

//     let result = document.getElementById("result")

//     btn.addEventListener("click", function(){
//        let input = document.querySelectorAll(".matrixinput")
//         let isIdentity = true
//         for(let i=0; i<rowcolum; i++){
//             for(let j=0; j<rowcolum; j++){
//                 let index = i * rowcolum + j
//                 let val = Number(input[index].value)

//                 if( i!=j && val !==0){
//                     isIdentity= false
//                 }
//                 else if(i==j && val !== 1){
//                     isIdentity = false
//                 }
//             }
//         }
//         if(isIdentity){
//             result.textContent ="this is identity matrix"
//         }
//         else{
//             result.textContent = "this is not an identity matrix"
//         }
//     })
// })

//  7) <--- traspose of given matrix

// document.getElementById("entry").addEventListener("click", function() {
//     let rowcolum = Number(document.getElementById("rowcolum").value)
//     let container = document.getElementById("matrix-cntr")   
//     container.innerHTML = ""
    
//     for(let i=0; i<rowcolum; i++){
//         for(let j=0; j<rowcolum; j++){
//             let input = document.createElement("input")
//             input.type = "number"
//             input.style.width = "50px"
//             input.style.margin = "5px"
//             input.placeholder = `${i},${j}th item`
//             input.classList.add("matrix-input")
//             container.appendChild(input)
//         }
//         container.appendChild(document.createElement("br"))
//     }

//     let btn = document.createElement("button")
//     btn.type = "button"
//     btn.textContent = "give tranpose"
//     container.appendChild(btn)
    

//     btn.addEventListener("click", function() {
//         let input = document.querySelectorAll(".matrix-input")
//         let matrix = []
        
//         for(let i=0; i<rowcolum; i++){
//             matrix[i] = []
//             for(let j=0; j<rowcolum; j++){
//                 let index = i * rowcolum + j
//                 matrix[i][j] = Number(input[index].value)
//             }
//         }
//         let tranpose =[]
//         for(let i=0; i<rowcolum; i++){
//             tranpose[i]=[]
//             for(let j=0; j<rowcolum; j++){
//                 tranpose[i][j] = matrix[j][i]
//             }
//         }
//         console.log("original", matrix)
//         console.log("traspose", tranpose)
        
//         let resultctr = document.getElementById("result")
        
//         let result = document.createElement("p")
//         result.textContent = "Transpose of the matrix"
//         resultctr.appendChild(result)
//         resultctr.appendChild(document.createElement("br"))


//         for(let i=0; i<rowcolum; i++){
//             for(let j=0; j<rowcolum; j++){

//                 let final = document.createElement("input")
//                 final.value = `${tranpose[i][j]}`
//                 final.style.margin = "5px";
//                 final.style.width = "50px"
//                 resultctr.appendChild(final)
//             }
//             resultctr.appendChild(document.createElement("br"))
//         }
//     })
// })

// 8)  <------- most repeated value -------------->

let arr=[]
let size = Number(prompt("enter size of the array"))
let val = []
let temp = []
let flag = false
for(let i=0; i<size; i++){
    val[i] = Number(prompt(`enter ${i}th item`))
}
for(let i=0; i<size; i++){
    temp[i] = val[i]
    for(let j=i+1; j<size; j++){
        if(temp[j] === val[i]){
            flag =  true 
            arr[j] = temp[j]
        }
    }
}
console.log(val)
console.log(arr)

