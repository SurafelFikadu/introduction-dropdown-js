// Header left side
const featureArrow = document.getElementById("feature-arrow");
const companyArrow = document.getElementById("company-arrow");

const featureHover = document.getElementById("feature-hover");
const companyHover = document.getElementById("company-hover");

featureHover.onmouseover = () => {
    featureArrow.src = "./images/icon-arrow-up.svg";
}
featureHover.onmouseout = () => {
    featureArrow.src = "./images/icon-arrow-down.svg";
}

companyHover.onmouseover = () => {
    companyArrow.src = "./images/icon-arrow-up.svg";
}
companyHover.onmouseout = () => {
    companyArrow.src = "./images/icon-arrow-down.svg";
}


// header at mobile design 
const headerMain = document.getElementById("header-main");
const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");
const body = document.querySelector('body')


closeBtn.onclick = (() => {
    headerMain.style.transform = "translateX(40vh)";
    body.style.background = "hsl(0, 0%, 98%)"
})

menuBtn.onclick = () => {
    headerMain.style.transform = "translateX(0vh)";
    body.style.background = "hsl(0, 0%, 8%, 0.7)";
}