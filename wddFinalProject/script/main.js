
import { loadJSON } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    constMapEl = document.getElementById("map");
    if (!mapEl) return;


    try {
        const schools = await loadJSON("schools.json");
        const lastSchoolKey = localStorage.getItem("lastVisitedSchool");

        const map = new google.maps.Map(mapEl, {
            zoom: 13,
            center: { lat: 14.33, lang: 120.94 }
        });
        Object.entries(schools).forEach(([Key, school]) => {
            const marker = new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: school.location,
                title: school.name

            });
            if (key === lastSchoolKey) {
                map.setCenter(school.location);
                map.setZoom(16);
                marker.setAnimation(google.maps.Animation.BOUNCE);

                setTimeout(() => {
                    marker.setAnimation(null);
                }, 3000);
            }
        });
    } catch (err) {
        console.error("Homepage map error:", err);
    }

});
