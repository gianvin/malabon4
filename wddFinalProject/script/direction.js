import { loadJSON, qs } from "./utils.mjs";

async function setupDirections() {
    try {
        const schoolKey = document.body.dataset.school;
        if (!schoolKey) {
            console.warn("direction.js: no data-school on body");
            return;
        }
        const data = await loadJSON("/wddFinalProject/json/schools.json");
        const school = data[schoolKey];
        if (!school || !school.location) {
            console.warn("direction.js: location not found for", schoolKey);
            return;
        }
        const lat = school.location.lat;
        const lng = school.locationlng;

        const mapsUrl = `https://www.google.com/maps/dir/?api=AIzaSyD5Ahio13PE7q4n12uVvfD6Q8OQi5u5oPA=1&destination=${lat}.${lng}`;
        const btn = qs("#directions-btn");
        const link = qs("#directionLink");

        if (link) {
            link.href = mapsUrl;
            link.target = "_blank";
        }

        if (btn) {
            btn.addEventListener("click", function () {
                window.open(mapsUrl, "_blank");
            });
        } else {
            console.warn("direction.js: #directions-btn not found");
        }
        console.log("direction.js: directions ready for", schoolKey);
    } catch (err) {
        console.error("direction.js error:", err);
    }
}
document.addEventListener("DOMContentLoaded", setupDirections);




