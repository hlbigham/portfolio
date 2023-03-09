/*accordion functionality*/
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  };
}

//Card Flip Click
$(document).on("click", ".flip-card", function () {
  $(this).toggleClass('hover');
  $(this).siblings(".flip-card").removeClass("hover");
});

/*var flip = document.getElementsByClassName("flip-card");

flip.addEventListener("click", flipCard);

function flipCard(){
  flip.classList.toggle("flip-card");
}*/


