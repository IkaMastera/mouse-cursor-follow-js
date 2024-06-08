let myDiv = document.getElementById("my-div");

function divTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  try {
    var x = !divTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !divTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  myDiv.style.left = x - 30 + "px";
  myDiv.style.top = y - 30 + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
});

document.addEventListener("touchmove", (e) => {
  move(e);
});
