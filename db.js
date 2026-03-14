const DB_NAME="financeDB"
const VERSION=1

let db

function initDB(){

const request=indexedDB.open(DB_NAME,VERSION)

request.onupgradeneeded=e=>{

db=e.target.result

db.createObjectStore("transactions",{keyPath:"id",autoIncrement:true})

}

request.onsuccess=e=>{
db=e.target.result
}

}

initDB()
