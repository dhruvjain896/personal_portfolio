(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // Make timeline entries collapsible with an arrow button
  document.querySelectorAll(".timeline-item").forEach((item) => {
    const desc = item.querySelector(".timeline-description");
    const heading = item.querySelector("h5");
    if (!desc || !heading) return;

    // create toggle button and append to heading
    const btn = document.createElement("button");
    btn.className = "tl-toggle";
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    heading.appendChild(btn);

    // initialize collapsed
    desc.style.maxHeight = "0px";

    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        btn.setAttribute("aria-expanded", "false");
        item.classList.remove("open");
        desc.style.maxHeight = "0px";
      } else {
        btn.setAttribute("aria-expanded", "true");
        item.classList.add("open");
        // allow transition to animate to full content height
        desc.style.maxHeight = desc.scrollHeight + "px";
      }
    });
  });
})();
