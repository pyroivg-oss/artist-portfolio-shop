// Global variables
let clocks = [];
let is24HourFormat = true;
let updateInterval;
const clocksContainer = document.getElementById('clocksContainer');
const searchInput = document.getElementById('searchInput');
const format24hToggle = document.getElementById('format24h');
const addTimezoneBtn = document.getElementById('addTimezoneBtn');
const resetBtn = document.getElementById('resetBtn');
const addTimezoneModal = document.getElementById('addTimezoneModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const timezoneSearchInput = document.getElementById('timezoneSearchInput');
const timezoneList = document.getElementById('timezoneList');
const noResults = document.getElementById('noResults');
const toast = document.getElementById('toast');

// Initialize app
function init() {
    loadClocks();
    renderClocks();
    populateTimezoneList();
    startClockUpdate();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    format24hToggle.addEventListener('change', (e) => {
        is24HourFormat = e.target.checked;
        renderClocks();
    });

    addTimezoneBtn.addEventListener('click', () => {
        addTimezoneModal.classList.add('active');
        timezoneSearchInput.focus();
    });

    closeModalBtn.addEventListener('click', () => {
        addTimezoneModal.classList.remove('active');
        timezoneSearchInput.value = '';
        populateTimezoneList();
    });

    searchInput.addEventListener('input', (e) => {
        filterClocks(e.target.value);
    });

    timezoneSearchInput.addEventListener('input', (e) => {
        filterTimezoneList(e.target.value);
    });

    resetBtn.addEventListener('click', resetToDefaults);

    // Close modal when clicking outside
    addTimezoneModal.addEventListener('click', (e) => {
        if (e.target === addTimezoneModal) {
            addTimezoneModal.classList.remove('active');
        }
    });
}

// Load clocks from localStorage
function loadClocks() {
    const saved = localStorage.getItem('timezones');
    if (saved) {
        clocks = JSON.parse(saved);
    } else {
        clocks = DEFAULT_TIMEZONES;
        saveClocks();
    }
}

// Save clocks to localStorage
function saveClocks() {
    localStorage.setItem('timezones', JSON.stringify(clocks));
}

// Render all clock cards
function renderClocks() {
    clocksContainer.innerHTML = '';
    
    if (clocks.length === 0) {
        clocksContainer.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    clocks.forEach(timezone => {
        const tzData = TIMEZONES.find(tz => tz.name === timezone);
        if (tzData) {
            const card = createClockCard(tzData);
            clocksContainer.appendChild(card);
        }
    });
}

// Create a clock card element
function createClockCard(tzData) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.innerHTML = `
        <div class="clock-header">
            <h3>${tzData.name}</h3>
            <button class="clock-remove" onclick="removeClock('${tzData.name}')" title="Remove">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <div class="timezone-info">
            <div class="timezone-name">${tzData.cities}</div>
            <div class="offset">UTC ${formatOffset(tzData.offset)}</div>
        </div>
        <div class="digital-clock" data-timezone="${tzData.name}">--:--:--</div>
        <div class="time-details">
            <div class="time-detail">
                <span class="time-detail-label">Date</span>
                <span class="time-detail-value date" data-timezone="${tzData.name}">--/--/--</span>
            </div>
            <div class="time-detail">
                <span class="time-detail-label">Day</span>
                <span class="time-detail-value day" data-timezone="${tzData.name}">---</span>
            </div>
        </div>
    `;
    return card;
}

// Format timezone offset
function formatOffset(offset) {
    const sign = offset >= 0 ? '+' : '';
    const hours = Math.floor(Math.abs(offset));
    const minutes = Math.round((Math.abs(offset) - hours) * 60);
    return `${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
}

// Update all clock displays
function updateClocks() {
    const clockElements = document.querySelectorAll('.digital-clock');
    const dateElements = document.querySelectorAll('.time-detail-value.date');
    const dayElements = document.querySelectorAll('.time-detail-value.day');

    clockElements.forEach((element) => {
        const timezone = element.dataset.timezone;
        const time = getTimeInTimezone(timezone);
        element.textContent = time;
    });

    dateElements.forEach((element) => {
        const timezone = element.dataset.timezone;
        const date = getDateInTimezone(timezone);
        element.textContent = date;
    });

    dayElements.forEach((element) => {
        const timezone = element.dataset.timezone;
        const day = getDayInTimezone(timezone);
        element.textContent = day;
    });
}

// Get current time in specific timezone
function getTimeInTimezone(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !is24HourFormat
    });
    return formatter.format(now);
}

// Get current date in specific timezone
function getDateInTimezone(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    return formatter.format(now);
}

// Get day name in specific timezone
function getDayInTimezone(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'short'
    });
    return formatter.format(now);
}

// Start updating clocks every second
function startClockUpdate() {
    updateClocks();
    updateInterval = setInterval(updateClocks, 1000);
}

// Remove a clock
function removeClock(timezone) {
    clocks = clocks.filter(tz => tz !== timezone);
    saveClocks();
    renderClocks();
    showToast(`${timezone} removed`);
}

// Add a clock
function addClock(timezone) {
    if (!clocks.includes(timezone)) {
        clocks.push(timezone);
        saveClocks();
        renderClocks();
        addTimezoneModal.classList.remove('active');
        timezoneSearchInput.value = '';
        populateTimezoneList();
        showToast(`${timezone} added`);
        setTimeout(() => {
            searchInput.value = '';
            filterClocks('');
        }, 300);
    } else {
        showToast(`${timezone} is already added`, 'error');
    }
}

// Populate timezone list in modal
function populateTimezoneList() {
    timezoneList.innerHTML = '';
    TIMEZONES.forEach(tz => {
        const option = document.createElement('div');
        option.className = 'timezone-option';
        option.innerHTML = `
            <div class="timezone-option-name">${tz.name}</div>
            <div class="timezone-option-offset">${tz.cities} • UTC ${formatOffset(tz.offset)}</div>
        `;
        option.addEventListener('click', () => addClock(tz.name));
        timezoneList.appendChild(option);
    });
}

// Filter timezone list
function filterTimezoneList(query) {
    const filtered = TIMEZONES.filter(tz => {
        const name = tz.name.toLowerCase();
        const cities = tz.cities.toLowerCase();
        return name.includes(query.toLowerCase()) || cities.includes(query.toLowerCase());
    });

    timezoneList.innerHTML = '';
    if (filtered.length === 0) {
        timezoneList.innerHTML = '<div style="padding: 1rem; color: var(--text-secondary);">No timezones found</div>';
        return;
    }

    filtered.forEach(tz => {
        const option = document.createElement('div');
        option.className = 'timezone-option';
        option.innerHTML = `
            <div class="timezone-option-name">${tz.name}</div>
            <div class="timezone-option-offset">${tz.cities} • UTC ${formatOffset(tz.offset)}</div>
        `;
        option.addEventListener('click', () => addClock(tz.name));
        timezoneList.appendChild(option);
    });
}

// Filter displayed clocks
function filterClocks(query) {
    const cards = document.querySelectorAll('.clock-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const cities = card.querySelector('.timezone-name').textContent.toLowerCase();
        const isVisible = title.includes(query.toLowerCase()) || cities.includes(query.toLowerCase());
        
        card.style.display = isVisible ? 'block' : 'none';
        if (isVisible) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 && query !== '' ? 'block' : 'none';
}

// Reset to default timezones
function resetToDefaults() {
    clocks = DEFAULT_TIMEZONES;
    saveClocks();
    searchInput.value = '';
    renderClocks();
    showToast('Reset to default timezones');
}

// Show toast notification
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = 'toast show';
    if (type === 'error') {
        toast.classList.add('error');
    }
    setTimeout(() => {
        toast.classList.remove('show', 'error');
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    clearInterval(updateInterval);
});