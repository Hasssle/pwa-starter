// Open and close mobile menu button
const menuBtn = btn => {
  btn.classList.toggle("change");
  const nav = document.querySelector("nav");
  if (nav.style.height == "100%") {
    nav.style.height = "0";
  } else {
    nav.style.height = "100%";
  }
};

// Install service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => {
        console.info("Registration successful, scope is:", registration.scope);
      })
      .catch(error => {
        console.error("Service worker registration failed, error:", error);
      });
  });
}
