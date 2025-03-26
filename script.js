document.getElementById('searchBtn').addEventListener('click', searchAnime);

async function searchAnime() {
    const animeName = document.getElementById('animeSearch').value;
    if (!animeName) return alert("Please enter an anime title!");

    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${animeName}&limit=1`);
        const data = await response.json();

        if (data.data.length === 0) {
            alert("No anime found!");
            return;
        }

        const anime = data.data[0];
        displayAnimeDetails(anime);
    } catch (error) {
        alert("An error occurred while fetching anime data!");
    }
}

function displayAnimeDetails(anime) {
    const animeDetailsDiv = document.getElementById('animeDetails');
    animeDetailsDiv.style.display = 'block'; // Show details div
    animeDetailsDiv.style.opacity = 1; // Fade in effect

    animeDetailsDiv.innerHTML = `
        <h2>${anime.title}</h2>
        <img src="${anime.images.jpg.large_image_url}" alt="${anime.title}" style="max-width: 100%; border-radius: 8px;">
        <p><strong>Episodes:</strong> ${anime.episodes || 'N/A'}</p>
        <p><strong>Score:</strong> ${anime.score || 'N/A'}</p>
        <p><strong>Genres:</strong> ${anime.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Synopsis:</strong> ${anime.synopsis}</p>
        <a href="${anime.url}" target="_blank">Read more on MyAnimeList</a>
    `;
}
