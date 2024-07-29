let toggleBtn = document.querySelector(".toggle-btn");
let sideNav = document.querySelector(".side-nav");
toggleBtn.addEventListener('click',()=>{
    sideNav.style.display = "block";
})
document.querySelector(".side-nav span").addEventListener('click',()=>{
    sideNav.style.display = "none";
})


let highlightsbtn = document.querySelector(".highlights-nav");
let descriptionbtn = document.querySelector(".description-nav");
let gallerybtn = document.querySelector(".gallery-nav");

let highlights = document.querySelector(".highlights");
let description = document.querySelector(".description");
let gallery = document.querySelector(".gallery");
if (highlights) {
    highlightsbtn.addEventListener('click',()=>{
        highlights.style.display = "flex";
        description.style.display = "none";
        gallery.style.display = "none";
        highlightsbtn.style.borderBottom = "greenyellow";
        descriptionbtn.style.borderBottom = "transparent";
        gallerybtn.style.borderBottom = "transparent";
    })
}

if (description) {
    descriptionbtn.addEventListener('click',()=>{
        description.style.display = "flex";
        highlights.style.display = "none";
        gallery.style.display = "none";
        gallerybtn.style.borderBottomColor  = "transparent";
        highlightsbtn.style.borderBottomColor = "transparent";
        descriptionbtn.style.borderBottomColor = "greenyellow";
        
    })
}

if (gallery) {
    gallerybtn.addEventListener("click",()=>{
        gallery.style.display = "flex";
        description.style.display = "none";
        highlights.style.display = "none";
        gallerybtn.style.borderBottomColor  = "greenyellow";
        highlightsbtn.style.borderBottomColor  = "transparent";
        descriptionbtn.style.borderBottomColor  = "transparent";

    })
}

let getBtn = document.querySelector(".get-started-btn");
let backdrop = document.querySelector(".backdrop");
let form = document.querySelector(".form-container");
let closeBtn = document.querySelector(".close");
if(getBtn){
getBtn.addEventListener('click',()=>{
    backdrop.style.display = "block";
    form.style.display = "block";
})}
if(closeBtn){
closeBtn.addEventListener('click',()=>{
    backdrop.style.display = "none";
    form.style.display = "none";
})}


const initSlider = () => {
const imageList = document.querySelector(".slides");
const slideButtons = document.querySelectorAll(".slide-button");


slideButtons.forEach(button => {
button.addEventListener("click", () => {
    const direction = button.id === "prev-slide" ? -1 : 1;
    const scrollAmount = imageList.clientWidth/2 * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
});


}

 window.addEventListener("resize", initSlider);
initSlider();