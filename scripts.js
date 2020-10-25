// const zoomFunc = (type) => {
//   const amts = {
//     in: 10,
//     out: -10,
//   };
//   const d = document.body.style;
//   d.zoom = d.zoom || "125%"; // in case it's an empty string by default
//   d.zoom = (type === "reset" ? 100 : parseInt(d.zoom) + amts[type]) + "%";
// };
// zoomFunc();
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}