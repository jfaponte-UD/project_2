let map = L.map('map').setView([4.579583235006287, -74.15714591958991], 13);
// 4.579583235006287, -74.15714591958991

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([4.579583235006287, -74.15714591958991]).addTo(map)
