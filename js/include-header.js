// include-header.js

const path = window.location.pathname;

// If you're inside the /pages folder (e.g. /pages/admission.html)
const headerPath = path.includes("/pages/") ? "../components/header.html" : "components/header.html";

// Load header
fetch(headerPath)
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });
