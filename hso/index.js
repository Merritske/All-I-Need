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
//    if (event.target == popup) {
//     popup.style.display = "none";
//    }
//  }

