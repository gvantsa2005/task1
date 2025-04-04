document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Toggle hamburger to X
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            
            // Reset hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Form validation
    const registrationForm = document.getElementById('registrationForm');
    const registrationSuccess = document.getElementById('registrationSuccess');
    const registerAnother = document.getElementById('registerAnother');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(el => {
                el.textContent = '';
            });
            
            let isValid = true;
            
            // Validate first name
            const firstName = document.getElementById('firstName');
            if (firstName.value.length < 2) {
                document.getElementById('firstNameError').textContent = 'First name must be at least 2 characters.';
                isValid = false;
            }
            
            // Validate last name
            const lastName = document.getElementById('lastName');
            if (lastName.value.length < 2) {
                document.getElementById('lastNameError').textContent = 'Last name must be at least 2 characters.';
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address.';
                isValid = false;
            }
            
            // Validate phone
            const phone = document.getElementById('phone');
            if (phone.value.length < 6) {
                document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
                isValid = false;
            }
            
            // Validate country
            const country = document.getElementById('country');
            if (!country.value) {
                document.getElementById('countryError').textContent = 'Please select your country.';
                isValid = false;
            }
            
            // Validate date of birth
            const dateOfBirth = document.getElementById('dateOfBirth');
            if (!dateOfBirth.value) {
                document.getElementById('dateOfBirthError').textContent = 'Please enter your date of birth.';
                isValid = false;
            }
            
            // Validate age category
            const ageCategory = document.getElementById('ageCategory');
            if (!ageCategory.value) {
                document.getElementById('ageCategoryError').textContent = 'Please select your age category.';
                isValid = false;
            }
            
            // Validate events
            const events = document.querySelectorAll('input[name="events"]:checked');
            if (events.length === 0) {
                document.getElementById('eventsError').textContent = 'Please select at least one event.';
                isValid = false;
            }
            
            // Validate terms
            const termsAccepted = document.getElementById('termsAccepted');
            if (!termsAccepted.checked) {
                document.getElementById('termsAcceptedError').textContent = 'You must accept the terms and conditions.';
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real application, you would send the form data to a server here
                console.log('Form submitted successfully');
                
                // Show success message
                registrationForm.style.display = 'none';
                registrationSuccess.style.display = 'block';
                
                // Scroll to success message
                registrationSuccess.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Register another player button
    if (registerAnother) {
        registerAnother.addEventListener('click', function() {
            registrationSuccess.style.display = 'none';
            registrationForm.style.display = 'block';
            registrationForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});