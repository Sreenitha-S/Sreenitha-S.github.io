$(document).ready(function () {
    $("#getWeather").click(function () {
        let city = $("#city").val().trim();

        if (!city) {
            alert("Please enter a city name");
            return;
        }

        // Step 1: Get latitude & longitude from Open-Meteo geocoding API
        let geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;

        $.get(geoUrl, function (geoData) {
            if (!geoData.results || geoData.results.length === 0) {
                $("#weather").html("<p style='color:red;'>City not found! Please try again.</p>");
                return;
            }

            let location = geoData.results[0];
            let lat = location.latitude;
            let lon = location.longitude;

            // Step 2: Fetch weather data using latitude and longitude
            let weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

            $.get(weatherUrl, function (weatherData) {
                let current = weatherData.current_weather;

                $("#weather").html(`
                    <p><strong>City:</strong> ${location.name}, ${location.country}</p>
                    <p><strong>Temperature:</strong> ${current.temperature} °C</p>
                    <p><strong>Wind Speed:</strong> ${current.windspeed} km/h</p>
                    <p><strong>Weather Code:</strong> ${current.weathercode}</p>
                `);
            }).fail(function () {
                $("#weather").html("<p style='color:red;'>Unable to fetch weather! Please try again.</p>");
            });

        }).fail(function () {
            $("#weather").html("<p style='color:red;'>Unable to fetch location! Please try again.</p>");
        });
    });
});
