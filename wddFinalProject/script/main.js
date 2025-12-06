import { qs, qsa, fetchJSON } from "../script/utils.mjs";

document.addEventListener("DOMContentLoaded", async function () {

    const json = await fetchJSON("../json/schools.json");
    qsa(".school-logo").forEach(logo => {
        const id = logo.getAttribute("data-school");

        logo.addEventListener("click", () => {
            window.location.href = `./school-pages/${id}.html`;
        });
    });
});