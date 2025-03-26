document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const animeResults = document.getElementById("anime-results");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            fetchAnime(query);
        }
    });

    async function fetchAnime(query) {
        animeResults.innerHTML = "<p>Loading...</p>"; // Show loading message
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=1`);
            const data = await response.json();

            if (data.data.length === 0) {
                animeResults.innerHTML = "<p>No anime found!</p>";
                return;
            }

            const anime = data.data[0]; // First result
            displayAnime(anime);
        } catch (error) {
            animeResults.innerHTML = `<p>Error fetching data. Try again later.</p>`;
            console.error(error);
        }
    }

    function displayAnime(anime) {
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        animeCard.innerHTML = `
            <h2>${anime.title}</h2>
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
            <p><strong>Episodes:</strong> ${anime.episodes || "Unknown"}</p>
            <p><strong>Score:</strong> ${anime.score || "N/A"}</p>
            <p><strong>Synopsis:</strong> ${anime.synopsis || "No synopsis available."}</p>
        `;

        // Keep previous searches and append new results
        animeResults.prepend(animeCard);
    }
});
