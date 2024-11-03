// scroll to top for every refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
let splashDelay = 0;
let flamingletters1 = document.body.querySelectorAll(".titleletters");
let flamingletters2 = document.body.querySelectorAll(".fronttitleletter");
let navdropdown = document.body.querySelector(".navbar-dropdown");
let blackout = document.body.querySelector(".navbar-blackout");
let splashInterval = setInterval(noScroll, 3000);
let intermediateSplashInterval = setInterval(function () {
  if (splashDelay == 0) {
    animatedLettersCall(flamingletters2, 100, 1500);
  } else {
    splashDelay = 1;
    clearInterval(intermediateSplashInterval);
  }
}, 1150);
function noScroll() {
  document.querySelector("#splash").style.display = "none";
  clearInterval(splashInterval);
  animatedLettersCall(flamingletters1, 100, 1500);
}

let animDelay = 0;
function animatedLettersCall(name, time, del) {
  if (animDelay == 0) {
    let flameIndex = 0;
    let flamingInterval = setInterval(function () {
      name[flameIndex].className = name + " showNav";
      if (flameIndex < name.length - 1) {
        flameIndex++;
      } else {
        clearInterval(flamingInterval);
      }
    }, time);
    for (letters in name) {
      name[letters].className = name;
    }
    animDelay = 1;
    setTimeout(function () {
      animDelay = 0;
    }, del);
  }
}

// navbar dropdown mechanism
let navbarcd = false;
function clearCD() {
  navbarcd = false;
}
document.body.querySelector("#nav-menu-icon").addEventListener("click", function () {
  if (!navbarcd) {
    navbarcd = true;
    setTimeout(clearCD, 700);
    navdropdown.classList.toggle("showNav");
    if (navdropdown.className == "navbar-dropdown showNav") {
      blackout.style.display = "block";
      blackout.style.opacity = 1;
      animatedLettersCall(flamingletters1, 100, 1500);
    } else {
      blackout.style.opacity = 0;
      let i = 0;
      let navbarInterval = setInterval(function () {
        if (i == 0) {
          i++;
        } else {
          blackout.style.display = "none";
          clearInterval(navbarInterval);
        }
      }, 300);
    }
  }
});