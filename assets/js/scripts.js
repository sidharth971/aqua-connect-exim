// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize all functionality
        initMobileMenu();
        initFAQ();
        initModal();
        initSmoothScrolling();
        initImageLoading();
        initScrollToTop();
        
        console.log('Website initialized successfully');
    } catch (error) {
        console.error('Error initializing website:', error);
    }
});

// Mobile Menu Toggle
function initMobileMenu() {
    try {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
                
                // Animate hamburger lines
                const spans = hamburger.querySelectorAll('span');
                spans.forEach((span, index) => {
                    if (hamburger.classList.contains('active')) {
                        if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        if (index === 1) span.style.opacity = '0';
                        if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    } else {
                        span.style.transform = 'none';
                        span.style.opacity = '1';
                    }
                });
            });
            
            // Close menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    
                    // Reset hamburger animation
                    const spans = hamburger.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = 'none';
                        span.style.opacity = '1';
                    });
                });
            });
        }
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
}

// FAQ Accordion
function initFAQ() {
    try {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isActive = this.classList.contains('active');
                
                // Close all other FAQ items
                faqQuestions.forEach(q => {
                    q.classList.remove('active');
                    const a = q.nextElementSibling;
                    if (a) {
                        a.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                if (!isActive) {
                    this.classList.add('active');
                    if (answer) {
                        answer.classList.add('active');
                    }
                }
            });
        });
    } catch (error) {
        console.error('Error initializing FAQ:', error);
    }
}

// Modal Functionality
function initModal() {
    try {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.querySelector('.close');
        
        if (modal && closeBtn) {
            // Close modal when clicking X
            closeBtn.addEventListener('click', closeModal);
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && modal.style.display === 'block') {
                    closeModal();
                }
            });
        }
    } catch (error) {
        console.error('Error initializing modal:', error);
    }
}

// Open Modal Function
function openModal(type) {
    try {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        
        if (!modal || !modalBody) {
            console.error('Modal elements not found');
            return;
        }
        
        let content = '';
        
        switch (type) {
            case 'enquiry':
                content = `
                    <h2>Send Inquiry</h2>
                    <form class="modal-form">
                        <div class="form-group">
                            <label for="fullName">Full Name *</label>
                            <input type="text" id="fullName" name="fullName" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="company">Company Name</label>
                            <input type="text" id="company" name="company">
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <select id="country" name="country">
                                <option value="">Select Country</option>
                                <option value="USA">USA</option>
                                <option value="UK">United Kingdom</option>
                                <option value="UAE">UAE</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="product">Product of Interest</label>
                            <select id="product" name="product">
                                <option value="">Select Product</option>
                                <option value="Jaggery Powder">Jaggery Powder</option>
                                <option value="Banana Powder">Banana Powder</option>
                                <option value="Turmeric Powder">Turmeric Powder</option>
                                <option value="Onion Powder">Onion Powder & Flakes</option>
                                <option value="Red Chilli Powder">Red Chilli Powder</option>
                                <option value="Cumin Seed">Cumin Seed</option>
                                <option value="Black Tea Powder">Black Tea Powder</option>
                                <option value="Green Tea Powder">Green Tea Powder</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="message">Additional Requirements</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Inquiry</button>
                    </form>
                `;
                break;
                
            case 'brochure':
                content = `
                    <h2>Download Brochure</h2>
                    <p>Get our comprehensive product brochure with detailed information about all our spices and export services.</p>
                    <form class="modal-form">
                        <div class="form-group">
                            <label for="downloadName">Full Name *</label>
                            <input type="text" id="downloadName" name="downloadName" required>
                        </div>
                        <div class="form-group">
                            <label for="downloadEmail">Email *</label>
                            <input type="email" id="downloadEmail" name="downloadEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="downloadCompany">Company Name</label>
                            <input type="text" id="downloadCompany" name="downloadCompany">
                        </div>
                        <button type="submit" class="btn btn-primary">Download Brochure</button>
                    </form>
                `;
                break;
                
            case 'join-team':
                content = `
                    <h2>Join Our Global Team</h2>
                    <p>We're looking for experienced international spice sales agents. Join us in expanding our global reach!</p>
                    <form class="modal-form">
                        <div class="form-group">
                            <label for="agentName">Full Name *</label>
                            <input type="text" id="agentName" name="agentName" required>
                        </div>
                        <div class="form-group">
                            <label for="agentEmail">Email *</label>
                            <input type="email" id="agentEmail" name="agentEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="agentPhone">Phone Number *</label>
                            <input type="tel" id="agentPhone" name="agentPhone" required>
                        </div>
                        <div class="form-group">
                            <label for="experience">Years of Experience in Spice Sales</label>
                            <select id="experience" name="experience">
                                <option value="">Select Experience</option>
                                <option value="2-3 years">2-3 years</option>
                                <option value="3-5 years">3-5 years</option>
                                <option value="5+ years">5+ years</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="region">Preferred Region</label>
                            <input type="text" id="region" name="region" placeholder="e.g., Europe, Middle East, Asia">
                        </div>
                        <div class="form-group">
                            <label for="agentMessage">Tell us about your experience</label>
                            <textarea id="agentMessage" name="agentMessage" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Application</button>
                    </form>
                `;
                break;
                
            case 'import':
                content = `
                    <h2>Import Authentic Indian Products</h2>
                    <p>Start importing premium quality Indian spices and processed foods for your business.</p>
                    <form class="modal-form">
                        <div class="form-group">
                            <label for="importerName">Full Name *</label>
                            <input type="text" id="importerName" name="importerName" required>
                        </div>
                        <div class="form-group">
                            <label for="importerEmail">Email *</label>
                            <input type="email" id="importerEmail" name="importerEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="importerCompany">Company Name *</label>
                            <input type="text" id="importerCompany" name="importerCompany" required>
                        </div>
                        <div class="form-group">
                            <label for="importCountry">Country *</label>
                            <input type="text" id="importCountry" name="importCountry" required>
                        </div>
                        <div class="form-group">
                            <label for="importProducts">Products of Interest</label>
                            <textarea id="importProducts" name="importProducts" rows="3" placeholder="List the products you're interested in importing"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="importQuantity">Expected Monthly Quantity</label>
                            <input type="text" id="importQuantity" name="importQuantity" placeholder="e.g., 1000 kg, 5 tons">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit Import Inquiry</button>
                    </form>
                `;
                break;
                
            case 'questions':
                content = `
                    <h2>Have More Questions?</h2>
                    <p>Our team is here to help! Send us your questions and we'll get back to you quickly.</p>
                    <form class="modal-form">
                        <div class="form-group">
                            <label for="questionName">Full Name *</label>
                            <input type="text" id="questionName" name="questionName" required>
                        </div>
                        <div class="form-group">
                            <label for="questionEmail">Email *</label>
                            <input type="email" id="questionEmail" name="questionEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="questionSubject">Subject</label>
                            <input type="text" id="questionSubject" name="questionSubject">
                        </div>
                        <div class="form-group">
                            <label for="questionMessage">Your Question *</label>
                            <textarea id="questionMessage" name="questionMessage" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Question</button>
                    </form>
                `;
                break;
                
            default:
                content = '<h2>Information</h2><p>Thank you for your interest!</p>';
        }
        
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        
        // Add form submission handler
        const form = modalBody.querySelector('.modal-form');
        if (form) {
            form.addEventListener('submit', handleFormSubmission);
        }
        
    } catch (error) {
        console.error('Error opening modal:', error);
    }
}

