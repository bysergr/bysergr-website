// Define the selector for the element
const ToggleMenu = "[data-aw-toggle-menu]";

// Create a function to attach an event to an element
function attachEvent(selector, event, fn) {
  // Get all the matches
  const matches = document.querySelectorAll(selector);
  // If there are matches, attach the event to all of them
  if (matches && matches.length) {
    matches.forEach((elem) => {
      elem.addEventListener(event, () => fn(elem), false);
    });
  }
}

// Function when the window loads
window.onload = function () {
  // Attach the event to the element
  attachEvent(ToggleMenu, "click", function (elem) {
    // Toggle the class on the element
    elem.classList.toggle("expanded");
    // Get the elements to toggle the class of hidden
    let elements = document.getElementsByClassName("navbar-visibility");
    for (let elem of elements) {
      elem?.classList.toggle("hidden");
    }
    // Toggle the h-screen class on the header
    document.getElementsByTagName("nav")[0]?.classList.toggle("h-screen");
    // Toggle the overflow-hidden class on the body
    document.body.classList.toggle("overflow-hidden");
    // Toggle the mobile menu
    document.getElementById("mobile-menu")?.classList.toggle("hidden");
  });
};

const setDefault = () => {
  const AllLinks = document.getElementsByTagName("a");

  if (AllLinks.length && AllLinks) {
    for (const link of AllLinks) {
      link.addEventListener("click", () => {
        setDefault();
      });
    }
  }

  // Get the element to remove the class of expanded
  const elem = document.querySelector(ToggleMenu);
  if (elem) {
    elem.classList.remove("expanded");
  }
  // Get the elements to remove the class of hidden
  let elements = document.getElementsByClassName("navbar-visibility");
  for (let elem of elements) {
    elem?.classList.remove("hidden");
  }

  // Remove the h-screen class on the header
  document.getElementsByTagName("nav")[0]?.classList.remove("h-screen");
  // Remove the overflow-hidden class on the body
  document.body.classList.remove("overflow-hidden");
  // Hidden the mobile menu
  document.getElementById("mobile-menu")?.classList.add("hidden");
};

// Function when the window is shown
window.onpageshow = setDefault;
