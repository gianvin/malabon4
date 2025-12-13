import { loadJSON } from "../script/utils.mjs"

document.addEventListener("DOMContentLoaded", async () => {
    if (document.getElementById("map")) {
        loadDistrictMap();
    }

    if (document.getElementById("map-preview")) {
        loadSchoolMap();
    }
});

async function loadDistrictMap() {
    // Load School Data
    const schools = await loadJSON("schools.json");

    // Select map container using qs()
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 14.6700, lng: 120.9800 },
        mapId: "2eb80bd29610602dae4c70a9",
    });

    //Markers for each school
    Object.values(schools).forEach(school => {
        new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: school.location,
            title: school.name

        });
    });
}
async function loadSchoolMap() {
    const schoolKey = document.body.dataset.school;
    const data = await loadJSON("schools.json");
    const school = data[schoolKey];

    const map = new google.maps.Map(document.getElementById("map-preview"), {
        zoom: 15,
        center: school.location,
        mapId: "2eb80bd29610602dae4c70a9",
    });

    new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: school.location,
        title: school.name
    });
}
