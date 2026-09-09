// Comprehensive list of timezones with their offsets
const TIMEZONES = [
    // UTC
    { name: 'UTC', offset: 0, cities: 'London, Lisbon' },
    
    // UTC-12 to UTC-8
    { name: 'Etc/GMT+12', offset: -12, cities: 'Baker Island' },
    { name: 'Pacific/Pago_Pago', offset: -11, cities: 'Samoa' },
    { name: 'Pacific/Honolulu', offset: -10, cities: 'Honolulu, Hawaii' },
    { name: 'America/Anchorage', offset: -9, cities: 'Anchorage, Alaska' },
    { name: 'America/Los_Angeles', offset: -8, cities: 'Los Angeles, San Francisco, Seattle' },
    
    // UTC-7 to UTC-5
    { name: 'America/Denver', offset: -7, cities: 'Denver, Phoenix' },
    { name: 'America/Chicago', offset: -6, cities: 'Chicago, Dallas, Mexico City' },
    { name: 'America/New_York', offset: -5, cities: 'New York, Miami, Toronto' },
    
    // UTC-4 to UTC-2
    { name: 'America/Caracas', offset: -4, cities: 'Caracas, La Paz' },
    { name: 'America/Sao_Paulo', offset: -3, cities: 'São Paulo, Rio de Janeiro' },
    { name: 'Atlantic/South_Georgia', offset: -2, cities: 'South Georgia' },
    
    // UTC-1
    { name: 'Atlantic/Azores', offset: -1, cities: 'Azores' },
    
    // UTC
    { name: 'Europe/London', offset: 0, cities: 'London, Dublin, Lisbon' },
    { name: 'Africa/Casablanca', offset: 0, cities: 'Casablanca, Rabat' },
    
    // UTC+1 to UTC+3
    { name: 'Europe/Paris', offset: 1, cities: 'Paris, Berlin, Rome, Madrid' },
    { name: 'Europe/Moscow', offset: 3, cities: 'Moscow, St. Petersburg' },
    { name: 'Africa/Cairo', offset: 2, cities: 'Cairo, Alexandria' },
    { name: 'Asia/Jerusalem', offset: 2, cities: 'Jerusalem, Tel Aviv' },
    
    // UTC+3 to UTC+5
    { name: 'Asia/Baghdad', offset: 3, cities: 'Baghdad' },
    { name: 'Asia/Dubai', offset: 4, cities: 'Dubai, Abu Dhabi' },
    { name: 'Asia/Karachi', offset: 5, cities: 'Karachi, Lahore' },
    
    // UTC+5:30 to UTC+6
    { name: 'Asia/Kolkata', offset: 5.5, cities: 'New Delhi, Kolkata, Mumbai' },
    { name: 'Asia/Almaty', offset: 6, cities: 'Almaty, Astana' },
    
    // UTC+6:30 to UTC+8
    { name: 'Asia/Yangon', offset: 6.5, cities: 'Yangon, Myanmar' },
    { name: 'Asia/Bangkok', offset: 7, cities: 'Bangkok, Hanoi, Ho Chi Minh City' },
    { name: 'Asia/Hong_Kong', offset: 8, cities: 'Hong Kong, Shanghai, Beijing' },
    { name: 'Australia/Perth', offset: 8, cities: 'Perth, Western Australia' },
    { name: 'Asia/Manila', offset: 8, cities: 'Manila, Philippines' },
    { name: 'Asia/Singapore', offset: 8, cities: 'Singapore, Kuala Lumpur' },
    
    // UTC+9 to UTC+10
    { name: 'Asia/Tokyo', offset: 9, cities: 'Tokyo, Seoul, Pyongyang' },
    { name: 'Asia/Seoul', offset: 9, cities: 'Seoul, South Korea' },
    { name: 'Australia/Sydney', offset: 10, cities: 'Sydney, Melbourne, Brisbane' },
    
    // UTC+11 to UTC+12
    { name: 'Pacific/Fiji', offset: 12, cities: 'Fiji' },
    { name: 'Pacific/Auckland', offset: 12, cities: 'Auckland, Wellington (NZ)' },
    { name: 'Pacific/Tongatapu', offset: 13, cities: 'Tonga' },
];

// Default timezones to display on load
const DEFAULT_TIMEZONES = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Asia/Dubai',
    'America/Los_Angeles'
];