

// get JSON File
export async function loadJSON(filename) {
    let basePath = "";

    const path = window.location.pathname;
    //for school pages folder
    if (path.includes("School%20Pages") || path.includes("School Pages")) {
        basePath = "../json/";
    } else {
        //for index homepage
        basePath = "./json/";
    }

    const fullPath = basePath + filename;
    console.log("Loading JSON from:", fullPath);

    const response = await fetch(fullPath);
    if (!response.ok) {
        throw new Error(`Failed to load ${fullPath}`);
    }
    return response.json();

}


