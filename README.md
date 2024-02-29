# Weather App Readme
This basic weather application that allows users to input a city name and retrieve its current weather forecast. Here's a breakdown of the functionality:

Event Listener: The code listens for the DOMContentLoaded event, ensuring that the script runs only after the HTML content has fully loaded.

DOM Element Selection: It selects various elements from the DOM using document.querySelector or document.getElementById to manipulate them later.

Form Submission Handling: An event listener is attached to the weather form, preventing its default behavior (submitting and refreshing the page) when the form is submitted. Instead, it retrieves the city name entered by the user, trims any whitespace, and checks if the input is empty. If empty, it prompts the user to enter a city name. Otherwise, it calls the consultaPrevisao function.

Asynchronous Weather Consultation: The consultaPrevisao function is an asynchronous function that takes the cityName as a parameter. It constructs a URL with the cityName and an OpenWeatherMap API key to fetch weather data in metric units. If the city is not found (404 status code), it alerts the user. Otherwise, it calls the carregarDadosPrevisao function with the retrieved data.

Displaying Weather Data: The carregarDadosPrevisao function populates the HTML elements with the relevant weather data received from the API response. It updates the city name, temperature, and weather icon. Additionally, it sets the display property of the content element to "flex" to make it visible.

This script fetches weather data from the OpenWeatherMap API and dynamically updates the webpage with the current weather information for the specified city. To use the application, users need to input a city name in the provided form.
