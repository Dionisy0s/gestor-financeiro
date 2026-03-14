self.addEventListener("install",event=>{

event.waitUntil(

caches.open("finance-cache").then(cache=>{

return cache.addAll([

"/",
"/index.html",
"/styles.css",
"/app.js"

])

})

)

})
