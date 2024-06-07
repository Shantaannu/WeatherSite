// Initializing and integrating API key and URL
const APIKEY = "a308251254cfe1997a958e5db5daa510";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    // Implementing API and URL
    const url = `${baseURL}${city}&appid=${APIKEY}`;

    // Weather Icon updating According to weather 
    const weatherIcon = document.querySelector(".ImgIcon");

    // Using try and catch in case of any error occurs
    try {
        let response = await fetch(url); // Fetching URL and storing it in response

        if (!response.ok) {
            throw new Error("There was a problem with the network");
        }

        let data = await response.json();
        console.log(data);

        document.querySelector(".Temp").innerHTML = data.main.temp + '°C';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidityTemp").innerHTML = data.main.humidity + ' %';
        document.querySelector(".windTemp").innerHTML = data.wind.speed + ' Km/hr';

        // checking weather and updating it 

        if (data.weather[0].main == "Haze") {
            // Assuming weatherIcon is an image element
            // Update the source of the image based on the weather condition
            weatherIcon.src = "images/mist.png"; // Adjust the path and filename as needed
            document.querySelector(".card").style.background = "radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)";
            //Updated
        }

        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"; // Corrected path separator
            document.querySelector(".card").style.background = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(78,207,189,0.9915615904564951) 0%, rgba(37,218,255,1) 100%)";
            // Updated
        }

        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"; // Corrected path separator
            document.querySelector(".card").style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
            // Updated
        }

        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"; // Corrected path separator
            document.querySelector(".card").style.background = "linear-gradient(to right, #56ccf2, #2f80ed)";
            // Updated
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"; // Corrected path separator
            document.querySelector(".card").style.background = "linear-gradient(90deg, rgba(238,174,202,1) 100%, rgba(148,187,233,1) 100%)";
            // Updated
        }

        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"; // Corrected path separator
            document.querySelector(".card").style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(78,207,189,0.9915615904564951) 0%, rgba(37,218,255,1) 100%)";
            // Updated
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"; // Corrected path separator
            document.querySelector(".card").style.background = "linear-gradient(90deg, rgba(238,174,202,1) 100%, rgba(148,187,233,1) 100%)";
            // Updated
        }


    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }


    // Search button working 

    document.querySelector(".search button").addEventListener("click", () => {
        const city = document.querySelector(".search input").value;
        if (city) {
            checkWeather(city);
        }
        else {
            console.error("Please provide city Name");
        }
    })

}


checkWeather("Nagpur");
