const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.querySelector('.search-results');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Check if there is input and search term isn't empty
    if (searchTerm) {
        const mockResponse = [
            //I have added 5 hindi songs as backend  
            { title: 'Vaaste', artist: 'Dhwani Bhanushali', url: 'Vaaste.mp3' },
            { title: 'Chammak Challo - Ra.One', artist: 'ShahRukh Khan', url: 'Chammak Challo - Ra.One.mp3' },
            { title: 'Jawan', artist: 'Khan', url: 'Jawan Shah Rukh Khan.mp3' },
            { title: 'Dunki', artist: 'S_Khan', url: 'Dunki.mp3' },

            //I have added 5 English songs as backend  
            { title: 'Bad Habbits New', artist: 'Sparkos', url: 'Sparkos - Bad Habbits New.mp3' },
            { title: 'Sky ', artist: 'Anthony Decosta', url: 'Sky Anthony Decosta.mp3' },
            { title: ' Despacito ', artist: 'Luis Fonsi -', url: 'Luis Fonsi - Despacito .mp3' },
            { title: 'WHY YOU ALWAYS IN A MOOD_', artist: 'Snowil Rebello', url: 'WHY YOU ALWAYS IN A MOOD_.mp3' },        
                    ];

        const filteredResults = mockResponse.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm)
        );

        displaySearchResults(filteredResults);  // Pass the filtered results to the display function
    }
});

function displaySearchResults(results) {
    searchResults.innerHTML = '';  // Clear previous results

    if (results.length === 0) {
        searchResults.innerHTML = '<p>No results found</p>';
    } else {
        // Loop over the filtered results
        for ( i = 0; i < results.length; i++) {
            const song = results[i];  // Access each song object in the filtered results
            const songElement = document.createElement('div');
            songElement.innerHTML = `
                <h2>${song.title}</h2>
                <p>By ${song.artist}</p>
                <audio controls>
                    <source src="${song.url}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            `;
            searchResults.appendChild(songElement);  // Append each song element to the search results
        }
    }
}
