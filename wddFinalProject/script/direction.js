import { loadJSON, qs } from "./utils.mjs";



document.addEventListener("DOMContentLoaded", async () => {

    const schoolKey = document.body.dataset.school;
    if (!schoolKey) return;

    const data = await loadJSON("/wddFinalProject/json/schools.json");
    const school = data[schoolKey];

    const directionBtn = qs("#directions-btn");
    const link = qs("#directionLink");

    const mapsLink = `https://www.google.com/maps/dir/?AIzaSyD5Ahio13PE7q4n12uVvfD6Q8OQi5u5oPA=1&destination=${school.lat}.${school.lng}`;

    directionBtn.addEventListener("click", () => {
        window.open(mapsLink, "_blank");
    });


    link.href = mapsLink
});