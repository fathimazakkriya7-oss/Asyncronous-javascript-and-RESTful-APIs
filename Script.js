async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if(city === ""){
        error.textContent = "Please enter a city name";
        return;
    }

    try {
        // Free Weather API
        const url = `https://wttr.in/${city}?format=j1`;

        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent = city;

        document.getElementById("temp").textContent =
            data.current_condition[0].temp_C;

        document.getElementById("humidity").textContent =
            data.current_condition[0].humidity;

        document.getElementById("wind").textContent =
            data.current_condition[0].windspeedKmph;

    } catch(err) {
        error.textContent = "Error: " + err.message;
    }
}
