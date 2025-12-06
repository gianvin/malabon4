import { qs } from "../script/utils.mjs";

document.addEventListener("DOMContentLoaded", function () {

    const mapBox = qs("#map-preview");

    const s = window.schoolData;
    if (!s) return;

    const lat = s.location.lat;
    const lng = s.location.lng;


    mapBox.innerHTML =

        <iframe
            width="100%"
            height="300"
            style="border:0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/view?AIzaSyAjfvPOPuSu54Qp23yxhr319FzQe1oXD3w&center=${lat}.${lng}&zoom=17">
        </iframe>;
});