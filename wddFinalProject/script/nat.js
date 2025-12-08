import { loadJSON } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {

    const schoolKey = document.body.dataset.school;
    if (!sschool) return;

    try {
        const data = await loadJSON("../json/schools.json");
        const nat = data[schoolKey].nat;

        if (!nat) return;


        qs("#nat-english").textContent = nat.english;
        qs("#nat-math").textContent = nat.math;
        qs("#nat-science").textContent = nat.science;
        qs("#nat-filipino").textContent = nat.filipino
        qs("#nat-ap").textContent = nat.ap;

    } catch (err) {
        console.error("NAT Error:", err);

    }
});