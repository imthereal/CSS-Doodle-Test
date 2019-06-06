document.addEventListener("click", e => e.target.update());
//why the heck does this not work with any other object calling the addeventlistener method.... gotta read up on js
/*
document.addEventListener('click', function(e) {
  e.target.update && e.target.update();
});
*/