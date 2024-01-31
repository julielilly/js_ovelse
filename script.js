window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log(sidenVises);

  document.querySelector("#ol").addEventListener("click", alkohol);
  document.querySelector("#snaps").addEventListener("click", alkohol);
  document.querySelector("#fanta_soda").addEventListener("click", alkohol);
  document.querySelector("#faxe_soda").addEventListener("click", alkohol);
}

function alkohol(event) {
  console.log(alkohol);

  if (event.target.id.includes("soda")) {
    console.log("alkoholfri");
  } else {
    console.log("indeholder alkohol");
  }
}
