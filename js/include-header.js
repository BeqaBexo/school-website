// js/include-header.js
fetch("../components/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // Dynamically inject the header CSS
        const headerStyle = document.createElement("link");
        headerStyle.rel = "stylesheet";
        headerStyle.href = "../css/header.css"; // ✅ Adjust path based on current file location
        document.head.appendChild(headerStyle);
    });
