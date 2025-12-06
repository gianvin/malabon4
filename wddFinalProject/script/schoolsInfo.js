import { qs, fetchJSON } from "../script/utils.mjs";

document.addEventListener("DOMContentLoaded", async function () {

    const schoolId = document.body.getAttribute("data-school");
    const data = await fetchJSON("../json/schools.json");

    if (!data[schoolId]) {
        console.error("school not found", schoolId);
        return
    }

    const s = data[schoolId];

    // Fill school information

    qs("#schoolName").textContent = s.name;
    qs("#address").textContent = s.address;
    qs("#contact").textContent = s.contact
    qs("#email").textContent = s.email;
    qs("#facebook").innerHTML = `<a href="${s.facebook}" target="_blank">Visit Page></a>`;
    qs("#website").innerHTML = `<a href="${s.website}" target="_blank">Visit Website></a>`;

    window.schoolData = s;
});