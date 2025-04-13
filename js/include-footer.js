// js/include-header.js
fetch("../components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;

        // Dynamically inject the header CSS
        const headerStyle = document.createElement("link");
        headerStyle.rel = "stylesheet";
        headerStyle.href = "../css/footer.css"; 
        document.head.appendChild(headerStyle);
    });
