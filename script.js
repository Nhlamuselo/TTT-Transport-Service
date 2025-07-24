
// ========================================
// GLOBAL VARIABLES AND DATA
// ========================================

const fleetData = {
    sedan: {
        title: "Executive Sedans - Toyota Corolla",
        price: "R500-800 per trip",
        icon: "fas fa-car",
        basePrice: 650,
        specs: [
            { icon: "fas fa-users", label: "Passengers", value: "4-5 People" },
            { icon: "fas fa-suitcase", label: "Luggage", value: "3-4 Bags" },
            { icon: "fas fa-snowflake", label: "Climate", value: "Air Conditioning" },
            { icon: "fas fa-wifi", label: "Features", value: "WiFi & USB" }
        ],
        description: "Perfect for business travel, airport transfers, and executive transport. Our Toyota Corolla fleet offers comfort, reliability, and professional service.",
        features: [
            "Professional chauffeur service",
            "Leather interior and premium comfort",
            "GPS tracking and real-time updates",
            "Complimentary water and refreshments",
            "Child seats available on request",
            "24/7 customer support"
        ]
    },
    van: {
        title: "Luxury Vans - VW Multivan",
        price: "R800-1500 per trip",
        icon: "fas fa-bus",
        basePrice: 1150,
        specs: [
            { icon: "fas fa-users", label: "Passengers", value: "7-8 People" },
            { icon: "fas fa-suitcase", label: "Luggage", value: "8-10 Bags" },
            { icon: "fas fa-snowflake", label: "Climate", value: "Dual AC Zones" },
            { icon: "fas fa-tv", label: "Features", value: "Entertainment System" }
        ],
        description: "Ideal for group travel, family trips, and corporate shuttles. Spacious and comfortable with premium amenities for longer journeys.",
        features: [
            "Spacious interior with reclining seats",
            "Entertainment system with screens",
            "Multiple charging ports",
            "Panoramic sunroof",
            "Extra luggage space",
            "Group booking discounts available"
        ]
    },
    suv: {
        title: "SUV Fleet - Hyundai Venue",
        price: "R600-1000 per trip",
        icon: "fas fa-truck",
        basePrice: 800,
        specs: [
            { icon: "fas fa-users", label: "Passengers", value: "5-6 People" },
            { icon: "fas fa-suitcase", label: "Luggage", value: "4-6 Bags" },
            { icon: "fas fa-mountain", label: "Terrain", value: "All-Terrain" },
            { icon: "fas fa-shield-alt", label: "Safety", value: "Advanced Safety" }
        ],
        description: "Perfect for adventure trips, rough terrain, and family outings. Built for comfort and safety on any road condition.",
        features: [
            "All-wheel drive capability",
            "High ground clearance",
            "Advanced safety features",
            "Roof rack for extra luggage",
            "Rugged yet comfortable interior",
            "Perfect for long-distance travel"
        ]
    },
    truck: {
        title: "Trucks - Heavy Duty",
        price: "R1200-2000 per trip",
        icon: "fas fa-truck-moving",
        basePrice: 1600,
        specs: [
            { icon: "fas fa-weight-hanging", label: "Capacity", value: "3-5 Tons" },
            { icon: "fas fa-users", label: "Crew", value: "2-3 People" },
            { icon: "fas fa-tools", label: "Equipment", value: "Loading Equipment" },
            { icon: "fas fa-shield-alt", label: "Insurance", value: "Fully Covered" }
        ],
        description: "Heavy-duty trucks for moving, construction, and cargo transport. Professional drivers and loading assistance included.",
        features: [
            "Professional loading crew",
            "Heavy-duty cargo capacity",
            "Moving equipment included",
            "Fully insured transport",
            "Secure cargo handling",
            "Commercial transport certified"
        ]
    },
    trailer: {
        title: "Trailers - Extra Capacity",
        price: "R1500-2500 per trip",
        icon: "fas fa-trailer",
        basePrice: 2000,
        specs: [
            { icon: "fas fa-weight-hanging", label: "Capacity", value: "5-10 Tons" },
            { icon: "fas fa-ruler-horizontal", label: "Length", value: "6-12 Meters" },
            { icon: "fas fa-lock", label: "Security", value: "Enclosed/Open" },
            { icon: "fas fa-tools", label: "Equipment", value: "Hydraulic Loading" }
        ],
        description: "Large capacity trailers for heavy cargo, construction materials, and long-distance freight transport.",
        features: [
            "Hydraulic loading systems",
            "GPS tracking throughout journey",
            "Specialized cargo handling",
            "Long-distance transport capable",
            "Weather-resistant cargo protection",
            "Professional freight handling"
        ]
    }
};

