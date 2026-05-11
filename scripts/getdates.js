// CURRENT YEAR
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;


// LAST MODIFIED
document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;