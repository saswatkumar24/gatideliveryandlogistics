document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
      
      // Update active class
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Shrinking Header Fallback (Scroll listener)
  const header = document.querySelector('.main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  // Apply scroll handler
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // Scroll Entry & Exit Animation Fallback (Intersection Observer)
  if (!CSS.supports('animation-timeline: view()')) {
    // Add custom styling for fallback animations
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .service-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .service-card.reveal-active {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(styleSheet);

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.service-card').forEach(card => {
      cardObserver.observe(card);
    });
  }

  // Weight Slider Display Update (10gm to 50kg support)
  const weightSlider = document.getElementById('weight');
  const weightValue = document.getElementById('weight-value');

  if (weightSlider && weightValue) {
    const formatWeight = (val) => {
      const w = parseFloat(val);
      if (w < 1) {
        // Show in grams
        const grams = Math.round(w * 1000);
        return `${grams} gm`;
      } else {
        // Show in kg
        const cleanKg = Number(w.toFixed(2));
        return `${cleanKg} kg`;
      }
    };

    // Set initial text
    weightValue.textContent = formatWeight(weightSlider.value);

    weightSlider.addEventListener('input', (e) => {
      weightValue.textContent = formatWeight(e.target.value);
    });
  }

  // Interactive Quote Calculator
  const calcForm = document.getElementById('quote-form');

  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const service = document.getElementById('service-type').value;
      const origin = document.getElementById('origin').value.trim();
      const destination = document.getElementById('destination').value.trim();
      const weightVal = parseFloat(weightSlider.value);

      if (!origin || !destination) {
        alert('Please enter both origin and destination locations.');
        return;
      }

      let serviceName = '';
      switch (service) {
        case 'courier':
          serviceName = 'International & Domestic Courier';
          break;
        case 'moving':
          serviceName = 'Home & Office Moving';
          break;
        case 'packing':
          serviceName = 'Packing & Shifting';
          break;
        case 'parcel':
          serviceName = 'Parcel & Document Delivery';
          break;
        case 'rental':
          serviceName = 'Vehicle Rental & Delivery';
          break;
        case 'sameday':
          serviceName = 'Same Day Delivery / Safe Packing';
          break;
        default:
          serviceName = 'Standard Logistics';
      }

      // Format weight for message
      let weightText = '';
      if (weightVal < 1) {
        weightText = `${Math.round(weightVal * 1000)} gm`;
      } else {
        weightText = `${Number(weightVal.toFixed(2))} kg`;
      }

      // Generate WhatsApp Link
      const waNumber = '919908849156'; // Primary WhatsApp
      const waMessage = `Hello GATI Delivery & Logistics! I would like to book a service with the following details:

*Booking details:*
• Service Type: ${serviceName}
• Pickup Location (From): ${origin}
• Delivery Location (To): ${destination}
• Approximate Weight: ${weightText}

Please let me know the pricing and availability. Thank you!`;

      const encodedMessage = encodeURIComponent(waMessage);
      const whatsappUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

      // Open WhatsApp directly in the same tab to bypass popup blockers
      window.location.href = whatsappUrl;
    });
  }
});
