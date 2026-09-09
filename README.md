# Multi-Timezone Digital Clock

A beautiful, real-time digital clock application that displays the current time in multiple time zones simultaneously. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Real-time Clock Updates** - Updates every second with accurate time in each timezone
- **Multiple Timezones** - Display up to 40+ different timezones simultaneously
- **24/12 Hour Format Toggle** - Switch between 24-hour and 12-hour (AM/PM) format
- **Search Functionality** - Quickly filter displayed clocks by timezone name or city
- **Add/Remove Timezones** - Easily customize which timezones you want to display
- **Persistent Storage** - Your timezone selections are saved in browser's localStorage
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Dark theme with gradient accents and smooth animations
- **Additional Info** - Shows date and day of week for each timezone
- **Modal Timezone Picker** - Browse and add timezones from a comprehensive list

## 📁 Files

- `index.html` - Main HTML structure
- `style.css` - Complete styling and animations
- `script.js` - Core JavaScript functionality
- `timezones.js` - Timezone data and configuration
- `README.md` - Documentation

## 🚀 How to Use

1. **Open in Browser** - Simply open `index.html` in any modern web browser
2. **View Default Clocks** - 6 default timezones are displayed on first load
3. **Add More Timezones** - Click "+ Add Timezone" button to open the timezone picker
4. **Search Timezones** - Use the search box to find timezones by name or city
5. **Toggle Format** - Use the toggle to switch between 24-hour and 12-hour format
6. **Remove Clocks** - Click the trash icon on any clock card to remove it
7. **Reset** - Click "Reset" to restore default timezones

## 🌍 Supported Timezones

The application includes 40+ timezones covering:
- All major cities worldwide
- UTC offset information
- Associated cities and regions

Examples:
- Americas: New York, Los Angeles, Denver, Chicago, Mexico City, São Paulo
- Europe: London, Paris, Berlin, Moscow
- Middle East: Dubai, Baghdad, Jerusalem
- Asia: Tokyo, Hong Kong, Bangkok, Singapore, Seoul, Delhi
- Pacific: Sydney, Auckland, Fiji
- Africa: Cairo, Casablanca

## 💾 Data Persistence

Your selected timezones are automatically saved to browser's `localStorage`. This means:
- Your timezone preferences persist across browser sessions
- Each browser/device maintains its own list
- Clear browser data to reset to defaults

## 🎨 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;      /* Main color */
    --secondary-color: #764ba2;    /* Secondary color */
    --accent-color: #f093fb;       /* Accent color */
    --dark-bg: #0f1419;            /* Background */
    --card-bg: #1a1f2e;            /* Card background */
}
```

### Add Custom Timezones
Edit `timezones.js` and add to the `TIMEZONES` array:
```javascript
{ name: 'America/Chicago', offset: -6, cities: 'Chicago, Dallas' }
```

### Change Default Timezones
Edit the `DEFAULT_TIMEZONES` array in `timezones.js`:
```javascript
const DEFAULT_TIMEZONES = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    // Add more...
];
```

## 🌐 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support

Requires modern browser with:
- ES6 JavaScript support
- Intl.DateTimeFormat API
- localStorage support

## 📱 Responsive Breakpoints

- **Desktop (1024px+)** - Grid layout with 3-4 clocks per row
- **Tablet (768px-1023px)** - Grid layout with 2 clocks per row
- **Mobile (<768px)** - Single column layout

## 🔧 How It Works

1. **Time Calculation** - Uses JavaScript's Intl.DateTimeFormat API to get accurate time in each timezone
2. **Real-time Updates** - Updates all clocks every second using setInterval
3. **Storage** - Saves selected timezones to localStorage for persistence
4. **Filtering** - Dynamically filters displayed clocks based on search input
5. **Formatting** - Converts between 24-hour and 12-hour formats on demand

## 🎯 Use Cases

- **Global Teams** - Track time across multiple team locations
- **International Business** - Monitor business hours in different regions
- **Travel Planning** - Compare times across destinations
- **Event Scheduling** - Find optimal meeting times across timezones
- **Trading/Finance** - Monitor market hours in different exchanges
- **Content Creators** - Schedule posts for different regions

## 📝 Notes

- The app uses the browser's system timezone as reference
- Daylight Saving Time is automatically handled by the system
- Time precision is limited to seconds (no milliseconds displayed)
- All calculations are client-side (no server required)

## 🐛 Troubleshooting

**Clocks not updating?**
- Refresh the page
- Check browser console for errors
- Ensure JavaScript is enabled

**Times seem incorrect?**
- Verify your system date/time is correct
- Check if timezone name is spelled correctly
- Some timezones have DST adjustments

**Data not persisting?**
- Check if localStorage is enabled
- Ensure you're not in private/incognito mode
- Clear browser cache and try again

## 📄 License

Free to use and modify for personal or commercial projects.

## 🤝 Contributing

Feel free to enhance the project by:
- Adding more timezones
- Improving UI/UX
- Optimizing performance
- Adding new features

---

**Enjoy tracking time across the globe! 🌍⏰**