//   NAVIGATION BAR
// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    var show = document.getElementsByClassName("show")[0];
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        show.setAttribute("style", "display:block;border-left: none;background-color:#333;");
    } else {
        navbar.classList.remove("sticky");
        show.setAttribute("style", "display:none");
    }
}
// form validation
function validate() {
    var name = document.getElementById("fname");
    var comment = documment.getElementById("fcomment");

    if (name.checkValidity() == false) {
        document.getElementById("name").innerHTML = name.validationMessage();
    }
    if (comment.checkValidity() == false) {
        document.getElementById("comment").innerHTML = comment.validationMessage();
    }
}