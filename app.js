let jointMode=false

document.getElementById("jointMode").onclick=()=>{

jointMode=!jointMode

}

document.getElementById("addTransaction").onclick=()=>{

let desc=document.getElementById("desc").value
let value=parseFloat(document.getElementById("value").value)
let type=document.getElementById("type").value

let transaction={
desc,
value,
type,
date:new Date()
}

console.log(transaction)

}
