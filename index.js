setTimeout(function () {
    // Dynamically load Bootstrap CSS
    var bootstrapCSS = document.createElement("link");
    bootstrapCSS.href =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.integrity =
        "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    bootstrapCSS.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCSS);

    // Dynamically load Font Awesome CSS
    var fontAwesomeCSS = document.createElement("link");
    fontAwesomeCSS.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
    fontAwesomeCSS.rel = "stylesheet";
    document.head.appendChild(fontAwesomeCSS);

    // Dynamically load jQuery
    var jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    document.head.appendChild(jqueryScript);

    // Wait for jQuery to load
    jqueryScript.onload = function () {
        // Dynamically load Bootstrap JS after jQuery is loaded
        var bootstrapJS = document.createElement("script");
        bootstrapJS.src =
            "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js";
        document.head.appendChild(bootstrapJS);

        // Create HTML elements programmatically
        var catContainer = document.createElement("div");
        catContainer.className = "cat";
        catContainer.style.position = "fixed";
        catContainer.style.top = "80%"; // Center vertically at 50%
        catContainer.style.left = "1rem"; // 1rem from left edge
        catContainer.style.transform = "translateY(-50%)"; // Adjust for centering

        // Set a width that fits content
        catContainer.style.width = "auto"; // Width adjusts to fit content
        catContainer.style.maxWidth = "80vw"; // Adjust maximum width as needed

        var content =
            '<div class="p-3 inside position-relative rounded mt-5 ms-3" style="';
        content +=
            "box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;";
        content +=
            'padding: 10px; border-radius: 8px; background-color: #fff; position: relative;">'; // Ensure relative positioning
        content += '<div class="text-dark">';
        content += '<h5 class="fw-bold">Try 4 weeks for just $1!</h5>';
        content +=
            "<p>Sign up today and get exclusive access to our media content.</p>";
        content +=
            '<a href="https://epaper.thestandard.co.zw/amh_home" target="_blank" style="text-decoration: none;">';
        content +=
            '<button type="button" class="btn btn-danger fw-bold" style="max-width: 100%;">Sign Up Now</button>';
        content += '</a>';
        content += "</div>";
        content +=
            '<button type="button" class="btn-close close-icon position-absolute top-0 end-0 m-2" aria-label="Close"></button>'; // Position close icon
        content += "</div>";

        // Set the HTML content
        catContainer.innerHTML = content;

        // Append the container to the body
        document.body.appendChild(catContainer);

        // Show the container with fadeIn effect using jQuery
        $(".cat").fadeIn();

        // Handle click event on the close icon
        $(".close-icon").click(function () {
            $(".cat").hide(); // Hide the .cat div
        });
    };
}, 2000); // 2000 milliseconds = 2 seconds
