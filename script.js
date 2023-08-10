var cursor = document.querySelector("#cursor")
var cursorblr = document.querySelector("#cursor-blr");

document.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x+"px";
  cursor.style.top= dets.y +"px" ;
  cursorblr.style.left = dets.x - 200 + "px";
  cursorblr.style.top= dets.y - 200 + "px" ;
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      cursor.style.scale = 3
      cursor.style.border = "0.2px solid #fff"
      cursor.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0 solid #ac532f"
        cursor.style.backgroundColor = "#ac532f"
      });
});



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:2,
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger:0.4,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 100%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#green-div", {
    y: 80,
    opacity:0,
    duration: 1,
    stagger:1,
    scrollTrigger: {
      trigger: "#green-div",
      scroller: "body",
      // markers:true,
      start: "top 100%",
      end: "top 20%",
      scrub: 2,
    },
  });

  // gsap.from("#green-div", {
  //   scale: 0.8,
  //    opacity:0,
  //   duration: 3,
  //   scrollTrigger: {
  //     trigger: "#green-div",
  //     scroller: "body",
  //     // markers:false,
  //     start: "top 55%",
  //     end: "top 45%",
  //     scrub:2,
  //   },
  // });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });


  
  const sliderImages = [
    "https://images.unsplash.com/photo-1611864581049-aca018410b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1088&q=80",
    "https://images.unsplash.com/photo-1605539585404-a846f1193d19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1521485950395-bcfb8fc9bd06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

    
];

const sliderTitles = [
    "Proper Nutrition",
    "Hydration",
    "Timing"
    // Add more titles here
];

const sliderTexts = [
    "Fuel your body with a balanced diet rich in proteins, carbohydrates, and healthy fats to support muscle growth and energy levels.",
    "Stay well-hydrated before, during, and after your workouts to maintain performance, prevent fatigue, and aid in recovery",
    "Eat a balanced meal or snack before exercising to provide energy, and consume protein and carbohydrates after the workout to aid in recovery and muscle repair."
];

let currentIndex = 0;

function changeSlide() {
    const sliderContainer = document.querySelector(".slider-main");
    const transitionDuration = 1000; // Change this value for desired transition speed (in milliseconds)

    sliderContainer.style.opacity = 0; // Fade out

    setTimeout(() => {
        const sliderImagesElements = document.querySelectorAll(".slider-main img");
        const sliderTitlesElements = document.querySelectorAll(".slider-content h1");
        const sliderTextsElements = document.querySelectorAll(".slider-content p");

        sliderImagesElements.forEach((imageElement, index) => {
            imageElement.src = sliderImages[(currentIndex + index) % sliderImages.length];
        });

        sliderTitlesElements.forEach((titleElement, index) => {
            titleElement.textContent = sliderTitles[(currentIndex + index) % sliderTitles.length];
        });

        sliderTextsElements.forEach((textElement, index) => {
            textElement.textContent = sliderTexts[(currentIndex + index) % sliderTexts.length];
        });

        currentIndex = (currentIndex + 1) % sliderImages.length;

        sliderContainer.style.opacity = 1; // Fade in
    }, transitionDuration);
}

setInterval(changeSlide, 3000);





const feedbackContainer = document.getElementById("page3");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

const paragraphs = [
    "As a happy customer, I am thrilled with my experience at this gym! The state-of-the-art equipment and expert instructors helped me achieve my fitness goals faster than I thought possible. I highly recommend this gym to everyone looking for a place to transform their health and well-being.",
    "Exceptional gym experience! Professional trainers, top-notch equipment, and a supportive environment. Achieved my fitness goals faster than expected. Highly recommended",
    "A game-changer for me! The gym's dedication to excellence shows in every aspect. The trainers, equipment, and community are outstanding",
    "Transformative experience! The gym's clean, modern facilities and expert trainers have helped me exceed my goals. Proud to be a member"
];

let currIndex = 0;

function updateParagraph() {
    feedbackContainer.style.opacity = 0;
    setTimeout(() => {
        feedbackContainer.querySelector("p").textContent = paragraphs[currIndex];
        feedbackContainer.style.opacity = 1;
    }, 300);
}

nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    currIndex = (currIndex + 1) % paragraphs.length;
    updateParagraph();
});

prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    currIndex = (currIndex - 1 + paragraphs.length) % paragraphs.length;
    updateParagraph();
});
