let preloader = document.getElementById("preloader");

window.onload = function() {
    if (!sessionStorage.getItem("preloaderShown")) { 
        sessionStorage.setItem("preloaderShown", "true");

        setTimeout(function() {
            preloader.style.opacity = "0";
        }, 5000);
        
        setTimeout(function() {
            preloader.style.display = "none";
        }, 6000);
    } else {
        preloader.style.display = "none";
    }
};


let link1 = document.getElementById('links1');
let link2 = document.getElementById('links2');
let link3 = document.getElementById('links3');
let link4 = document.getElementById('links4');
let link5 = document.getElementById('links5');
let svg1 = document.getElementById('icon1');
let svg2 = document.getElementById('icon2');
let svg3 = document.getElementById('icon3');
let svg4 = document.getElementById('icon4');
let svg5 = document.getElementById('icon5');
let h21 = document.getElementById('h21');
let h22 = document.getElementById('h22');
let h23 = document.getElementById('h23');
let h24 = document.getElementById('h24');
let h25 = document.getElementById('h25');

link1.addEventListener('mouseenter', function() {
    h21.style.color = 'rgb(88, 101, 242)';
    h21.style.textShadow = '0px 0px 20px rgb(88, 101, 242)';
    icon1.style.color = 'rgb(88, 101, 242)';
    icon1.style.textShadow = '0px 0px 20px rgb(88, 101, 242)';
});
link1.addEventListener('mouseleave', function() {
    h21.style.color = '#7E7E7E';
    h21.style.textShadow = 'none';
    icon1.style.color = '#7E7E7E';
    icon1.style.textShadow = 'none';
});
link2.addEventListener('mouseenter', function() {
    h22.style.background = 'linear-gradient(45deg, #F9D800, #FCB045, #FD1D1D, #FD1D1D, #833AB4, #833AB4)';
    h22.style.webkitBackgroundClip = 'text';
    h22.style.color = 'transparent';
    icon2.style.background = 'linear-gradient(45deg, #F9D800, #FCB045, #FD1D1D, #FD1D1D, #833AB4, #833AB4)';
    icon2.style.webkitBackgroundClip = 'text';
    icon2.style.color = 'transparent';
});
link2.addEventListener('mouseleave', function() {
    h22.style.color = '#7E7E7E';
    h22.style.textShadow = 'none';
    icon2.style.color = '#7E7E7E';
    icon2.style.textShadow = 'none';
});
link3.addEventListener('mouseenter', function() {
    h23.style.color = 'rgb(29, 161, 242)';
    h23.style.textShadow = '0px 0px 20px rgb(29, 161, 242)';
    icon3.style.color = 'rgb(29, 161, 242)';
    icon3.style.textShadow = '0px 0px 20px rgb(29, 161, 242)';
});
link3.addEventListener('mouseleave', function() {
    h23.style.color = '#7E7E7E';
    h23.style.textShadow = 'none';
    icon3.style.textShadow = 'none';
    icon3.style.color = '#7E7E7E';
});
link4.addEventListener('mouseenter', function() {
    h24.style.color = 'rgb(255, 0, 0)';
    h24.style.textShadow = '0px 0px 20px rgb(255, 0, 0)';
    icon4.style.color = 'rgb(255, 0, 0)';
    icon4.style.textShadow = '0px 0px 20px rgb(255, 0, 0)';
});
link4.addEventListener('mouseleave', function() {
    h24.style.color = '#7E7E7E';
    h24.style.textShadow = 'none';
    icon4.style.color = '#7E7E7E';
    icon4.style.textShadow = 'none';
});
link5.addEventListener('mouseenter', function() {
    h25.style.color = 'rgb(0, 119, 181)';
    h25.style.textShadow = '0px 0px 20px rgb(0, 119, 181)';
    icon5.style.color = 'rgb(0, 119, 181)';
    icon5.style.textShadow = '0px 0px 20px rgb(0, 119, 181)';
});
link5.addEventListener('mouseleave', function() {
    h25.style.color = '#7E7E7E';
    h25.style.textShadow = 'none';
    icon5.style.color = '#7E7E7E';
    icon5.style.textShadow = 'none';
});





// const main1PageHeight = document.querySelector('.main1').offsetHeight;  

let trans = document.getElementById('trans');

window.addEventListener('scroll', function() {
    if (window.scrollY < 510 && window.scrollY >= 0) {
        trans.style.position = 'fixed';
        trans.style.display = 'block';
    }
    else if (window.scrollY > 510 && window.scrollY < 580) {
        trans.style.position = 'absolute';
        trans.style.display = 'none';
    }
    else {
        trans.style.position = 'fixed';
        trans.style.display = 'none';
    }
   });



let UIUX = document.getElementById('container1');
UIUX.addEventListener('click', function() {
    window.location.href = 'Pages/UI-UX.html';
});

let CW = document.getElementById('container2');
CW.addEventListener('click', function() {
    window.location.href = 'Pages/CW.html';
});

let Projects = document.getElementById('pro-Btn');
Projects.addEventListener('click', function() {
    window.location.href = 'Pages/Project.html';
});

let Feedback = document.getElementById('fbLink');
Feedback.addEventListener('click', function() {
    window.location.href = 'Pages/FeedBack.html';
});

document.addEventListener("DOMContentLoaded", function () {
    let Inquiry = document.getElementById('inquiry');

    if (Inquiry) {
        Inquiry.addEventListener('click', function () {
            window.location.href = 'Pages/Inquiry.html';
        });
    } else {
        console.error("Element with ID 'inquiry' not found in the DOM!");
    }
});


let BackToTop = document.getElementById('BTT');

BackToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
});


document.addEventListener("keydown", function (e) {
    if (e.key.startsWith("F") && parseInt(e.key.slice(1)) >= 1 && parseInt(e.key.slice(1)) <= 12) {
      e.preventDefault();
    }
    if (e.ctrlKey) {
      if (
        e.key === "a" ||
        e.key === "c" ||
        e.key === "v" ||
        e.key === "x" ||
        e.key === "s" ||
        e.key === "p" ||
        e.key === "u" ||
        e.key === "i" ||
        e.key === "j"
      ) {
        e.preventDefault();
      }
    }
    if (e.shiftKey && e.key === "F5") {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
    }
});









let nav1 = document.getElementById('nave1');
nav1.addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById("nave2").addEventListener("click", function () {
    if (window.location.pathname.includes("index.html")) {
        document.getElementById("portraitIMG").scrollIntoView({ behavior: "smooth" });
    } else {
        window.location.href = "index.html#portraitIMG";
    }
});
if (window.location.hash === "#portraitIMG") {
    setTimeout(() => {
        document.getElementById("portraitIMG").scrollIntoView({ behavior: "smooth" });
    }, 500);
}

let nav3 = document.getElementById('nave3');
nav3.addEventListener('click', function() {
    window.location.href = 'Pages/Project.html';
});
let nav4 = document.getElementById('nave4');
nav4.addEventListener('click', function() {
    window.location.href = 'Pages/Inquiry.html';
});