const servicePricing = {
    'airport-transfer': { base: 600, description: 'Airport to destination' },
    'corporate-shuttle': { base: 400, description: 'Per hour rate' },
    'wedding-transport': { base: 1500, description: 'Full day service' },
    'funeral-service': { base: 1200, description: 'Respectful service' },
    'long-distance': { base: 3500, description: 'To major cities' },
    'city-transport': { base: 300, description: 'Local city trips' },
    'tour-package': { base: 2000, description: 'Full day tours' },
    'emergency': { base: 800, description: '24/7 emergency service' }
};

const extraServices = {
    'child-seat': 50,
    'gps': 30,
    'additional-driver': 200,
    'luggage-trailer': 150,
    'insurance': 100,
    'long-distance': 500
};

const marketingServices = {
    'logo-design': 300,
    'poster-flyer': 250,
    'social-media-content': 400,
    'website-copywriting': 500,
    'business-profile': 350,
    'whatsapp-catalog': 200,
    'consultation': 150
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

function generateReference(prefix) {
    return prefix + Date.now().toString().slice(-6);
}

function formatCurrency(amount) {
    return 'R' + Math.round(amount).toLocaleString();
}

function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        input.min = today;
    });
}

// ========================================
// MODAL FUNCTIONS
// ========================================

function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';
    setMinDate();
    setupBookingCalculator();
}

function openMarketingModal() {
    const modal = document.getElementById('marketingModal');
    modal.style.display = 'block';
    setMinDate();
    setupMarketingCalculator();
}

function openTradingModal() {
    // For now, just show an alert with contact info
    alert('Trading Consultation Services\n\nFor business consultation and trading services, please contact us directly:\n\nPhone: 072 844 3506\nEmail: info@ttttrading.co.za\nWhatsApp: Click the WhatsApp button\n\nWe\'ll schedule a consultation to discuss your specific business needs.');
}

function open3DModal() {
    const modal = document.getElementById('toolshipModal');
    modal.style.display = 'block';
    setup3DCalculator();
}

function openMapModal() {
    const modal = document.getElementById('mapModal');
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// ========================================
// FLEET MANAGEMENT FUNCTIONS
// ========================================

function showFleetDetails(vehicleType) {
    const vehicle = fleetData[vehicleType];
    if (!vehicle) return;

    const content = `
        <div class="fleet-vehicle">
            <div class="vehicle-header">
                <div class="vehicle-image">
                    <i class="${vehicle.icon}"></i>
                </div>
                <div class="vehicle-info">
                    <h3>${vehicle.title}</h3>
                    <div class="vehicle-price">${vehicle.price}</div>
                </div>
            </div>
            
            <div class="vehicle-specs">
                ${vehicle.specs.map(spec => `
                    <div class="spec-item">
                        <i class="${spec.icon}"></i>
                        <div class="spec-label">${spec.label}:</div>
                        <div class="spec-value">${spec.value}</div>
                    </div>
                `).join('')}
            </div>
            
            <p style="color: #ccc; margin-bottom: 1.5rem;">${vehicle.description}</p>
            
            <h4 style="color: #ff6b35; margin-bottom: 1rem;">Key Features:</h4>
            <ul style="color: #ccc; line-height: 1.8; list-style: none;">
                ${vehicle.features.map(feature => `<li style="padding: 0.3rem 0;">✓ ${feature}</li>`).join('')}
            </ul>
            
            <button class="service-btn" onclick="selectVehicleAndBook('${vehicleType}')">
                Book This Vehicle Now
            </button>
        </div>
    `;
    
    // Show modal with vehicle details
    const modal = document.getElementById('fleetModal') || createFleetModal();
    modal.querySelector('.modal-body').innerHTML = content;
    modal.querySelector('.modal-header h2').textContent = vehicle.title;
    modal.style.display = 'block';
}

function createFleetModal() {
    const modal = document.createElement('div');
    modal.id = 'fleetModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Fleet Details</h2>
                <span class="close" onclick="closeModal('fleetModal')">&times;</span>
            </div>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function showFleetOverview() {
    const content = Object.keys(fleetData).map(key => {
        const vehicle = fleetData[key];
        return `
            <div class="fleet-vehicle" onclick="showFleetDetails('${key}')" style="cursor: pointer; margin-bottom: 1rem;">
                <div class="vehicle-header">
                    <div class="vehicle-image">
                        <i class="${vehicle.icon}"></i>
                    </div>
                    <div class="vehicle-info">
                        <h3>${vehicle.title}</h3>
                        <div class="vehicle-price">${vehicle.price}</div>
                    </div>
                </div>
                <p style="color: #ccc; margin-bottom: 1rem;">${vehicle.description}</p>
                <button class="service-btn" onclick="event.stopPropagation(); selectVehicleAndBook('${key}')">
                    Book Now
                </button>
            </div>
        `;
    }).join('');
    
    const modal = document.getElementById('fleetModal') || createFleetModal();
    modal.querySelector('.modal-body').innerHTML = content;
    modal.querySelector('.modal-header h2').textContent = 'Our Complete Fleet';
    modal.style.display = 'block';
}

function selectVehicleAndBook(vehicleType) {
    closeModal('fleetModal');
    openBookingModal();
    
    // Pre-select the vehicle type
    setTimeout(() => {
        const vehicleRadio = document.getElementById(vehicleType);
        if (vehicleRadio) {
            vehicleRadio.checked = true;
            calculateBookingCost();
        }
    }, 100);
}

// ========================================
// BOOKING CALCULATOR
// ========================================

function setupBookingCalculator() {
    // Add event listeners for cost calculation
    const form = document.getElementById('bookingForm');
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        input.addEventListener('change', calculateBookingCost);
        input.addEventListener('input', calculateBookingCost);
    });
}

