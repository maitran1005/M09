
var myIndex = 0;
var x = document.getElementsByClassName("mySlides");
var timer = null;
carousel();

function carousel() {
    var i;
    
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    var timer = setTimeout (function(){carousel();}, 5000); 
    console.log(myIndex);
}
var slideIndex=1;
carousel(slideIndex);
function plusDivs(n){
	clearTimeout(timer);
	carousel(slideIndex += n);
}


  

  
  
  
  
  