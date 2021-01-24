/*show/hide cart*/
function showHide() {
    var x = document.getElementById("mini");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

/*scroll up/down with buttons*/
function scrollUp() {
  var x= document.getElementById('items');
  x.scrollBy(0,-115);
}

function scrollDown() {
  var y= document.getElementById('items');
  y.scrollBy(0, 115);
}



