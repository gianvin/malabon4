
import { loadJSON } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", initMain);

async function initMain() {
    console.log("Initializing homepage...");

    const districtMapContainer = document.getElementById("distict-map");

    if (!districtMapContainer) {
        console.log("Not on homepage - district map not loaded.");
        return;
    }

    try {
        const schools = await loadJSON("schools.json");
        initDistrictMap(schools);

    } catch (error) {
        console.error("Error loading district map:", err);
    }

}

function initDistrictMap(schools) {
    console.log("District map data", schools);

    const map = new google.maps.Map(
        document.getElementById("district-map"),
        {
            zoom: 13,
            center: { lat: 14.33, lng: 120.94 },
        }
    );

    Object.values(schools).forEach((school) => {
        new google.maps.Marker({
            position: {
                lat: school.location.lat,
                lng: school.location.lng
            },
            map,
            title: school.schoolName
        });
    });
}