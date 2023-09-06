// config.js
module.exports = {
    NASA_API_KEY: 'DTNE8yo702F869a2yc79t5QCsbVh6ShrzSoVXqQx',
  };
  const config = require('./config.js');
  const apiKey = config.NASA_API_KEY;
  
  document.addEventListener("DOMContentLoaded", function () {
    // Fetch NASA's Astronomy Picture of the Day
    fetch("https://api.nasa.gov/planetary/apod?api_key=DTNE8yo702F869a2yc79t5QCsbVh6ShrzSoVXqQx")
        .then(response => response.json())
        .then(data => {
            const photo = document.getElementById("photo");
            const title = document.getElementById("photo-title");
            const description = document.getElementById("photo-description");

            photo.src = data.url;
            title.textContent = data.title;
            description.textContent = data.explanation;
        })
        .catch(error => console.error("Error fetching photo:", error));

    // Fetch NASA updates
    fetch("https://api.nasa.gov/updates/aggregate/NEWS_TRENDING?api_key=DTNE8yo702F869a2yc79t5QCsbVh6ShrzSoVXqQx")
        .then(response => response.json())
        .then(data => {
            const updateList = document.getElementById("update-list");

            data.items.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item.title;
                updateList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching updates:", error));
});
