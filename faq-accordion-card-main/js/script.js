
let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let arrow = this.nextElementSibling;
    let panel = document.getElementsByClassName("panel")[i];
    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
      this.style.fontWeight = "normal";
    } else {
      panel.style.display = "block";
      arrow.style.transform = "rotate(-180deg)";
      this.style.fontWeight = "bold";
    }
  });
}