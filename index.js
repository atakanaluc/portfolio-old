astro900 = getComputedStyle(document.body).getPropertyValue("--astro-900");
astro500 = getComputedStyle(document.body).getPropertyValue("--astro-500");
astro200 = getComputedStyle(document.body).getPropertyValue("--astro-200");
astro50 = getComputedStyle(document.body).getPropertyValue("--astro-50");
gray900 = getComputedStyle(document.body).getPropertyValue("--gray-900");
gray500 = getComputedStyle(document.body).getPropertyValue("--gray-500");
gray200 = getComputedStyle(document.body).getPropertyValue("--gray-200");
gray50 = getComputedStyle(document.body).getPropertyValue("--gray-50");

function toggleDarkLight() {
  if (
    window.getComputedStyle(document.body).backgroundColor ==
    "rgb(244, 246, 251)"
  ) {
    root.style.setProperty("--main-900", astro50);
    root.style.setProperty("--main-50", astro900);
    root.style.setProperty("--main-500", astro200);
    root.style.setProperty("--main-200", astro500);
    img[0].src = "./media/mail-icon.png";
    img[1].src = "./media/phone-icon.png";
    img[2].src = "./media/resume-icon.png";
    img[3].src = "./media/whatsapp-icon.png";
    img[4].src = "./media/github-icon.png";
    img[5].src = "./media/linkedin-icon.png";
    img[6].src = "./media/leetcode-icon.png";
    input[0].src = "./media/dark-mode-icon.png";
    input[1].src = "./media/change-theme-icon.png";
    localStorage.setItem("themechange", "astro50");
  } else if (
    window.getComputedStyle(document.body).backgroundColor == "rgb(37, 54, 85)"
  ) {
    root.style.setProperty("--main-900", astro900);
    root.style.setProperty("--main-50", astro50);
    root.style.setProperty("--main-500", astro500);
    root.style.setProperty("--main-200", astro200);
    img[0].src = "./media/mail-icon-dark.png";
    img[1].src = "./media/phone-icon-dark.png";
    img[2].src = "./media/resume-icon-dark.png";
    img[3].src = "./media/whatsapp-icon-dark.png";
    img[4].src = "./media/github-icon-dark.png";
    img[5].src = "./media/linkedin-icon-dark.png";
    img[6].src = "./media/leetcode-icon-dark.png";
    input[0].src = "./media/dark-mode-icon-dark.png";
    input[1].src = "./media/change-theme-icon-dark.png";
    localStorage.setItem("themechange", "astro900");
  } else if (
    window.getComputedStyle(document.body).backgroundColor ==
    "rgb(247, 247, 247)"
  ) {
    root.style.setProperty("--main-900", gray50);
    root.style.setProperty("--main-50", gray900);
    root.style.setProperty("--main-500", gray200);
    root.style.setProperty("--main-200", gray500);
    img[0].src = "./media/mail-icon.png";
    img[1].src = "./media/phone-icon.png";
    img[2].src = "./media/resume-icon.png";
    img[3].src = "./media/whatsapp-icon.png";
    img[4].src = "./media/github-icon.png";
    img[5].src = "./media/linkedin-icon.png";
    img[6].src = "./media/leetcode-icon.png";
    input[0].src = "./media/dark-mode-icon.png";
    input[1].src = "./media/change-theme-icon.png";
    localStorage.setItem("themechange", "gray50");
  } else if (
    window.getComputedStyle(document.body).backgroundColor == "rgb(29, 29, 29)"
  ) {
    root.style.setProperty("--main-900", gray900);
    root.style.setProperty("--main-50", gray50);
    root.style.setProperty("--main-500", gray500);
    root.style.setProperty("--main-200", gray200);
    img[0].src = "./media/mail-icon-dark.png";
    img[1].src = "./media/phone-icon-dark.png";
    img[2].src = "./media/resume-icon-dark.png";
    img[3].src = "./media/whatsapp-icon-dark.png";
    img[4].src = "./media/github-icon-dark.png";
    img[5].src = "./media/linkedin-icon-dark.png";
    img[6].src = "./media/leetcode-icon-dark.png";
    input[0].src = "./media/dark-mode-icon-dark.png";
    input[1].src = "./media/change-theme-icon-dark.png";
    localStorage.setItem("themechange", "gray900");
  } else {
    alert("Error in lightness changer");
  }
}
function toggleGrayDark() {
  if (
    window.getComputedStyle(document.body).backgroundColor ==
    "rgb(244, 246, 251)"
  ) {
    root.style.setProperty("--main-900", gray900);
    root.style.setProperty("--main-50", gray50);
    root.style.setProperty("--main-500", gray500);
    root.style.setProperty("--main-200", gray200);
    localStorage.setItem("themechange", "gray900");
  } else if (
    window.getComputedStyle(document.body).backgroundColor == "rgb(37, 54, 85)"
  ) {
    root.style.setProperty("--main-900", gray50);
    root.style.setProperty("--main-50", gray900);
    root.style.setProperty("--main-500", gray200);
    root.style.setProperty("--main-200", gray500);
    localStorage.setItem("themechange", "gray50");
  } else if (
    window.getComputedStyle(document.body).backgroundColor ==
    "rgb(247, 247, 247)"
  ) {
    root.style.setProperty("--main-900", astro900);
    root.style.setProperty("--main-50", astro50);
    root.style.setProperty("--main-500", astro500);
    root.style.setProperty("--main-200", astro200);
    localStorage.setItem("themechange", "astro900");
  } else if (
    window.getComputedStyle(document.body).backgroundColor == "rgb(29, 29, 29)"
  ) {
    root.style.setProperty("--main-900", astro50);
    root.style.setProperty("--main-50", astro900);
    root.style.setProperty("--main-500", astro200);
    root.style.setProperty("--main-200", astro500);
    localStorage.setItem("themechange", "astro50");
  } else {
    alert("Error in theme changer");
  }
}
function toggleLanguage() {
  if (navtabs[0].innerHTML == "About") {
    navtabs[0].innerHTML = "Hakk??nda";
    navtabs[1].innerHTML = "Projeler";
    navtabs[2].innerHTML = "??leti??im";
    abbr[0].title = "Email Adresi";
    abbr[1].title = "Telefon Numaras??";
    abbr[2].title = "??zge??mi??";
    abbr[7].title = "I????k De??i??tir";
    abbr[8].title = "Tema De??i??tir";
    abbr[9].title = "Dil De??i??tir";
    h3[0].innerHTML = "Hakk??nda";
    h3[1].innerHTML = "Projeler";
    h3[2].innerHTML = "??leti??im";
    p[0].innerHTML = "Bu benim eski websitem.";
    p[1].innerHTML = `
    <a href="https://www.atakanaluc.com">atakanaluc.com</a> sitesini kontrol edebilirsiniz.`;
    p[2].innerHTML = `
    <a href="https://www.atakanaluc.com">atakanaluc.com</a> adresindeki ileti??im formunu kullanabilirsiniz.`;
    label[0].innerHTML = "??sim";
    label[2].innerHTML = "Mesaj";
    input[0].alt = "I????k De??i??tir";
    input[1].alt = "Tema De??i??tir";
    input[2].alt = "Dil De??i??tir";
    input[4].alt = "??sim Giri??i";
    input[5].alt = "Email Giri??i";
    button.value = "G??nder";
    button.innerHTML = "G??nder";
    img[0].alt = "Mail ??konu";
    img[1].alt = "Telefon ??konu";
    img[2].alt = "??zge??mi?? ??konu";
    img[3].alt = "WhatsApp ??konu";
    img[4].alt = "GitHub ??konu";
    img[5].alt = "LinkedIn ??konu";
    img[6].alt = "LeetCode ??konu";
    noscript.innerHTML =
      "Bu siteyi d??zg??nce ??al????t??rabilmeniz i??in JavaScript'e ihtiyac??n??z var!";
    input[2].src = "./media/english-icon.png";
    localStorage.setItem("languagechange", "turkish");
  } else if (navtabs[0].innerHTML == "Hakk??nda") {
    navtabs[0].innerHTML = "About";
    navtabs[1].innerHTML = "Projects";
    navtabs[2].innerHTML = "Contact";
    abbr[0].title = "Email Address";
    abbr[1].title = "Phone Number";
    abbr[2].title = "Resume";
    abbr[7].title = "Change Lightness";
    abbr[8].title = "Change Theme";
    abbr[9].title = "Change Language";
    h3[0].innerHTML = "About";
    h3[1].innerHTML = "Projects";
    h3[2].innerHTML = "Contact";
    p[0].innerHTML = "Bu benim eski websitem.";
    p[1].innerHTML = `
    Check out <a href="https://www.atakanaluc.com">atakanaluc.com</a>.`;
    p[2].innerHTML = `You can use the contact form at
    <a href="https://www.atakanaluc.com">atakanaluc.com</a>.`;
    label[0].innerHTML = "Name";
    label[2].innerHTML = "Message";
    input[0].alt = "Change Lightness";
    input[1].alt = "Change Theme";
    input[2].alt = "Change Language";
    input[4].alt = "Name Input";
    input[5].alt = "Email Input";
    button.value = "Submit";
    button.innerHTML = "Submit";
    img[0].alt = "Mail Icon";
    img[1].alt = "Phone Icon";
    img[2].alt = "Resume Icon";
    img[3].alt = "WhatsApp Icon";
    img[4].alt = "GitHub Icon";
    img[5].alt = "LinkedIn Icon";
    img[6].alt = "LeetCode Icon";
    noscript.innerHTML = "You need JavaScript to properly run this website!";
    input[2].src = "./media/turkish-icon.png";
    localStorage.setItem("languagechange", "english");
  } else {
    alert("Error in language changer");
  }
}
function mouseOver0() {
  if (
    parseInt(window.getComputedStyle(document.body).width) /
      parseInt(window.getComputedStyle(document.body).height) >=
    0.386
  ) {
    navtabs[0].style.animation = "border1 0.5s forwards";
  } else if (
    parseInt(window.getComputedStyle(document.body).width) /
      parseInt(window.getComputedStyle(document.body).height) <
    0.386
  ) {
    navtabs[0].style.animation = "border025 0.5s forwards";
  } else {
    alert("Error in nav animation");
  }
}
function mouseOver1() {
  if (
    parseInt(window.getComputedStyle(document.body).width) /
      parseInt(window.getComputedStyle(document.body).height) >=
    0.386
  ) {
    navtabs[1].style.animation = "border1 0.5s forwards";
  } else if (
    parseInt(window.getComputedStyle(document.body).width) /
      parseInt(window.getComputedStyle(document.body).height) <
    0.386
  ) {
    navtabs[1].style.animation = "border025 0.5s forwards";
  } else {
    alert("Error in nav animation");
  }
}
function mouseOver2() {
  if (
    parseInt(window.getComputedStyle(document.body).width) /
      parseInt(window.getComputedStyle(document.body).height) >=
    0.386
  ) {
    navtabs[2].style.animation = "border1 0.5s forwards";
  } else if (
    parseInt(window.getComputedStyle(document.body).width) /
      parseInt(window.getComputedStyle(document.body).height) <
    0.386
  ) {
    navtabs[2].style.animation = "border025 0.5s forwards";
  } else {
    alert("Error in nav animation");
  }
}
function mouseOut0() {
  navtabs[0].style.animation = "";
}
function mouseOut1() {
  navtabs[1].style.animation = "";
}
function mouseOut2() {
  navtabs[2].style.animation = "";
}
let root = document.querySelector(":root");
let label = document.getElementsByTagName("label");
let h3 = document.getElementsByTagName("h3");
let p = document.getElementsByTagName("p");
let noscript = document.getElementsByTagName("noscript")[0];
let abbr = document.getElementsByTagName("abbr");
let navtabs = document.getElementsByClassName("nav-tabs");
let img = document.getElementsByTagName("img");
let input = document.getElementsByTagName("input");
let button = document.getElementsByTagName("button")[0];
function mouseORotate() {
  input[0].style.transform = "rotate(-90deg)";
}

