console.log("5ten Auto Detailing website loaded.");

// Adds nagvigation bar into "navbar" container
document.addEventListener("DOMContentLoaded", () => {
  fetch("/include/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
});

// Adds footer into "footer" container
document.addEventListener("DOMContentLoaded", () => {
  fetch("/include/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
});
