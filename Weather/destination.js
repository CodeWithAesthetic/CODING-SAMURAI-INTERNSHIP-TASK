// Destination Details Interaction
const detailButtons = document.querySelectorAll('.view-details-btn');
detailButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const destinationName = e.target.closest('.destination-card').querySelector('h3').innerText;
        alert(`Loading details for ${destinationName}...`);
        // Simulate redirect to detailed page (replace with actual URLs)
        window.location.href = `#${destinationName.toLowerCase().replace(/\s/g, '-')}-details`;
    });
});

// Hotel Booking Interaction
const bookButton = document.querySelector('.confirm-btn');
if (bookButton) {
    bookButton.addEventListener('click', () => {
        alert('Redirecting to the booking page...');
        // Redirect or open booking form
        window.location.href = '#hotel-booking';
    });
}

// Offer Notification with Animation
const offerSection = document.querySelector('.offers');
if (offerSection) {
    setTimeout(() => {
        offerSection.style.transition = 'transform 0.5s ease-in-out';
        offerSection.style.transform = 'scale(1.05)';
        setTimeout(() => {
            offerSection.style.transform = 'scale(1)';
        }, 500);
    }, 2000);
}

// Smooth Scroll to Sections
const scrollToSection = (targetId) => {
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

// Navigation Buttons to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (document.querySelector(targetId)) {
            scrollToSection(targetId);
        }
    });
});

// Highlight Active Section in View
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    sections.forEach(section => {
        const offsetTop = section.offsetTop - 70;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
});

// Map Animation on Scroll
const mapSection = document.querySelector('.map-section');
if (mapSection) {
    window.addEventListener('scroll', () => {
        const rect = mapSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            mapSection.style.transition = 'transform 0.5s ease-in-out';
            mapSection.style.transform = 'scale(1.05)';
        } else {
            mapSection.style.transform = 'scale(1)';
        }
    });
}

// Auto-Play for Map Focus Effect
if (mapSection) {
    setInterval(() => {
        mapSection.style.transform = 'scale(1.1)';
        setTimeout(() => {
            mapSection.style.transform = 'scale(1)';
        }, 500);
    }, 5000);
}

// Notification for Special Offers
setTimeout(() => {
    alert('Hurry! Special Offers Available for a Limited Time!');
}, 3000);

// Open Booking Form
function openBookingForm() {
    alert("Booking form will appear here! 🚀");
}

// Open Destination Modal
function openDestinationModal(destinationName) {
    alert(`Showing details for ${destinationName} 🌟`);
}

// Carousel Control
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function moveSlide(n) {
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    document.querySelector('.carousel').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto-Play Carousel
setInterval(() => {
    moveSlide(1);
}, 5000); // Change slide every 5 seconds