function mouseOURotate() {
  input[0].style.transform = "rotate(90deg)";
}

function mouseInput() {
  if (input[1].src.includes("-dark")) {
    input[1].src = input[1].src.replace(/-dark/g, "");
  } else if (!input[1].src.includes("-dark")) {
    input[1].src = input[1].src.replace(/.png/g, "-dark.png");
  }
}
function mouseImg(imgnum) {
  if (img[imgnum].src.includes("-dark")) {
    img[imgnum].src = img[imgnum].src.replace(/-dark/g, "");
  } else if (!img[imgnum].src.includes("-dark")) {
    img[imgnum].src = img[imgnum].src.replace(/.png/g, "-dark.png");
  }
}
img[0].addEventListener("mouseover", () => mouseImg(0));
img[1].addEventListener("mouseover", () => mouseImg(1));
img[2].addEventListener("mouseover", () => mouseImg(2));
img[3].addEventListener("mouseover", () => mouseImg(3));
img[4].addEventListener("mouseover", () => mouseImg(4));
img[5].addEventListener("mouseover", () => mouseImg(5));
img[6].addEventListener("mouseover", () => mouseImg(6));
input[0].addEventListener("mouseover", mouseORotate);
input[1].addEventListener("mouseover", mouseInput);
img[0].addEventListener("mouseout", () => mouseImg(0));
img[1].addEventListener("mouseout", () => mouseImg(1));
img[2].addEventListener("mouseout", () => mouseImg(2));
img[3].addEventListener("mouseout", () => mouseImg(3));
img[4].addEventListener("mouseout", () => mouseImg(4));
img[5].addEventListener("mouseout", () => mouseImg(5));
img[6].addEventListener("mouseout", () => mouseImg(6));
input[0].addEventListener("mouseout", mouseOURotate);
input[1].addEventListener("mouseout", mouseInput);
navtabs[0].addEventListener("mouseover", mouseOver0);
navtabs[1].addEventListener("mouseover", mouseOver1);
navtabs[2].addEventListener("mouseover", mouseOver2);
navtabs[0].addEventListener("mouseout", mouseOut0);
navtabs[1].addEventListener("mouseout", mouseOut1);
navtabs[2].addEventListener("mouseout", mouseOut2);
input[0].addEventListener("click", toggleDarkLight);
input[1].addEventListener("click", toggleGrayDark);
input[2].addEventListener("click", toggleLanguage);
if (!sessionStorage.getItem("animated")) {
  document.getElementsByTagName("body")[0].style.animation = "fade-in 2s";
  document.getElementsByTagName("nav")[0].style.animation = "down-top 2s";
  document.getElementsByTagName("aside")[0].style.animation = "down-top 2s";
  document.getElementsByTagName("aside")[1].style.animation = "down-top 2s";
  document.getElementsByTagName("main")[0].style.animation = "top-down 2s";
}
sessionStorage.setItem("animated", "yes");
if (localStorage.getItem("themechange") == "astro50") {
  root.style.setProperty("--main-900", astro50);
  root.style.setProperty("--main-50", astro900);
  root.style.setProperty("--main-500", astro200);
  root.style.setProperty("--main-200", astro500);
  img[0].src = "./media/mail-icon.png";
  img[1].src = "./media/phone-icon.png";
  img[2].src = "./media/resume-icon.png";
  img[3].src = "./media/whatsapp-icon.png";
  img[4].src = "./media/github-icon.png";
  img[5].src = "./media/linkedin-icon.png";
  img[6].src = "./media/leetcode-icon.png";
  input[0].src = "./media/dark-mode-icon.png";
  input[1].src = "./media/change-theme-icon.png";
} else if (localStorage.getItem("themechange") == "gray50") {
  root.style.setProperty("--main-900", gray50);
  root.style.setProperty("--main-50", gray900);
  root.style.setProperty("--main-500", gray200);
  root.style.setProperty("--main-200", gray500);
  img[0].src = "./media/mail-icon.png";
  img[1].src = "./media/phone-icon.png";
  img[2].src = "./media/resume-icon.png";
  img[3].src = "./media/whatsapp-icon.png";
  img[4].src = "./media/github-icon.png";
  img[5].src = "./media/linkedin-icon.png";
  img[6].src = "./media/leetcode-icon.png";
  input[0].src = "./media/dark-mode-icon.png";
  input[1].src = "./media/change-theme-icon.png";
} else if (localStorage.getItem("themechange") == "gray900") {
  root.style.setProperty("--main-900", gray900);
  root.style.setProperty("--main-50", gray50);
  root.style.setProperty("--main-500", gray500);
  root.style.setProperty("--main-200", gray200);
}

