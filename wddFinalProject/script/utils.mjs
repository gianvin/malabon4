export function qs(selector, parent = document) {
    return parent.querySelector(selector);

}

export function qsa(selector, parent = document) {
    return parent.querySelectorAll(selector);

}

// fetch JSON
export async function fetchJSON(path) {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Failed to load JSON:" + path);
    return await response.json();
}

// url for google maps direction

export function directionLink(lat, lng) {
    return `https://www.google.com/maps/?AIzaSyAjfvPOPuSu54Qp23yxhr319FzQe1oXD3w=1&destination=${lat}, ${lng}`;
}
