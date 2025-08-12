$(document).ready(function () {
    $("#getWeather").click(function () {
        let city = $("#city").val().trim();
        let apiKey = "64e999375e75b74649fd52125228f925"; // <-- Replace with your API key from openweathermap.org

        if (!city) {
            alert("Please enter a city name");
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        $.get(url, function (data) {
            $("#weather").html(`
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `);
        }).fail(function () {
            $("#weather").html("<p style='color:red;'>City not found! Please try again.</p>");
        });
    });
});
