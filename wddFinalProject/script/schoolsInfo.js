import { qs, loadJSON } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {

    const schoolKey = document.body.dataset.school;

    if (!schoolKey) {
        console.error("No data-school attribute found");
        return;
    }

    try {
        const data = await loadJSON("/wddFinalProject/json/schools.json");
        const school = data[schoolKey];

        if (!school) {
            console.error("School not found:i", schoolKey);
            return;

        }
        // Fill school information

        qs("#schoolName").textContent = school.name;
        qs("#address").textContent = school.address;
        qs("#contact").textContent = school.contact
        qs("#email").textContent = school.email;
        qs("#facebook").innerHTML = `<a href="${school.facebook}" target="_blank">Visit Page></a>`;
        qs("#website").innerHTML = `<a href="${school.website}" target="_blank">Visit Website></a>`;



    } catch (err) {
        console.error("Error loading school info:", err);
    }


});