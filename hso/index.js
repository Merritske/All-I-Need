const submenu =document.getElementsByClassName("submenu")
// submenu.forEach(element => {element.adEventListener('onmouseenter', console.log('piep'))
    
// }); 
console.log(submenu)

let modal= document.getElementsByClassName("concert")
console.log(modal[0].children)
for(x=0;x<modal.length;x++){
    console.log(modal[x])
    modal[x].addEventListener('click',
    function(e){
 
             console.log(e)
        })
      
  
}
// //MODAL
// // Get the modal
 var popup = document.getElementById("myModal");

// // Get the button that opens the modal
var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
btn.onclick = function() {
  popup.style.display = "block";
 }

// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popup.style.display = "none";
 }

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
   if (event.target == modal) {
    modal.style.display = "none";
   }
 }

