
let cirkel = document.querySelector(".cirkel")
let moveD = document.querySelector(".move")
let vierk = document.querySelector(".vierkant")

// function test(){
//   return legende.innerHTML = "REKENSOM"
// }
// test();


//REKENSPELLETJE
let userI = document.querySelector("#userInput")
let newI = document.querySelector("#newPlayer")
let userBtn = document.querySelector("#userBtn")
let goBtn = document.querySelector("#go")
let userN = document.querySelector("#username")
let modal = document.querySelector(".modal")
let tb = document.querySelector("#lijst")
let rekensom = document.querySelector(".rekensom")
let reken = document.querySelector(".reken")
let som = document.querySelector("#som")
let checkresultBtn = document.querySelector("#uitkomst")
let cT = document.querySelector("#correct")


//invoeren username
//pop-up rekensom met random getallen
//resultaat
//wordt in een lijst gezet

//nieuwe gebruiker maken
userBtn.addEventListener("click", adUser => {
  adUser.preventDefault()
  let obj = {
    user: newI.value,
    percentage: 0,
    aantal: 0,
    countCorrect: 0
  }

  db.collection("rekengame").add(obj)

  newI.value = ""

})

window.addEventListener("DOMContentLoaded", () => {

  db.collection("rekengame").onSnapshot((snapshot) => {
    userI.innerHTML = ""
    tb.innerHTML = ""
    snapshot.forEach((doc) => {

      listItem.push({
        id: doc.id,
        ...doc.data()
      })
     // console.log(doc.data())

      userI.innerHTML += `<option value=${doc.data().user}>${doc.data().user}</option>`
      tb.innerHTML += `<tr>
      <th id="${doc.data().id}">
       ${doc.data().user}
      </th>
  </tr>
  
  <tr>
  <td></td>
      <td >${doc.data().aantal}</td>
  
      <td >${doc.data().percentage} %</td>
  </tr>`

    })




    // console.log(listItem)

  })

})

let countCorrect = 0
let aantal = 0
let percentage = countCorrect / aantal * 100


let listItem = []
db.collection("rekengame").onSnapshot((snapshot) => {


  snapshot.forEach((doc) => {

    listItem.push({
      id: doc.id,
      ...doc.data()
    })


    // tb.innerHTML =""


    //  userI.innerHTML += `<option value=${doc.data().user}>${doc.data().user}</option>`
    //      tb.innerHTML += `<tr>
    //     <th id="${doc.data().id}">
    //      ${doc.data().user}
    //     </th>
    // </tr>

    // <tr>
    // <td></td>
    //     <td >${doc.data().aantal}</td>

    //     <td >${doc.data().percentage} %</td>
    // </tr>`

    //   // console.log(listItem)

  })



  goBtn.addEventListener("click", openReken => {


   // console.log(listItem)

    if (confirm(`Is ${userI.value} your name?`)) {

      reken.style.visibility = "visible"
      let a = Math.floor(Math.random() * 10)
      let b = Math.floor(Math.random() * 10)
    
      rekensom.innerHTML = `${a} + ${b} =`
let c;
      let opgave = Math.floor(Math.random() * (0 - 4) + 4)
     // console.log(opgave)
      switch (opgave) {
        case 0:
          c = a + b
          rekensom.innerHTML = `${a} + ${b} =`;
          break;
        case 1:
          if(a<b || a ==0){
             c = b -a
             break;
           } else {
               c = a - b
               
           } 
         
          rekensom.innerHTML = `${a} - ${b} =`;
          break;
        case 2:
          c = a * b
          rekensom.innerHTML = `${a} * ${b} =`
          break;
        case 3:
          if(a<b || a ==0){
            console.log(a)
            c = b /a
              break;
          }  else{
               c = a / b
             
          }
       
          rekensom.innerHTML = `${a} : ${b} =`
          break;
      }


      userN.innerHTML = userI.value

      checkresultBtn.addEventListener("click", resultaat => {
        resultaat.preventDefault()
userI.value =  userN.innerHTML
      //  console.log(countCorrect)
        modal.style.visibility = "visible"
        if (som.value == c) {

          console.log(userI.value)
          userI.innerHTML = ""
          userI.innerHTML = userI.value

          for (let u = 0; u < listItem.length; u++) {
            if (listItem[u].user == userN.innerHTML) {

              countCorrect = listItem[u].countCorrect + 1
             // console.log(countCorrect)
              aantal = listItem[u].aantal + 1
              percentage = Math.floor(countCorrect / aantal * 100)

              id = listItem[u].id
              db.collection("rekengame").doc(id).update({
                percentage: percentage,
                aantal: aantal,
                countCorrect: countCorrect
              })

            }

          }

        //  console.log(countCorrect)

          //move om aan te duiden dat het correct is + "correct dat verschijnt"
          // matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
          cirkel.style.transform = "matrix(0, 0.5, 0.5, 0, 1400,0 )"
          vierk.style.transform = "matrix(0, 5, 0.5, 0, 900, 100)"
          let correctT = "correct!    "
          let arT = []
          for (let i of correctT) {
            arT.push(i)
          }
         // console.log(arT)
          let x = 0
          let show = setInterval(function () {
            cT.innerHTML += arT[x]
           // console.log(arT[x])
            cT.style.color = "red"
            x++
            if (x == 12) {
              clearInterval(show)
              //nog niet goed, user zou moeten blijven maar de rest zou moeten gereload zijn -> ook bij "else" veranderen
             
          if(confirm("play again?")){
location.reload();

          }else{
            location.reload()
          }  
            }
          }, 600)



        } else {
          let correctT = "Helaas, je slaat de bal mis!           "
          let arT = []
          for (let i of correctT) {
            arT.push(i)
          }
        //  console.log(arT)
          let x = 0
          let show = setInterval(function () {
            cT.innerHTML += arT[x]
           // console.log(arT[x])
            cT.style.color = "red"

            x++
            if (x == 37) {
              clearInterval(show)
              confirm("play again?") ? location.reload() : location.reload();

            }
          }, 300)
          vierk.style.transform = "matrix(0, 3, 0.5, 0, 900, 100)"

          for (let u = 0; u < listItem.length; u++) {
            countCorrect = listItem[u].countCorrect
           // console.log(countCorrect)
            aantal = listItem[u].aantal + 1
            percentage = Math.floor(countCorrect / aantal * 100)

            if (listItem[u].user == userI.value) {

              id = listItem[u].id

              db.collection("rekengame").doc(id).update({
                percentage: percentage,
                aantal: aantal,
                countCorrect: countCorrect
              })

            }

          }

        }




      })

    } else {
      alert("select your name or create a username")

    }


  })


})
