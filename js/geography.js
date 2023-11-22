var lvmlElements = document.querySelectorAll(".lvml");

lvmlElements.forEach(function (element) {
    element.style.removeProperty("behavior");
});

var map1 = L.map("map1").setView([36.486, -118.565], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map1);

L.marker([36.486, -118.565])
    .addTo(map1)
    .bindPopup("Map of Sequoia National Park.<br> Feel free to drag around!")
    .openPopup();

var map2 = L.map("map2").setView([51.496845, -115.928055], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map2);

L.marker([51.496845, -115.928055])
    .addTo(map2)
    .bindPopup("Map of Banff National Park.<br> Feel free to drag around!")
    .openPopup();

var map3 = L.map("map3").setView([-36.848461, 174.763336], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map3);

L.marker([-36.848461, 174.763336])
    .addTo(map3)
    .bindPopup("Map of Auckland.<br> Feel free to drag around!")
    .openPopup();

var map4 = L.map("map4").setView([1.29027, 103.851959], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map4);

L.marker([1.29027, 103.851959])
    .addTo(map4)
    .bindPopup("Map of Singapore.<br> Feel free to drag around!")
    .openPopup();
