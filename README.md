A responsive real-time Weather Dashboard built using HTML5, CSS3, and JavaScript. The application uses the OpenWeatherMap REST API to fetch and display live weather information based on the city entered by the user.

Features
Search weather by city name
Fetch real-time weather data using the Fetch API
Uses asynchronous JavaScript with async/await
Parses JSON responses from a REST API
Displays temperature
Displays humidity
Displays wind speed
Displays weather condition
Dynamically updates the webpage using DOM manipulation
Handles invalid city names and API/network errors
Shows a loading message while fetching data
Supports pressing Enter to search
Responsive design for desktop and mobile screens
Technologies Used
HTML5
CSS3
JavaScript
Fetch API
REST API
JSON
OpenWeatherMap API
Project Structure
weather-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
How to Run
Download or clone the project.
Open the project folder in Visual Studio Code.
Open script.js.
Add your OpenWeatherMap API key:
const API_KEY = "YOUR_API_KEY";
Install the Live Server extension in VS Code.
Right-click index.html.
Select Open with Live Server.
Enter a city name in the search box.
Click Search.
Weather Information Displayed

The dashboard displays:

City name
Temperature in Celsius
Humidity percentage
Wind speed
Weather condition
API and Asynchronous JavaScript

The project uses the JavaScript Fetch API with async/await to request weather data.

Example:

const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

const data = await response.json();

The application reads values from the nested JSON response, such as:

data.main.temp
data.main.humidity
data.wind.speed
data.weather[0].main
Error Handling

The application handles:

Empty city input
Invalid city names
Failed API requests
Network errors

A try...catch block is used to prevent the application from failing when an API request cannot be completed.

Responsive Design

CSS media queries are used to make the dashboard usable on different screen sizes, including desktop and mobile devices.

Security Note

Do not upload your personal OpenWeatherMap API key to a public GitHub repository. For a production deployment, the API key should be stored securely rather than exposed directly in client-side JavaScript.

Learning Outcomes

Through this task, I practiced:

Asynchronous JavaScript
async/await
Fetch API
RESTful API integration
JSON parsing
Nested JSON objects
DOM manipulation
Event handling
Error handling
Responsive web design
