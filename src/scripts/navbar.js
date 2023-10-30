const ToggleMenu = "[data-aw-toggle-menu]";

function attachEvent(selector, event, fn) {
  const matches = document.querySelectorAll(selector);
  if (matches && matches.length) {
    matches.forEach((elem) => {
      elem.addEventListener(event, () => fn(elem), false);
    });
  }
}

document.addEventListener(
  "astro:page-load",
  () => {
    attachEvent(ToggleMenu, "click", function (elem) {
      elem.classList.toggle("expanded");
      let elements = document.getElementsByClassName("navbar-visibility");
      for (let elem of elements) {
        elem?.classList.toggle("hidden");
      }
      document.getElementsByTagName("nav")[0]?.classList.toggle("h-screen");
      document.body.classList.toggle("overflow-hidden");
      document.getElementById("mobile-menu")?.classList.toggle("hidden");
    });

    const setDefault = () => {
      const elem = document.querySelector(ToggleMenu);
      if (elem) {
        elem.classList.remove("expanded");
      }

      let elements = document.getElementsByClassName("navbar-visibility");
      for (let elem of elements) {
        elem?.classList.remove("hidden");
      }

      document.getElementsByTagName("nav")[0]?.classList.remove("h-screen");
      document.body.classList.remove("overflow-hidden");
      document.getElementById("mobile-menu")?.classList.add("hidden");
    };

    const allPageLinks = document.getElementsByTagName("a");
    if (allPageLinks.length && allPageLinks) {
      for (const link of allPageLinks) {
        link.addEventListener("click", () => {
          setDefault();
        });
      }
    }
  },
  { once: false }
);
