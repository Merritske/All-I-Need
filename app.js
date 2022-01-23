let cirkel = document.querySelector(".cirkel")
let moveD = document.querySelector(".move")

moveD.addEventListener("mousemove", function () {
        console.log("heelo")
       // matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
        cirkel.style.transform = "matrix(0, 0.5, 0.5, 0, 700,0 )"
      //  cirkel.style.transform = "skew(20deg, 45deg)"
    })