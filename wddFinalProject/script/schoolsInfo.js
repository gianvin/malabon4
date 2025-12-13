import { loadJSON } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {

    const schoolKey = document.body.dataset.school;
    if (!schoolKey) return;

    localStorage.setItem("lastVisitedSchool", schoolKey);
    try {
        const data = await loadJSON("schools.json");
        const school = data[schoolKey];

        if (!school) {
            return;

        }
        // Fill school information

        document.querySelector("#schoolName").textContent = school.name;
        document.querySelector("#address").textContent = school.address;
        document.querySelector("#contact").textContent = school.contact;
        document.querySelector("#email").textContent = school.email;

        const fb = document.querySelector("#facebook");
        fb.textContent = "Visit Page";
        fb.href = school.facebook;

        const website = document.querySelector("#website");
        website.textContent = "Visit Website";
        website.href = school.website;

    } catch (err) {
        console.error("School info error:", err)
    }

});