function calculateBookingCost() {
    const selectedVehicle = document.querySelector('input[name="vehicle"]:checked');
    const selectedExtras = document.querySelectorAll('input[name="extras"]:checked');
    const pickupLocation = document.getElementById('pickupLocation').value;
    const dropoffLocation = document.getElementById('dropoffLocation').value;
    const returnDate = document.getElementById('returnDate').value;
    
    if (!selectedVehicle) {
        document.getElementById('costSummary').style.display = 'none';
        return;
    }
    
    let totalCost = 0;
    const vehicleType = selectedVehicle.value;
    const vehicleData = fleetData[vehicleType];
    
    if (vehicleData) {
        totalCost = vehicleData.basePrice;
        
        // Add extra services cost
        selectedExtras.forEach(extra => {
            const extraCost = extraServices[extra.value] || 0;
            totalCost += extraCost;
        });
        
        // Add return trip cost
        if (returnDate) {
            totalCost += vehicleData.basePrice * 0.8; // 80% of base price for return
        }
        
        // Estimate distance multiplier (simplified)
        if (pickupLocation && dropoffLocation) {
            const isLongDistance = checkLongDistance(pickupLocation, dropoffLocation);
            if (isLongDistance) {
                totalCost *= 2.5;
            }
        }
        
        // Display cost breakdown
        updateCostSummary(vehicleType, selectedExtras, totalCost, returnDate);
    }
}

function checkLongDistance(pickup, dropoff) {
    const longDistanceKeywords = ['maputo', 'botswana', 'zimbabwe', 'cape town', 'durban', 'port elizabeth'];
    const text = (pickup + ' ' + dropoff).toLowerCase();
    return longDistanceKeywords.some(keyword => text.includes(keyword));
}

function updateCostSummary(vehicleType, extras, totalCost, returnDate) {
    const summaryEl = document.getElementById('costSummary');
    const breakdownEl = document.getElementById('costBreakdown');
    const totalEl = document.getElementById('totalCost');
    
    let breakdown = `
        <p><strong>Vehicle:</strong> ${fleetData[vehicleType].title}</p>
        <p><strong>Base Cost:</strong> ${formatCurrency(fleetData[vehicleType].basePrice)}</p>
    `;
    
    if (extras.length > 0) {
        breakdown += '<p><strong>Extra Services:</strong></p><ul>';
        extras.forEach(extra => {
            const cost = extraServices[extra.value] || 0;
            breakdown += `<li>${extra.value.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}: ${formatCurrency(cost)}</li>`;
        });
        breakdown += '</ul>';
    }
    
    if (returnDate) {
        breakdown += `<p><strong>Return Trip:</strong> ${formatCurrency(fleetData[vehicleType].basePrice * 0.8)}</p>`;
    }
    
    breakdownEl.innerHTML = breakdown;
    totalEl.textContent = formatCurrency(totalCost);
    summaryEl.style.display = 'block';
}

