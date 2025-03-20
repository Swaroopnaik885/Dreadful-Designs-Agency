
document.addEventListener("DOMContentLoaded", function () {

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


document.addEventListener("DOMContentLoaded", function() {
  let Projects = document.getElementById('pro-Btn');
  if (Projects) { 
      Projects.addEventListener('click', function() {
          window.location.href = 'Project.html';
      });
  } else {
      console.error("Button with id 'proBtn' not found!");
  }
});


document.addEventListener("DOMContentLoaded", function() {
  let Feedback = document.getElementById('fbLink');
  if (Feedback) { 
    Feedback.addEventListener('click', function() {
          window.location.href = 'FeedBack.html';
      });
  } else {
      console.error("Button with id 'fbLink' not found!");
  }
});


document.addEventListener("DOMContentLoaded", function () {
    let Inquiry = document.getElementById('inquiry');

    if (Inquiry) {
        Inquiry.addEventListener('click', function () {
            window.location.href = 'Inquiry.html';
        });
    } else {
        console.error("Element with ID 'inquiry' not found in the DOM!");
    }
});


document.addEventListener("DOMContentLoaded", function () {
  let BackToTop = document.getElementById('BTT');

  if (BackToTop) {
      BackToTop.addEventListener('click', function () {
          window.scrollTo({
              top: 0,
              behavior: 'smooth',
          });
      });
  }
});




document.addEventListener("DOMContentLoaded", function () {
    let nav1 = document.getElementById('nave1');
    nav1.addEventListener('click', function() {
        window.location.href = '../index.html'; 
    }); 
    document.getElementById("nave2").addEventListener("click", function () {
        if (window.location.pathname.includes("../index.html")) {
            document.getElementById("portraitIMG").scrollIntoView({ behavior: "smooth" });
        } else {
            window.location.href = "../index.html#portraitIMG";
        }
    });
    if (window.location.hash === "#portraitIMG") {
        setTimeout(() => {
            document.getElementById("portraitIMG").scrollIntoView({ behavior: "smooth" });
        }, 500);
    }
    let nav3 = document.getElementById('nave3');
    nav3.addEventListener('click', function() {
        window.location.href = 'Project.html';
    });
    let nav4 = document.getElementById('nave4');
    nav4.addEventListener('click', function() {
        window.location.href = 'Inquiry.html';
    });
});