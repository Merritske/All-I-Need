
let cirkel = document.querySelector(".cirkel")
let moveD = document.querySelector(".move")
let vierk = document.querySelector(".vierkant")
moveD.addEventListener("mousemove", function () {
        console.log("heelo")
       // matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
        cirkel.style.transform = "matrix(0, 0.5, 0.5, 0, 1400,0 )"
      //  cirkel.style.transform = "skew(20deg, 45deg)"
vierk.style.transform = "matrix(0, 5, 0.5, 0, 900, 100)"
    })
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
//invoeren username
//pop-up rekensom met random getallen
//resultaat
//wordt in een lijst gezet


userBtn.addEventListener("click", adUser=>{
    adUser.preventDefault()
userN.innerHTML = userI.value
userI.value = ""
modal.style.display = "block"

let a = Math.floor(Math.random()*10)
let b = Math.floor(Math.random()*10)
let c = a+b
rekensom.innerHTML = `${a} + ${b} =`
checkresultBtn.addEventListener("click", resultaat=>{
  resultaat.preventDefault()
  console.log("biep")
  console.log(c)
  console.log(som.value)
  if(som.value == c){
  alert ("Dat is correct")
}else{
  alert(`dat is niet correct, de juiste oplossing is ${c}`)
}

})


})
