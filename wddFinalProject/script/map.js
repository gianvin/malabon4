import { loadJSON, qs } from "./utils.mjs"


document.addEventListener("DOMContentLoaded", async () => {

    const schoolKey = document.body.dataset.school;
    if (!schoolKey) return;

    const data = await loadJSON("/wddFinalProject/json/schools.json");
    const school = data[schoolKey];

    window.initMap = function () {
        map = new google.maps.Map(qs("#map-preview"), {
            center: { lat: school.lat, lang: school.lng },
            map,
            title: school.schoolName
        });
    };
    loadMapScript();
});

function loadMapScript() {
    const apiKey = "AIzaSyD5Ahio13PE7q4n12uVvfD6Q8OQi5u5oPA";

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${AIzaSyD5Ahio13PE7q4n12uVvfD6Q8OQi5u5oPA}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}