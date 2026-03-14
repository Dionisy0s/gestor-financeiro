function calculateSummary(data){

let income=0
let expense=0

data.forEach(t=>{

if(t.type==="income") income+=t.value
else expense+=t.value

})

return{
income,
expense,
balance:income-expense
}

}
