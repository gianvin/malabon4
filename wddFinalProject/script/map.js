import { loadJSON, qs } from "./utils.mjs"


document.addEventListener("DOMContentLoaded", async () => {

    const schoolKey = document.body.dataset.school;
    if (!schoolKey) return;

    const data = await loadJSON("/json/schools.json");
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
    const apiKey = "AIzaSyAjfvPOPuSu54Qp23yxhr319FzQe1oXD3w";

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${AIzaSyAjfvPOPuSu54Qp23yxhr319FzQe1oXD3w}&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}