// ========================================
// MARKETING CALCULATOR
// ========================================

function setupMarketingCalculator() {
    const form = document.getElementById('marketingForm');
    const checkboxes = form.querySelectorAll('input[name="services"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateMarketingCost);
    });
}

function calculateMarketingCost() {
    const selectedServices = document.querySelectorAll('input[name="services"]:checked');
    let totalCost = 0;
    let breakdown = '';
    
    if (selectedServices.length === 0) {
        document.getElementById('marketingSummary').style.display = 'none';
        return;
    }
    
    selectedServices.forEach(service => {
        const cost = marketingServices[service.value] || 0;
        totalCost += cost;
        const serviceName = service.value.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
        breakdown += `<p><strong>${serviceName}:</strong> ${formatCurrency(cost)}</p>`;
    });
    
    document.getElementById('marketingCostBreakdown').innerHTML = breakdown;
    document.getElementById('marketingTotal').textContent = formatCurrency(totalCost);
    document.getElementById('marketingSummary').style.display = 'block';
}

// ========================================
// 3D TOOLSHIP CALCULATOR
// ========================================

function setup3DCalculator() {
    const packageSelect = document.getElementById('toolshipPackage');
    packageSelect.addEventListener('change', calculate3DCost);
}

function calculate3DCost() {
    const packageSelect = document.getElementById('toolshipPackage');
    const selectedOption = packageSelect.options[packageSelect.selectedIndex];
    
    if (!selectedOption.value) {
        document.getElementById('toolshipSummary').style.display = 'none';
        return;
    }
    
    const packageName = selectedOption.text;
    const packageCost = selectedOption.dataset.price;
    
    document.getElementById('selectedPackage').textContent = packageName;
    document.getElementById('packageCost').textContent = formatCurrency(packageCost);
    document.getElementById('toolshipSummary').style.display = 'block';
}

// ========================================
// FORM SUBMISSION HANDLERS
// ========================================

function setupFormHandlers() {
    // Main contact form
    const mainContactForm = document.getElementById('mainContactForm');
    if (mainContactForm) {
        mainContactForm.addEventListener('submit', handleMainContactForm);
    }
    
    // Booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingForm);
    }
    
    // Marketing form
    const marketingForm = document.getElementById('marketingForm');
    if (marketingForm) {
        marketingForm.addEventListener('submit', handleMarketingForm);
    }
    
    // 3D Toolship form
    const toolshipForm = document.getElementById('toolshipForm');
    if (toolshipForm) {
        toolshipForm.addEventListener('submit', handle3DForm);
    }
}

function handleMainContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName') || e.target.querySelector('input[placeholder*="first name"]').value;
    const lastName = formData.get('lastName') || e.target.querySelector('input[placeholder*="last name"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const service = e.target.querySelector('select').value;
    const details = e.target.querySelector('textarea').value;
    
    if (!firstName || !lastName || !email || !service) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const quoteRef = generateReference('QUOTE');
    
    // Show success message
    showSuccessMessage(
        `Thank you ${firstName} ${lastName}! 🎉`,
        `Your quote request has been received.\nReference: ${quoteRef}\nService: ${service.toUpperCase()}\n\nWe'll contact you within 24 hours with a detailed quote.\n\nFor urgent requests, WhatsApp us: 072 844 3506`
    );
    
    // Send to WhatsApp
    const message = `New Quote Request!\nRef: ${quoteRef}\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nDetails: ${details}`;
    sendToWhatsApp(message);
    
    e.target.reset();
}

function handleBookingForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    const pickup = document.getElementById('pickupLocation').value;
    const dropoff = document.getElementById('dropoffLocation').value;
    const date = document.getElementById('pickupDate').value;
    const time = document.getElementById('pickupTime').value;
    const vehicle = document.querySelector('input[name="vehicle"]:checked');
    const serviceType = document.getElementById('serviceType').value;
    const totalCost = document.getElementById('totalCost').textContent;
    
    if (!name || !phone || !email || !pickup || !dropoff || !date || !time || !vehicle || !serviceType) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const bookingRef = generateReference('TTT');
    
    // Show success message
    showSuccessMessage(
        'Booking Request Submitted! 🎉',
        `Thank you ${name}!\n\nBooking Reference: ${bookingRef}\nVehicle: ${vehicle.value.toUpperCase()}\nService: ${serviceType.replace('-', ' ').toUpperCase()}\nEstimated Cost: ${totalCost}\n\nWe'll contact you within 30 minutes to confirm all details.\n\nWhatsApp: 072 844 3506\nEmail: info@ttttrading.co.za`
    );
    
    // Prepare WhatsApp message
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(cb => cb.value).join(', ');
    const payment = document.querySelector('input[name="payment"]:checked').value;
    
    const message = `🚗 NEW BOOKING REQUEST!\n\nRef: ${bookingRef}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nTRIP DETAILS:\nPickup: ${pickup}\nDestination: ${dropoff}\nDate: ${date}\nTime: ${time}\n\nVEHICLE & SERVICE:\nVehicle: ${vehicle.value.toUpperCase()}\nService Type: ${serviceType}\nExtras: ${extras || 'None'}\nPayment: ${payment}\n\nEstimated Cost: ${totalCost}\n\nPlease confirm this booking.`;
    
    sendToWhatsApp(message);
    closeModal('bookingModal');
    e.target.reset();
}

function handleMarketingForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[placeholder*="full name"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const company = e.target.querySelector('input[placeholder*="company"]').value;
    const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
    const purposes = Array.from(document.querySelectorAll('input[name="marketing-purpose"]:checked')).map(cb => cb.value);
    const totalCost = document.getElementById('marketingTotal').textContent;
    
    if (!name || !phone || !email || services.length === 0) {
        alert('Please fill in all required fields and select at least one service.');
        return;
    }
    
    const marketingRef = generateReference('MARK');
    
    showSuccessMessage(
        'Marketing Request Submitted! 🎨',
        `Thank you ${name}!\n\nRequest Reference: ${marketingRef}\nServices: ${services.length} selected\nEstimated Cost: ${totalCost}\n\nWe'll send your marketing materials and confirm your request within 24 hours.\n\nWhatsApp: 072 844 3506`
    );
    
    const message = `🎨 NEW MARKETING REQUEST!\n\nRef: ${marketingRef}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCompany: ${company || 'Not specified'}\n\nPURPOSE:\n${purposes.join(', ')}\n\nSERVICES REQUESTED:\n${services.map(s => s.replace('-', ' ').toUpperCase()).join('\n')}\n\nEstimated Cost: ${totalCost}\n\nPlease prepare marketing materials.`;
    
    sendToWhatsApp(message);
    closeModal('marketingModal');
    e.target.reset();
}

function handle3DForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[placeholder*="name"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const projectDescription = e.target.querySelector('textarea').value;
    const projectType = e.target.querySelector('select[required]').value;
    const packageSelect = document.getElementById('toolshipPackage');
    const selectedPackage = packageSelect.options[packageSelect.selectedIndex];
    const deadline = e.target.querySelector('input[type="date"]').value;
    
    if (!name || !email || !phone || !projectDescription || !projectType || !selectedPackage.value) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const projectRef = generateReference('3D');
    const packageCost = document.getElementById('packageCost').textContent;
    
    showSuccessMessage(
        '3D Project Request Submitted! 🔧',
        `Thank you ${name}!\n\nProject Reference: ${projectRef}\nPackage: ${selectedPackage.text}\nCost: ${packageCost}\n\nWe'll review your project requirements and contact you within 24 hours with a detailed timeline.\n\nWhatsApp: 072 844 3506`
    );
    
    const message = `🔧 NEW 3D PROJECT REQUEST!\n\nRef: ${projectRef}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nPROJECT DETAILS:\nType: ${projectType.toUpperCase()}\nPackage: ${selectedPackage.text}\nDeadline: ${deadline || 'Not specified'}\n\nDescription:\n${projectDescription}\n\nCost: ${packageCost}\n\nPlease review and confirm project.`;
    
    sendToWhatsApp(message);
    closeModal('toolshipModal');
    e.target.reset();
}

// ========================================
// UTILITY FUNCTIONS FOR UX
// ========================================

function showSuccessMessage(title, message) {
    alert(title + '\n\n' + message);
}

function sendToWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/27728443506?text=${encodedMessage}`, '_blank');
}

// ========================================
// CONTACT FUNCTIONS
// ========================================

function callNow() {
    window.open('tel:+27728443506', '_self');
}

function sendEmail() {
    window.open('mailto:info@ttttrading.co.za?subject=Service Inquiry&body=Hello TTT Transport, I am interested in your services.', '_self');
}

function openWhatsApp() {
    window.open('https://wa.me/27728443506?text=Hi%20TTT%20Transport!%20I%27m%20interested%20in%20your%20services.', '_blank');
}

function openDirections() {
    window.open('https://www.google.com/maps/dir//254+Oranjerivier+Dr,+Kempton+Park,+1619', '_blank');
}

// ========================================
// NAVIGATION AND UI INTERACTIONS
// ========================================

function setupNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    
    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', () => {
            const isVisible = nav.style.display === 'flex';
            nav.style.display = isVisible ? 'none' : 'flex';
            
            if (!isVisible) {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.backgroundColor = 'rgba(0,0,0,0.95)';
                nav.style.padding = '2rem';
                nav.style.zIndex = '999';
            }
        });

        // Auto-hide mobile menu when clicking links
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                }
            });
        });
    }
}

function setupModalInteractions() {
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const modals = ['bookingModal', 'marketingModal', 'toolshipModal', 'mapModal', 'fleetModal'];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal && event.target === modal) {
                closeModal(modalId);
            }
        });
    });

    // Close modals with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="block"]');
            if (openModal) {
                openModal.style.display = 'none';
            }
        }
    });
}

// ========================================
// ANIMATIONS AND VISUAL EFFECTS
// ========================================

function setupAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and testimonials
    document.querySelectorAll('.service-card, .testimonial-card, .feature-item, .package-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease';
        observer.observe(card);
    });

    // Counter animation for trust bar
    setupCounterAnimation();
}

function setupCounterAnimation() {
    const counters = document.querySelectorAll('.trust-number');
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
            if (target === 0) return;
            
            const increment = target / 100;
            let current = 0;
            const suffix = counter.textContent.includes('+') ? '+' : 
                          counter.textContent.includes('%') ? '%' : '';
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + suffix;
                }
            };
            
            updateCounter();
        });
    };

    // Trigger counter animation when trust bar is visible
    const trustBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                trustBarObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const trustBar = document.querySelector('.trust-bar');
    if (trustBar) {
        trustBarObserver.observe(trustBar);
    }
}

function setupInteractiveElements() {
    // Add hover effects to interactive elements
    document.querySelectorAll('.contact-item, .car-card, .service-card').forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (!this.style.transform.includes('translateY')) {
                this.style.transform = 'translateY(-5px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (this.style.transform.includes('translateY(-5px)')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Add loading state to buttons
    document.querySelectorAll('.submit-btn, .service-btn').forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
}

// ========================================
// ADVANCED FEATURES
// ========================================

function setupAdvancedFeatures() {
    // Auto-save form data to prevent loss
    setupFormAutoSave();
    
    // Setup form validation
    setupFormValidation();
    
    // Setup dynamic pricing updates
    setupDynamicPricing();
}

function setupFormAutoSave() {
    const forms = ['bookingForm', 'marketingForm', 'toolshipForm'];
    
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (!form) return;
        
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            // Load saved value
            const savedValue = localStorage.getItem(`${formId}_${input.name || input.id}`);
            if (savedValue && input.type !== 'submit') {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = savedValue === 'true';
                } else {
                    input.value = savedValue;
                }
            }
            
            // Save on change
            input.addEventListener('change', () => {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    localStorage.setItem(`${formId}_${input.name || input.id}`, input.checked);
                } else {
                    localStorage.setItem(`${formId}_${input.name || input.id}`, input.value);
                }
            });
        });
        
        // Clear saved data on successful submission
        form.addEventListener('submit', () => {
            inputs.forEach(input => {
                localStorage.removeItem(`${formId}_${input.name || input.id}`);
            });
        });
    });
}

function setupFormValidation() {
    // Real-time validation for email fields
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ff4444';
                showValidationMessage(this, 'Please enter a valid email address');
            } else {
                this.style.borderColor = '';
                hideValidationMessage(this);
            }
        });
    });
    
    // Phone number validation
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('blur', function() {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (this.value && !phoneRegex.test(this.value)) {
                this.style.borderColor = '#ff4444';
                showValidationMessage(this, 'Please enter a valid phone number');
            } else {
                this.style.borderColor = '';
                hideValidationMessage(this);
            }
        });
    });
}

function showValidationMessage(input, message) {
    hideValidationMessage(input); // Remove existing message
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'validation-error';
    errorDiv.style.color = '#ff4444';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
}

function hideValidationMessage(input) {
    const existingError = input.parentNode.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
}

function setupDynamicPricing() {
    // Update pricing based on current date/time
    const now = new Date();
    const hour = now.getHours();
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    const isNightTime = hour < 6 || hour > 22;
    
    // Apply surge pricing for nights and weekends
    if (isNightTime || isWeekend) {
        document.querySelectorAll('.vehicle-card small').forEach(priceEl => {
            const basePrice = priceEl.textContent;
            priceEl.innerHTML = `${basePrice} <span style="color: #ff6b35; font-size: 0.7rem;">(+20% ${isNightTime ? 'night' : 'weekend'} rate)</span>`;
        });
    }
}

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================

function setupPerformanceOptimizations() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Debounce scroll events
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            // Parallax effect
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// ========================================
// ERROR HANDLING AND LOGGING
// ========================================

function setupErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
        
        // Show user-friendly error message for critical errors
        if (e.error && e.error.message.includes('Cannot read property')) {
            showUserFriendlyError('Something went wrong. Please refresh the page and try again.');
        }
    });
    
    // Handle promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled Promise Rejection:', e.reason);
        e.preventDefault();
    });
}

function showUserFriendlyError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4444;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        z-index: 9999;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// ========================================
// ACCESSIBILITY FEATURES
// ========================================

function setupAccessibility() {
    // Add ARIA labels to interactive elements
    document.querySelectorAll('.car-card').forEach((card, index) => {
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details for ${card.querySelector('h4').textContent}`);
        card.setAttribute('tabindex', '0');
        
        // Keyboard navigation
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('button, input, select, textarea, a, [tabindex="0"]');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '2px solid #ff6b35';
            this.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // High contrast mode detection
    if (window.matchMedia('(prefers-contrast: high)').matches) {
        document.body.classList.add('high-contrast');
    }
    
    // Reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
        
        // Disable animations
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion *, 
            .reduced-motion *::before, 
            .reduced-motion *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// INITIALIZATION
