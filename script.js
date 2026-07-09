
// Typing effect for profession

const text = "Data Analyst";
const typingElement = document.querySelector(".hero-text h2");

let index = 0;


function typeEffect() {

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);
        index++;

        setTimeout(typeEffect,120);

    }

}


typingElement.innerHTML = "";
typeEffect();





// Scroll reveal animation

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},
{
    threshold:0.15
});



sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="all 0.8s ease";

    observer.observe(section);

});






// Navbar shadow on scroll


window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");


    if(window.scrollY>50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.1)";

    }

    else{

        header.style.boxShadow="none";

    }


});