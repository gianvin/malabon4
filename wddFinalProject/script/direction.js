import { qs, directionLink } from "../script/utils.mjs";

document.addEventListener("DOMContentLoaded", function () {

    const s = window.schoolData;
    if (!s) return;

    const lat = s.location.lat;
    const lng = s.location.lng;

    const btn = qs("#directions-btn");
    const link = qs("#directionLink");

    link.href = this.URL;
    btn.addEventListener("click", () => window.open(this.URL, "_blank"));

});