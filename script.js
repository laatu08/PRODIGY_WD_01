// let key=document.body.firstElementChild.firstElementChild.getElementsByClassName("navitem")
// console.log(Array.from(key))
// keyArr=Array.from(key)
// console.log(keyArr)
// keyArr.forEach(element => {
//     element.addEventListener("click",()=>{
//         console.log("I am clicked"+element)
//     })
// });


function changeColor(element){
    element.style.backgroundColor="red"
    element.style.transform="scale(1.25)"
}

function restoreColor(element){
    element.style.backgroundColor=""
    element.style.transform="scale(1)"
}