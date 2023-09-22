const submenu =document.getElementsByClassName("submenu")
// submenu.forEach(element => {element.adEventListener('onmouseenter', console.log('piep'))
    
// }); 
console.log(submenu)


// //MODAL
// // Get the modal
 var popup = document.getElementsByClassName("fotos");
console.log(popup)
// // Get the button that opens the modal
var btn = document.getElementsByClassName('myBtn')
console.log(btn[0])
// // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close");

// // When the user clicks on the button, open the modal

      for(x=0; x<btn.length; x++){
    
          console.log(x)
    
 btn[x].onclick = function() {
const el = event.currentTarget
    console.log(el.nextElementSibling)
 
el.nextElementSibling.style.display = "block"; 

 }

}

console.log(span.parentElement)

// // When the user clicks on <span> (x), close the modal
for(x=0; x<span.length; x++)
span[x].onclick = function() {
const el = event.currentTarget
el.parentElement.style.display = "none";
 }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//    if (event.currentTarget != popup) {
//     popup.style.display = "none";
//    }
// }

//foto's groot tonen
let imgSfeer = document.querySelectorAll('.sfeer img')
console.log(imgSfeer)
for(i=0;i<imgSfeer.length;i++){
    imgSfeer[i].onclick = function(){
         const el = event.currentTarget
         console.log(el)
         el.classList.toggle('big')
    }
}

//inlog leden
let inlog = document.getElementById('hso')
let pass = document.getElementById('altviool2017!')
let leden = document.querySelector('.leden')
function openinlog(){
    if(inlog.value == "hso" & pass.value === "altviool2017!"){
     //   window.open('https://docs.google.com/spreadsheets/d/1XH825qbz6mXjdq4SV7vnS7j384S1TK20f_DSU0zWkP8/edit?usp=sharing')
      window.open("./leden.html")
        window.close("./orkest.html")
        leden.style.display ='none'
    }else{
         alert("Helaas de gebruikersnaam of passwoord is niet correct. Voor de juiste inloggevgevens contacteer de dirigent.")
         leden.style.display = 'none'
        }
 console.log(inlog)
}

function showInlog(){
    leden.style.display = 'block'
}
function navbarresponsive(){
    var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}