// Close Modal Function
function closeModal() {
    try {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    } catch (error) {
        console.error('Error closing modal:', error);
    }
}

// Handle Form Submission
function handleFormSubmission(event) {
    event.preventDefault();
    
    try {
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        console.log('Form submitted:', data);
        
        // Show success message
        const modalBody = document.getElementById('modal-body');
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="success-message">
                    <h2>Thank You!</h2>
                    <p>Your submission has been received. We'll get back to you soon!</p>
                    <button class="btn btn-primary" onclick="closeModal()">Close</button>
                </div>
            `;
        }
        
        // In a real application, you would send this data to your server
        // fetch('/submit-form', { method: 'POST', body: formData })
        
    } catch (error) {
        console.error('Error handling form submission:', error);
        alert('There was an error submitting the form. Please try again.');
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    try {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                const href = this.getAttribute('href');
                
                if (href === '#' || href === '#top') {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }
                
                const target = document.querySelector(href);
                if (target) {
                    event.preventDefault();
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error initializing smooth scrolling:', error);
    }
}

// Image Loading with Fade-in Effect
function initImageLoading() {
    try {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } catch (error) {
        console.error('Error initializing image loading:', error);
    }
}

// Scroll to Top Functionality
function initScrollToTop() {
    try {
        // Create scroll to top button
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '↑';
        scrollButton.className = 'scroll-to-top';
        scrollButton.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            display: none;
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(scrollButton);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        scrollButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
    } catch (error) {
        console.error('Error initializing scroll to top:', error);
    }
}

// Active Navigation Link Highlighting
window.addEventListener('scroll', function() {
    try {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
    } catch (error) {
        console.error('Error updating active navigation:', error);
    }
});

// Add CSS for modal forms
const modalStyles = `
    .modal-form {
        max-width: 500px;
        margin: 0 auto;
    }
    
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
        color: var(--text-dark);
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        font-family: var(--font-primary);
        font-size: 1rem;
        transition: var(--transition);
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
    }
    
    .success-message {
        text-align: center;
        padding: 40px 20px;
    }
    
    .success-message h2 {
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .success-message p {
        margin-bottom: 25px;
        color: var(--text-light);
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Error handling for missing elements
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
});

// Handle image loading errors
document.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG') {
        console.warn('Image failed to load:', event.target.src);
        event.target.style.display = 'none';
    }
}, true);
