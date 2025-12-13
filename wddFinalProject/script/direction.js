import { loadJSON } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    const schoolKey = document.body.dataset.school;
    if (!schoolKey) return;

    try {
        const data = await loadJSON("schools.json");

        const { lat, lng } = data[schoolKey].location;
        const url = `https://www.google.com/maps/dir/?api=AIzaSyD5Ahio13PE7q4n12uVvfD6Q8OQi5u5oPA=1&destination=${lat}.${lng}`;

        document.querySelector("#drection-btn")
            ?.addEventListener("click", () => {
                window.open(url, "_blank");
            });

        const link = document.querySelector("#directionLink");
        if (link) link.href = urlrl;
    } catch (err) {
        console.error("Directions error:", err);
    }
});





