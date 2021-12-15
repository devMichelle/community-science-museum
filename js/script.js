const locationInfo = document.querySelector(".locationInfo");
const hoursInfo = document.querySelector(".hoursInfo");
const linksInfo = document.querySelector(".linksInfo");

const locationInfoClose = document.querySelector(".locationInfoClose");
const hoursInfoClose = document.querySelector(".hoursInfoClose");
const linksInfoClose = document.querySelector(".linksInfoClose");

const locationSection = document.querySelector(".locationSection");
const hoursSection = document.querySelector(".hoursSection");
const linksSection = document.querySelector(".linksSection");


locationInfo.addEventListener("click", () => {
    locationSection.style.display = "block";
    locationInfoClose.style.display = "block";
    locationInfo.style.display = "none";
})

locationInfoClose.addEventListener("click", () => {
    locationSection.style.display = "none";
    locationInfoClose.style.display = "none";
    locationInfo.style.display = "block";
})

hoursInfo.addEventListener("click", () => {
    hoursSection.style.display = "block";
    hoursInfoClose.style.display = "block";
    hoursInfo.style.display = "none";
})

hoursInfoClose.addEventListener("click", () => {
    hoursSection.style.display = "none";
    hoursInfoClose.style.display = "none";
    hoursInfo.style.display = "block";
})

linksInfo.addEventListener("click", () => {
    linksSection.style.display = "block";
    linksInfoClose.style.display = "block";
    linksInfo.style.display = "none";
})

linksInfoClose.addEventListener("click", () => {
    linksSection.style.display = "none";
    linksInfoClose.style.display = "none";
    linksInfo.style.display = "block";
})