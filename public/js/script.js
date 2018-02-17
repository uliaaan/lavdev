window.onscroll = function() {
  var header = document.getElementById("header");
  if ( window.pageYOffset > 100 ) {
      header.classList.add("bg-black");
  } else {
      header.classList.remove("bg-black");
  }
}