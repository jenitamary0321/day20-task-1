document.getElementById('changeCatButton').addEventListener('click', function() {
    const catImage = document.getElementById('catImage');
    const currentSrc = catImage.src;
    
    // Array of HTTP.cat image URLs
    const catImages = [
        "https://http.cat/100",
        "https://http.cat/101",
        "https://http.cat/200",
        "https://http.cat/201",
        "https://http.cat/202",
        "https://http.cat/203",
        "https://http.cat/204",
        "https://http.cat/206",
        "https://http.cat/207"
    ];

    // Get the index of the current image
    let currentIndex = catImages.indexOf(currentSrc);
    
    // Calculate the next index
    let nextIndex = (currentIndex + 1) % catImages.length;
    
    // Set the next image
    catImage.src = catImages[nextIndex];
});
