function myFunction() {
  let x = document.querySelector(".nav-links");
  let close = document.querySelector('.closebtn')
  if (x.style.display === "block") {
    x.style.display = "none";
    close.style.display = 'none';
  }
   else {
    x.style.display = "block";
    close.style.display = 'content';
  }
}
function closeNav() {
  document.querySelector(".nav-links").style.display = "none";
}