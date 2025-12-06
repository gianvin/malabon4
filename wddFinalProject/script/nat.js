import { qs } from "../scripts/utils.mjs";

document.addEventListener("DOMContentLoaded", function () {

    const s = window.schoolData;
    if (!s) return;

    qs("#nat-english").textContent = s.nat.english;
    qs("#nat-math").textContent = s.nat.math;
    qs("#nat-science").textContent = s.nat.science;
    qs("#nat-filipino").textContent = s.nat.filipino
    qs("#nat-ap").textContent = s.nat.ap;

});