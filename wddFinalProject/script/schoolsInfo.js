const urlParams = new URLSearchParams(window.location.search);
const schoolId = urlParams.get("id");

if (!schoolId) {
    alert("Error: No school selected.");

}

//html Elements
const nameEl = document.getElementById("schoolName");
const addrEl = document.getElementById("schoolAddress");
const contactEl = document.getElementById("schoolContact");
const emailEl = document.getElementById("schoolEmail");
const fbEl = document.getElementById("schoolFB");
const webEl = document.getElementById("schoolWebsite");
const natEl = document.getElementById("natResults");
const directionEl = document.getElementById("directionLink");

// Loading the Json File
fetch("json/schools.json")
    .then(response => response.json())
    .then(data => {
        const school = data[schoolId];

        if (!school) {
            nameEl.textContent = "School Not Found";
            return;
        }

        // Fill information of the html element

        nameEl.textContent = school.name;
        addrEl.textContent = school.address;
        contactEl.textContent = school.contact;
        emailEl.textContent = school.email;
        fbEl.href = school.facebook;
        webEl.href = school.website;

        // NAT Results

        natEl.innerHTML = "";
        for (let subject in school.nat) {
            const li = document.createElement("li");
            li.textContent = `${subject}: ${school.nat[subject]}%`;
            natEl.appendChild(li);
        }

        // Link for Directions
        directionEl.href =
            `https://www.google.com/maps/dir/?api=1&destination=${school.location.lat}, ${school.location.lng}`;

        // Google Map
        const map = google.maps.Map(document.getElementById("map"), {
            center: school.location,
            zoom: 17
        });

        new google.maps.Marker({
            position: school.location,
            map: map,
            title: school.name
        });
    })
    .catch(err => console.error("Error loading school data:", err));