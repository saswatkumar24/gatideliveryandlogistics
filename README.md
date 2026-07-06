# GATI Delivery & Logistics Website

A premium, responsive, and bilingual (English & Odia) static landing page built for **GATI Delivery & Logistics**. This website is optimized for fast performance, modern styling, and seamless deployment on Netlify.

---

## 🌟 Key Features

*   **Bilingual Brand Identity:** Integrated localizations in Odia matching the original GATI shop banner.
*   **Modern Aesthetics:** Designed with CSS variables, custom glassmorphism components, smooth hover transitions, and a fixed header that shrinks gracefully on scroll.
*   **Responsive Layout:** Fully compatible across mobile viewports, tablets, and desktop displays with a custom slide-out mobile menu.
*   **Direct-Redirect WhatsApp Calculator:** Users can specify a service type (moving, packing, courier), customize pickup/delivery coordinates, and set weight (from 10 gm to 50 kg). Submitting the form compiles the details and immediately redirects to GATI's primary WhatsApp contact number (`9908849156`) with a formatted booking request.
*   **Full Contact Panel:** Clickable direct calling links, mailto triggers, and a stylized map placeholder that opens Google Maps navigation queries directly for their physical office.

---

## 📁 Project Structure

```text
gati-delivery-logistics/
├── assets/
│   ├── logo.svg              # Square truck brand icon (Favicon)
│   ├── banner.svg            # Simplified brand logo banner
│   ├── original_banner.png   # Full front page hero image
│   └── gati_banner_image.png # Dark blue banner asset backup
├── index.html                # Semantic HTML layout
├── styles.css                # Premium styling sheets
├── script.js                 # Mobile menus & WhatsApp redirect logic
└── README.md                 # Project documentation
```

---

## 🚀 How to Run Locally

Since this project consists of pure static HTML, CSS, and JavaScript, it does not require a compilation step.

1.  Clone this repository locally:
    ```bash
    git clone https://github.com/saswatkumar24/gatideliveryandlogistics.git
    ```
2.  Navigate to the directory and double-click the `index.html` file to launch the page in any modern web browser.

---

## ☁️ Deploy to Netlify

### Method 1: Continuous Deployment from Git (Recommended)
1.  Log in to [Netlify](https://app.netlify.com/).
2.  Click **Add new site** > **Import from Git**.
3.  Select **GitHub**, search for your `gatideliveryandlogistics` repository, and click **Deploy Site**.
4.  Netlify will automatically build and publish any future commits pushed to the `main` branch.

### Method 2: Manual Drag & Drop
1.  Navigate to the [Netlify App Dropzone](https://app.netlify.com/drop).
2.  Drag and drop the local `gati-delivery-logistics` folder onto the browser window.
3.  Your website will be live in seconds!
