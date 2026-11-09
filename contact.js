
// Select the contact form
const contactForm = document.getElementById("contactForm");

// Select the message paragraph
const formMessage = document.getElementById("formMessage");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Display a success message
    formMessage.textContent =
        "Thank you! Your message has been received. 💗";

    // Clear the form fields
    contactForm.reset();

});
