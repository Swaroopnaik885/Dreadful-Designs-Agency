document.addEventListener("DOMContentLoaded", function () {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("dateInput").value = today;
});

document.getElementById("YIsubmit").addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name input").value.trim();
    const email = document.querySelector("#email input").value.trim();
    const phone = document.querySelector("#number input").value.trim();
    const subject = document.querySelector("#subject input").value.trim();
    const message = document.querySelector("#message textarea").value.trim();

    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    let messageDiv = document.getElementById("successMessage");
    if (!messageDiv) {
        messageDiv = document.createElement("p");
        messageDiv.id = "successMessage";
        messageDiv.classList.add("text-white", "text-[1.3vw]", "mt-4", "text-center");
        messageDiv.textContent = "'Thank you for reaching out! We'll get back to you within 1-2 business days.'";

        document.getElementById("YIsubmit").before(messageDiv);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const arrowDown = document.getElementById('arrowD');
    const arrowUp = document.getElementById('arrowU');
    const options = document.getElementById('options');

    if (!options || !arrowDown || !arrowUp) {
        console.error("One or more elements are missing! Check your HTML.");
        return;
    }

    options.addEventListener("click", function () {
        const isHidden = arrowDown.style.display === 'none';
        arrowDown.style.display = isHidden ? 'block' : 'none';
        arrowUp.style.display = isHidden ? 'none' : 'block';
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById('options');

    if (!selectElement) {
        console.error("Element with ID 'options' not found! Check your HTML.");
        return;
    }

    selectElement.addEventListener('change', function () {
        this.classList.add('text-white');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let BackToTop = document.getElementById('BTT');

    if (!BackToTop) {
        console.error("Element with ID 'BTT' not found! Check your HTML.");
        return;
    }

    BackToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});






function validatePhone(input) {
    if (!input.value.startsWith("+91 ")) {
        input.value = "+91 ";
    }
    
    let numbersOnly = input.value.replace(/\D/g, '');
    numbersOnly = numbersOnly.replace(/^91/, '');

    input.value = "+91 " + numbersOnly.slice(0, 10);
}



document.addEventListener("DOMContentLoaded", function () {
    let Feedback = document.getElementById('fbLink');

    if (!Feedback) {
        console.error("Element with ID 'fbLink' not found! Check your HTML.");
        return;
    }

    Feedback.addEventListener('click', function () {
        window.location.href = 'FeedBack.html';
    });
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











document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[type='radio']");

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            let group = this.name;
            document.querySelectorAll(`input[name='${group}']`).forEach(input => {
                input.nextElementSibling.querySelector(".dot").classList.add("hidden");
            });

            this.nextElementSibling.querySelector(".dot").classList.remove("hidden");
        });
    });
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