if (localStorage.getItem("languagechange") == "turkish") {
  navtabs[0].innerHTML = "Hakk??nda";
  navtabs[1].innerHTML = "Projeler";
  navtabs[2].innerHTML = "??leti??im";
  abbr[0].title = "Email Adresi";
  abbr[1].title = "Telefon Numaras??";
  abbr[2].title = "??zge??mi??";
  abbr[7].title = "I????k De??i??tir";
  abbr[8].title = "Tema De??i??tir";
  abbr[9].title = "Dil De??i??tir";
  h3[0].innerHTML = "Hakk??nda";
  h3[1].innerHTML = "Projeler";
  h3[2].innerHTML = "??leti??im";
  p[0].innerHTML = "Bu benim eski websitem.";
  p[1].innerHTML = `
  <a href="https://www.atakanaluc.com">atakanaluc.com</a> sitesini kontrol edebilirsiniz.`;
  p[2].innerHTML = `
  <a href="https://www.atakanaluc.com">atakanaluc.com</a> adresindeki ileti??im formunu kullanabilirsiniz.`;
  label[0].innerHTML = "??sim";
  label[2].innerHTML = "Mesaj";
  input[0].alt = "I????k De??i??tir";
  input[1].alt = "Tema De??i??tir";
  input[2].alt = "Dil De??i??tir";
  input[4].alt = "??sim Giri??i";
  input[5].alt = "Email Giri??i";
  button.value = "G??nder";
  button.innerHTML = "G??nder";
  img[0].alt = "Mail ??konu";
  img[1].alt = "Telefon ??konu";
  img[2].alt = "??zge??mi?? ??konu";
  img[3].alt = "WhatsApp ??konu";
  img[4].alt = "GitHub ??konu";
  img[5].alt = "LinkedIn ??konu";
  img[6].alt = "LeetCode ??konu";
  noscript.innerHTML =
    "Bu siteyi d??zg??nce ??al????t??rabilmeniz i??in JavaScript'e ihtiyac??n??z var!";
  input[2].src = "./media/english-icon.png";
}
