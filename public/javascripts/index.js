window.onload = () => {
   var arrs = document.getElementsByClassName("card-img-top");
   $('.card-img-top').height(arrs[0].offsetWidth);
}
window.onresize = () => {
   var arrs = document.getElementsByClassName("card-img-top");
   $('.card-img-top').height(arrs[0].offsetWidth);
}
