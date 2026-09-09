# Artist Portfolio & E-Commerce Website

A professional, fully-featured website for artists to showcase and sell their artworks online. Built with HTML, CSS, and JavaScript with a modern, responsive design.

## 🎨 Features

### Pages Included
- **Home** (`index.html`) - Landing page with hero section, featured artworks, and statistics
- **Portfolio** (`portfolio.html`) - Complete gallery of all artworks
- **Shop** (`shop.html`) - E-commerce shop with filtering and sorting capabilities
- **About** (`about.html`) - Artist biography, journey, and specializations
- **Contact** (`contact.html`) - Contact form, business information, and FAQ
- **Cart** (`cart.html`) - Shopping cart with checkout functionality

### Key Functionality
✨ **Responsive Design** - Fully mobile-friendly and works on all devices
🛒 **Shopping Cart** - Add/remove items, update quantities, automatic price calculation
💾 **Local Storage** - Cart persists between page visits
🎨 **Modern UI** - Beautiful gradient design with smooth animations
📧 **Contact Forms** - Newsletter subscription and contact message forms
⭐ **Ratings** - Star ratings displayed on artworks
🔍 **Filtering** - Filter artworks by medium and price range
📱 **Mobile Menu** - Hamburger menu for mobile navigation

## 📁 Project Structure

```
artist-portfolio-shop/
├── index.html          # Home page
├── portfolio.html      # Portfolio page
├── shop.html          # Shop page
├── about.html         # About page
├── contact.html       # Contact page
├── cart.html          # Shopping cart page
├── css/
│   └── style.css      # All styling
├── js/
│   └── script.js      # All JavaScript functionality
└── README.md          # This file
```

## 🎯 How to Use

1. **Clone or download** the repository
2. **Open `index.html`** in a web browser
3. **Navigate** through the site using the navigation menu
4. **Add artworks** to cart and proceed to checkout

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (Vanilla)** - No dependencies needed
- **Font Awesome** - Icon library
- **Local Storage API** - Cart persistence

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #8b5cf6;      /* Purple */
    --secondary-color: #ec4899;    /* Pink */
    --dark-color: #1f2937;         /* Dark Gray */
    --light-color: #f9fafb;        /* Light Gray */
}
```

### Adding Artworks
Simply duplicate artwork card HTML and update:
- Artwork name/title
- Price
- Medium/technique
- Star rating

### Contact Information
Update in `contact.html`:
- Phone number
- Email address
- Business hours
- Physical address

## 📦 Features Details

### Shopping Cart
- **Add to Cart**: Click "Add to Cart" button on any artwork
- **View Cart**: Click cart icon in navigation
- **Quantity**: Adjust quantity in cart table
- **Remove**: Remove items with remove button
- **Checkout**: Proceed to checkout (demo message shown)
- **Persistence**: Cart saved in browser's local storage

### Forms
- **Newsletter**: Subscribe to get updates
- **Contact**: Send messages to artist
- **Validations**: Email and required fields validated

### Notifications
- Toast notifications appear when:
  - Items added to cart
  - Forms submitted
  - Messages sent

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://username.github.io/artist-portfolio-shop`

### Other Hosting
- Upload all files to your web server
- Ensure all file paths are correct
- Site is static (no backend needed)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## ⚠️ Notes

- This is a frontend-only demo
- Checkout button shows demo message (not connected to payment gateway)
- Contact form shows success message (not connected to email service)
- Images are placeholder divs (replace with actual images)
- To make fully functional, integrate with:
  - Payment processor (Stripe, PayPal, etc.)
  - Email service (SendGrid, Mailchimp, etc.)
  - Database (Firebase, MongoDB, etc.)

## 🔐 Security Considerations

For production use, ensure:
- HTTPS is enabled
- Form data is validated server-side
- Payment processing uses secure services
- No sensitive data in frontend code

## 📄 License

Free to use and modify for personal or commercial projects.

## 🤝 Support

For questions or customization needs, feel free to contact the repository owner.

---

**Happy selling! 🎨✨**