// ========================================

function initializeWebsite() {
    console.log('🚀 Initializing TTT Transport Services Website...');
    
    try {
        // Core functionality
        setupNavigation();
        setupModalInteractions();
        setupFormHandlers();
        
        // Visual enhancements
        setupAnimations();
        setupInteractiveElements();
        
        // Advanced features
        setupAdvancedFeatures();
        setupPerformanceOptimizations();
        
        // Error handling and accessibility
        setupErrorHandling();
        setupAccessibility();
        
        console.log('✅ Website initialized successfully!');
        
        // Add loading completion effect
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
    } catch (error) {
        console.error('❌ Error initializing website:', error);
        showUserFriendlyError('Website failed to load properly. Please refresh the page.');
    }
}

// ========================================
// EVENT LISTENERS AND STARTUP
// ========================================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}

// Handle page unload
window.addEventListener('beforeunload', function() {
    // Clean up any intervals or event listeners if needed
    console.log('🔄 Page unloading, cleaning up...');
});

// Handle online/offline status
window.addEventListener('online', function() {
    console.log('🌐 Connection restored');
    document.body.classList.remove('offline');
});

window.addEventListener('offline', function() {
    console.log('📵 Connection lost');
    document.body.classList.add('offline');
    showUserFriendlyError('Connection lost. Some features may not work properly.');
});

// ========================================
// DEVELOPER UTILITIES (for debugging)
// ========================================

// Only include in development
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    window.TTTDebug = {
        fleetData,
        servicePricing,
        extraServices,
        marketingServices,
        openBookingModal,
        openMarketingModal,
        open3DModal,
        calculateBookingCost,
        calculateMarketingCost,
        calculate3DCost
    };
    
    console.log('🔧 Debug utilities available at window.TTTDebug');
}

// ========================================
// EXPORT FOR MODULE USE (if needed)
// ========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeWebsite,
        openBookingModal,
        openMarketingModal,
        open3DModal,
        closeModal,
        showFleetDetails,
        showFleetOverview
    };
}