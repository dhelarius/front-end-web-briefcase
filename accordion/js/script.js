
let acc = new Document().getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    acc[i].classList.toggle("active");
    let panel = this.next();
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
  console.log(i);
}
