
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