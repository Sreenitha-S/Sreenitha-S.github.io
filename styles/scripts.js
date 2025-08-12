<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// Projects Gallery with jQuery
$(document).ready(function(){
    $(".thumbnails img").click(function(){
        $("#main-image").attr("src", $(this).attr("src"));
        $("#project-title").text($(this).data("title"));
        $("#project-description").text($(this).data("description"));
    });
});

// OpenWeatherMap API - Replace with your API key
const weatherApiKey = "64e999375e75b74649fd52125228f925";
document.getElementById("getWeather")?.addEventListener("click", () => {
    let city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
    .then(res => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
    })
    .then(data => {
        document.getElementById("weather").innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.main.temp}°C</p>
            <p>${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
        `;
    })
    .catch(err => {
        document.getElementById("weather").innerHTML = `<p>Error: ${err.message}</p>`;
    });
});

// devto.js
$(document).ready(function () {
    let username = "ben"; // Replace with your Dev.to username if you get one

    $.get(`https://dev.to/api/articles?username=${username}`, function (data) {
        let postsContainer = $("#devto-posts");
        postsContainer.empty();
        data.slice(0, 3).forEach(post => {
            postsContainer.append(`
                <div class="post">
                    <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
                    <p>${post.description}</p>
                </div>
            `);
        });
    });
});


// gallery.js
$(document).ready(function () {
    $(".thumbnails img").click(function () {
        let newSrc = $(this).attr("src");
        let newAlt = $(this).attr("alt");
        $("#main-image").attr("src", newSrc);
        $("#project-title").text(newAlt);
    });
});
