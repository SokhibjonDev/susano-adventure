const person1 = document.querySelector(".person1");
const bash = document.querySelector(".bash");
const enemy1 = document.querySelector(".enemy1");
const enemy = document.querySelector(".enemy");
const body = document.querySelector("body");
const heart = document.querySelector(".heart");
let isRunning = false;
let personSpeed = 20;

enemy.style.display = "none";
enemy1.style.display = "block";
function runSwitch(mode) {
  if (mode) {
    isRunning = true;
    person1.src = "../images/person-run.gif";
    person1.style.transform = "scale(.7) !important";
    person1.style.bottom = "118px";
  } else {
    isRunning = false;
    person1.src = "../images/person-1.gif";
    person1.style.transform = "scale(1.070)";
    person1.style.bottom = "133px";
  }
}

enemy1.addEventListener("click", (e) => {
  body.style.background.src = "../images/forest.jpg";
});

var i = 0;
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    let left = person1.offsetLeft + personSpeed;
    const screenWidth = document.querySelector("body").clientWidth;

    i = i + 100;
    bash.innerHTML = i + "$";

    if (screenWidth > left + person1.clientWidth) {
      person1.style.left = left + "px";
    }

    person1.style.transform = "rotateY(0deg) scale(.8)";

    if (!isRunning) {
      runSwitch(true);
    }
    console.log(left);
    // console.log(e.key);

    if (left > 1340) {
      enemy.style.display = "block";
      enemy1.style.display = "none";
      heart.style.display = "none";

      if (left >= 1620) {
        enemy.style.display = "block";
        enemy1.style.display = "none";
        enemy.style.transform = "rotateY(0deg) scale(1.5) translateY(-19px)";
        if (left >= 1680) {
          enemy1.style.display = "block";
          enemy.style.display = "none";
          enemy1.style.transform = "rotateY(0deg) scale(1.5) translateY(0px)";
        }
      }
    }
  }
  if (e.key == "ArrowLeft") {
    let left = person1.offsetLeft - personSpeed;
    i = i + 1;
    bash.innerHTML = i + "$";
    if (left !== 0) {
      person1.style.left = left + "px";
    }

    person1.style.transform = "rotateY(180deg) scale(.8) translate(133px)";

    if (!isRunning) {
      runSwitch(true);
    }
    console.log(left);
    if (left <= 1640) {
      enemy.style.display = "block";
      enemy1.style.display = "none";
      if (left < 1460) {
        enemy.style.display = "block";
        enemy1.style.display = "none";
        enemy.style.transform = "rotateY(180deg) scale(1.5) translateY(-19px)";
        if (left <= 1200) {
          enemy1.style.display = "block";
          enemy.style.display = "none";
          enemy1.style.transform = "rotateY(180deg) scale(1.5) translateY(0px)";
        }
      }
    }
  }
  if (e.key == "Enter") {
    enemy.style.display = "none";
    enemy1.style.display = "none";
    // enemy.style.transform = "translate(70px , -80px)";
    // enemy.style.width = "0";
    // enemy.style.height = "0px";
    console.log(e.key);
    const prew = document.querySelector(".prew");
    if (enemy.style.display == "none") {
      prew.style.transform = "translateX(4px)";
    }
  }
  if (e.keyCode == "32") {
    person1.style.bottom = "240px";
    setTimeout(function (e) {
      person1.style.bottom = "133px";
    }, 1000);
  }
});

document.addEventListener("keyup", (e) => {
  runSwitch(false);
});
