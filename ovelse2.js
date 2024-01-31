window.addEventListener("load", calltime);
const time = new Date().getHours();

function calltime() {
  console.log(time);

  if (10 > time && time > 5) {
    console.log("Godmorgen");
  } else if (18 > time && time >= 10) {
    console.log("Goddag");
  } else if (24 > time && time >= 18) {
    console.log("God aften");
  } else {
    console.log("Godnat");
  }
}
