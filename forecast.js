function forecast(data){

let months={}

data.forEach(t=>{

let d=new Date(t.date)

let key=d.getFullYear()+"-"+d.getMonth()

if(!months[key]) months[key]=0

months[key]+=t.type==="income"?t.value:-t.value

})

let values=Object.values(months)

let avg=values.reduce((a,b)=>a+b,0)/values.length

return avg

}
