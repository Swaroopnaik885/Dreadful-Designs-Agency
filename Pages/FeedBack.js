document.addEventListener("DOMContentLoaded", function () {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("dateInput").value = today;
});




document.addEventListener("DOMContentLoaded", () => {

    let db;
    const request = indexedDB.open("FeedbackDB", 1);

    request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains("feedback")) {
            db.createObjectStore("feedback", { keyPath: "id", autoIncrement: true });
        }
    };

    request.onsuccess = (event) => {
        db = event.target.result;
        displayFeedback();
    };

    request.onerror = (event) => {
        console.error("IndexedDB error: ", event.target.errorCode);
    };

    document.querySelector("button[type='submit']").addEventListener("click", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").querySelector("input").value;
        const date = document.getElementById("dateInput").value;
        const feedback = document.getElementById("feedback").querySelector("textarea").value;
        const suggestion = document.getElementById("suggest").querySelector("input").value;
        const rating = document.querySelectorAll(".clip-star.selected").length;
        const aboutUs = document.getElementById("options").value;

        if (!name || !date || !feedback) {
            alert("Please fill all required fields.");
            return;
        }

        const feedbackData = { name, date, feedback, suggestion, rating, aboutUs };
        
        const transaction = db.transaction(["feedback"], "readwrite");
        const store = transaction.objectStore("feedback");
        store.add(feedbackData);

        transaction.oncomplete = () => {
            alert("Feedback submitted successfully!");
            displayFeedback();
        };

        transaction.onerror = () => {
            alert("Failed to submit feedback.");
        };
    });

    function displayFeedback() {
        const transaction = db.transaction(["feedback"], "readonly");
        const store = transaction.objectStore("feedback");
        const request = store.getAll();

        request.onsuccess = () => {
            const feedbackList = request.result;
            const FList = document.getElementById("FList");
            FList.innerHTML = "";
            
            feedbackList.forEach(feedback => {
                const feedbackItem = document.createElement("div");
                feedbackItem.classList.add("feedback-item", "border", "border-white", "p-3", "mb-2", "rounded-[1.5vw]", "flex", "flex-col", "md:flex-row", "items-start", "w-full", "gap-2", "md:gap-0");
                feedbackItem.style.wordWrap = "break-word";
                feedbackItem.style.overflowWrap = "break-word";
                feedbackItem.style.maxWidth = "100%";
                
                feedbackItem.innerHTML = `
                    <div class="text-left text-white w-full md:w-[12.5vw] text-[4vw] md:text-[1.25vw] flex flex-row md:flex-col gap-5 md:gap-0 px-0 md:px-2">
                        <p><strong class="italic">${feedback.name}:</strong></p>
                        <p>${feedback.date}</p>
                    </div>
                    <div class="text-left text-white text-[4vw] md:text-[1.25vw] w-full overflow-hidden break-words self-start px-2 md:px-0">
                        <p>${feedback.feedback}</p>
                    </div>
                `;
                FList.appendChild(feedbackItem);
            });
        };
    }


    document.querySelectorAll(".clip-star").forEach((star, index) => {
        star.addEventListener("click", () => {
            document.querySelectorAll(".clip-star").forEach((s, i) => {
                if (i <= index) {
                    s.classList.add("selected");
                    s.style.backgroundColor = "yellow";
                } else {
                    s.classList.remove("selected");
                    s.style.backgroundColor = "white";
                }
            });
        });
    });
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
    let backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
        window.history.back();
    });
});






















// // Reseting Database
// document.addEventListener("DOMContentLoaded", () => {
//   // Reset the database before opening
//   const deleteRequest = indexedDB.deleteDatabase("FeedbackDB");

//   deleteRequest.onsuccess = () => {
//       console.log("Database deleted successfully.");
//       initializeDatabase(); // Reinitialize the database
//   };

//   deleteRequest.onerror = (event) => {
//       console.error("Error deleting database:", event.target.errorCode);
//       initializeDatabase(); // Even if delete fails, initialize database
//   };
// });

// function initializeDatabase() {
//   let db;
//   const request = indexedDB.open("FeedbackDB", 1);

//   request.onupgradeneeded = (event) => {
//       db = event.target.result;
//       if (!db.objectStoreNames.contains("feedback")) {
//           db.createObjectStore("feedback", { keyPath: "id", autoIncrement: true });
//       }
//   };

//   request.onsuccess = (event) => {
//       db = event.target.result;
//       console.log("Database initialized.");
//   };

//   request.onerror = (event) => {
//       console.error("IndexedDB error: ", event.target.errorCode);
//   };
// }