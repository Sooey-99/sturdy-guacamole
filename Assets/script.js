// OpenWeatherMap API key
const apiKey = 'ed138a19f1d03a99725e4174f1f41597';

// Function to fetch weather data
const getWeatherData = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Process the retrieved data as needed
    console.log('Weather Data:', data);
    // Extract specific information from 'data' and update your dashboard
    updateDashboard(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

// Function to update the dashboard with the retrieved data
const updateDashboard = (data) => {
  // Implement the logic to update your dashboard with the weather data
  // For example, you can display the temperature, humidity, etc.
};

// Event listener for form submission
document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user's input from the search box
  const cityInput = document.getElementById('search-input').value;

  // Call the function to fetch weather data for the user's input city
  getWeatherData(cityInput);
});

// Call the function to fetch weather data for a default city when the page loads
window.onload = () => {
  getWeatherData('Port Louis'); // 'Port Louis' set as preferred default city
};

