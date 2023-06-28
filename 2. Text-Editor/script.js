const text = document.querySelector(".text");
let defultfontSize = 18;
function isActive(butt) {
  return document.querySelector("." + butt).classList.toggle("active");
}

function color(colorId) {
  text.style.color = colorId;
}
function inc() {
  defultfontSize += 2;
  text.style.fontSize = defultfontSize + "px";
}
function dec() {
  defultfontSize -= 2;
  text.style.fontSize = defultfontSize + "px";
}
function bold(bold) {
  if (isActive("bold")) {
    text.style.fontWeight = "bold";
  } else {
    text.style.fontWeight = "100";
  }
}
function italic(italic) {
  if (isActive("italic")) {
    text.style.fontStyle = "italic";
  } else {
    text.style.fontStyle = "normal";
  }
}
function left(left) {
  if (isActive("left")) {
    pTextAlign = text.style.textAlign;
    text.style.textAlign = "left";
    if (document.querySelector(".center").classList.contains("active")) {
      isActive("center");
    }
    if (document.querySelector(".right").classList.contains("active")) {
      isActive("right");
    }
  } else {
    text.style.textAlign = pTextAlign;
  }
}
function center(center) {
  if (isActive("center")) {
    pTextAlign = text.style.textAlign;
    text.style.textAlign = "center";
    if (document.querySelector(".left").classList.contains("active")) {
      isActive("left");
    }
    if (document.querySelector(".right").classList.contains("active")) {
      isActive("right");
    }
  } else {
    text.style.textAlign = pTextAlign;
  }
}
function right(right) {
  if (isActive("right")) {
    pTextAlign = text.style.textAlign;
    text.style.textAlign = "right";
    if (document.querySelector(".left").classList.contains("active")) {
      isActive("left");
    }
    if (document.querySelector(".center").classList.contains("active")) {
      isActive("center");
    }
  } else {
    text.style.textAlign = pTextAlign;
  }
}
