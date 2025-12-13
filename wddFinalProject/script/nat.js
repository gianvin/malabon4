import { loadJSON } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", async () => {

    const schoolKey = document.body.dataset.school;
    if (!schoolKey) return;

    try {
        const data = await loadJSON("schools.json");
        const nat = data[schoolKey]?.nat;

        if (!nat) return;


        document.querySelector("#nat-english").textContent = nat.english;
        document.querySelector("#nat-math").textContent = nat.math;
        document.querySelector("#nat-science").textContent = nat.science;
        document.querySelector("#nat-filipino").textContent = nat.filipino;
        document.querySelector("#nat-ap").textContent = nat.ap;

    } catch (err) {
        console.error("NAT Error:", err);

    }
});