const menuMarker = document.querySelector(".menumarker");
const menuItem = document.querySelectorAll(".menu-item");

const nav = document.querySelector("nav ul li");
// on hover state run function
for (let i = 0; i < menuItem.length; i++) {
  // if browser width is below 900
  // hide the menu marker
  let intFrameWidth = window.innerWidth;
  if (intFrameWidth >= 900) {
    // display menu marker below home at page load
    menuMarker.style.left = menuItem[0].offsetLeft + "px";
    menuMarker.style.width = menuItem[0].offsetWidth - 2 + "px";
    menuMarker.style.display = "block";
  } else {
    menuMarker.style.display = "none";
  }

  // adjust menu marker size base on the width of menu
  // shows menu marker
  menuItem[i].addEventListener("mouseover", () => {
    menuMarker.style.left = menuItem[i].offsetLeft + "px";
    menuMarker.style.width = menuItem[i].offsetWidth - 2 + "px";
  });

  /**
   * when mainmenu is on hover state
   * popping up the submenu in hover state for the selected mainmenu
   */
}

const navSlide = () => {
  const burgerMenu = document.querySelector(".burger-i");
  const body = document.querySelector("body");
  const closeButton = document.querySelector(".mobile-menu-popup-closebutton");
  const searchButton = document.querySelector(".search");
  const showSearch = document.querySelector(".search-pop");

  burgerMenu.addEventListener("click", () => {
    body.classList.add("mobile-menu-popup-show");
  });

  closeButton.addEventListener("click", () => {
    body.classList.remove("mobile-menu-popup-show");
  });

  searchButton.addEventListener("click", () => {
    if (showSearch.style.display == "none") {
      showSearch.style.display = "flex";
    } else {
      showSearch.style.display = "none";
    }
  });
};

navSlide();

// adjust menumarker width base of the width of menu
// shows it's width transition gradually.
