const profile = document.getElementById("profile").addEventListener("mouseover", myHover).addEventListener("mouseout", mouseLeave);
const companyTitle = document.getElementById("companyTitle");
companyTitle.addEventListener("click", titleClick);
const researchPopup = document.getElementById("researchPopup").addEventListener("click", researchPop);
// This is a function when you hover over my profile picture on my about page!

function myHover() {
  document.getElementById("profile").src = "mep2.jpg";
  document.getElementById("profile").width = "350";

}

function mouseLeave() {
  document.getElementById("profile").src = "me.jpg";
}

function titleClick() {
  document.getElementById("companyTitle").innerHTML = "Current CS Class: CSA Capstone";
  document.getElementById("companyTitle").style.color = "Yellow";
}

function researchPop() {
  setTimeout(redirect, 2000);
  function redirect() {
    window.open("https://docs.google.com/document/d/1IRArPsondPlBSOWrCDYQOf07T9N3eorgxRGB4ZmN8l0/edit?usp=sharing");
  }
}