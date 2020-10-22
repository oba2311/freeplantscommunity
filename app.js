// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: `32°05'24.4"N`, lng: `34°46'18.9"E` };
    // 32°05'24.4"N 34°46'18.9"E

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }