
let cirkel = document.querySelector(".cirkel")
let moveD = document.querySelector(".move")
let vierk = document.querySelector(".vierkant")

    // function test(){
    //   return legende.innerHTML = "REKENSOM"
    // }
    // test();


    //REKENSPELLETJE
let userI = document.querySelector("#userInput")
let userBtn = document.querySelector("#userBtn")
let userN = document.querySelector("#username")
let modal = document.querySelector(".modal")
let tbody = document.querySelector("tbody")
let rekensom = document.querySelector(".rekensom")
let som = document.querySelector("#som")
let checkresultBtn = document.querySelector("#uitkomst")
let cT = document.querySelector("#correct")
//invoeren username
//pop-up rekensom met random getallen
//resultaat
//wordt in een lijst gezet


userBtn.addEventListener("click", adUser=>{
    adUser.preventDefault()
userN.innerHTML = userI.value

userI.value = ""

let a = Math.floor(Math.random()*10)
let b = Math.floor(Math.random()*10)
let c = a+b
rekensom.innerHTML = `${a} + ${b} =`

checkresultBtn.addEventListener("click", resultaat=>{
  resultaat.preventDefault()

  modal.style.visibility = "visible"
  if(som.value == c){
       // matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
        cirkel.style.transform = "matrix(0, 0.5, 0.5, 0, 1400,0 )"
vierk.style.transform = "matrix(0, 5, 0.5, 0, 900, 100)"
let correctT = "correct!"
let arT = []
  for(let i of correctT){
   arT.push(i)
  }
  console.log(arT)
     
let x=0
  let show =  setInterval(function(){  
  cT.innerHTML += arT[x]
 console.log(arT[x]) 
cT.style.color ="red"

x ++
 if(x == 8){
   clearInterval(show)
 }
} , 600) 
   
}else{

  vierk.style.transform = "matrix(0, 3, 0.5, 0, 900, 100)"

  alert(`helaas je slaat de bal helemaal mis, de juiste oplossing is ${c}`)
}
})

})