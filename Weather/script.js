// JavaScript for Smooth Carousel and Interactivity

// Carousel Navigation
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    document.querySelector(".carousel-wrapper").style.transform = `translateX(${-slideIndex * 100}%)`;

    // Highlight active dot
    dots.forEach((dot, i) => {
        dot.classList.remove("active");
        if (i === slideIndex) {
            dot.classList.add("active");
        }
    });
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function moveToSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

// Navigation function to pages
function navigateTo(page) {
    window.location.href = page;
}

// Booking Button Click Alert
const bookBtn = document.querySelector('.book-btn');
if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        alert('Redirecting to Booking Page...');
    });
}

// Read More Button Interactivity
const readBtns = document.querySelectorAll('.read-btn');
readBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Fetching More Information...');
    });
});
// Home Booking Modal Functionality
const homeBookNowBtn = document.querySelector('.home-book-btn');
const homeModal = document.getElementById('homeBookingModal');
const homeCloseModal = document.querySelector('.close-btn');
const homeBookingForm = document.getElementById('homeBookingForm');

// Show Modal on 'Book Now' Click
homeBookNowBtn.addEventListener('click', () => {
    homeModal.style.display = 'block';
});

// Close Modal
homeCloseModal.addEventListener('click', () => {
    homeModal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === homeModal) {
        homeModal.style.display = 'none';
    }
});

// Handle Form Submission
homeBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const destination = document.getElementById('home-destination').value;
    const checkin = document.getElementById('home-checkin').value;
    const checkout = document.getElementById('home-checkout').value;
    const guests = document.getElementById('home-guests').value;

    alert(`Booking Confirmed!\nDestination: ${destination}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}`);
    homeModal.style.display = 'none';
    homeBookingForm.reset();
});
// Open Booking Form
function openBookingForm() {
    document.getElementById("bookingModal").style.display = "flex";
}

// Close Booking Form
function closeBookingForm() {
    document.getElementById("bookingModal").style.display = "none";
}

// Confirm Booking
function confirmBooking(event) {
    event.preventDefault(); // Prevent form submission
    closeBookingForm(); // Hide the form
    showConfirmation(); // Show confirmation
}

// Show Confirmation Message
function showConfirmation() {
    const confirmationMsg = document.getElementById("confirmationMsg");
    confirmationMsg.style.display = "block";

    // Hide confirmation message after 3 seconds
    setTimeout(() => {
        confirmationMsg.style.display = "none";
    }, 3000);
}
// Smooth Scrolling for About Us
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

