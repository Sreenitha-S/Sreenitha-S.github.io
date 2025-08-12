$(document).ready(function () {
    let tag = "ai"; // Fetch articles tagged with AI
    let apiUrl = `https://dev.to/api/articles?tag=${tag}`;

    $.get(apiUrl, function (data) {
        let postsContainer = $("#devto-posts");
        postsContainer.empty();

        if (data.length === 0) {
            postsContainer.append("<p>No posts found.</p>");
            return;
        }

        data.slice(0, 3).forEach(post => {
            postsContainer.append(`
                <div class="post">
                    <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
                    <p>${post.description}</p>
                </div>
            `);
        });
    }).fail(function () {
        $("#devto-posts").html("<p style='color:red;'>Unable to load posts.</p>");
    });
});
