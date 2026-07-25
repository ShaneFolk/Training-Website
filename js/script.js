function toggleMenu() {

  const menu = document.getElementById("navMenu");

  const toggle = document.querySelector(".menu-toggle");
 
  if (!menu || !toggle) {

    return;

  }
 
  menu.classList.toggle("active");
 
  if (menu.classList.contains("active")) {

    toggle.textContent = "✕";

  } else {

    toggle.textContent = "☰";

  }

}
 
/* Change navbar appearance after scrolling */

window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".navbar");
 
  if (!navbar) {

    return;

  }
 
  if (window.scrollY > 50) {

    navbar.classList.add("navbar-floating");

  } else {

    navbar.classList.remove("navbar-floating");

  }

});
 
/* Reusable function for loading HTML sections */

async function loadSection(elementId, filePath) {

  const targetElement = document.getElementById(elementId);
 
  if (!targetElement) {

    console.error(`Element #${elementId} was not found.`);

    return;

  }
 
  try {

    const response = await fetch(filePath);
 
    if (!response.ok) {

      throw new Error(

        `Could not load ${filePath}. Status: ${response.status}`

      );

    }
 
    const html = await response.text();

    targetElement.innerHTML = html;

  } catch (error) {

    console.error(error);

    targetElement.innerHTML = `
<p style="padding: 20px; color: red;">

        This section could not be loaded.
</p>

    `;

  }

}
 
/* Load page sections */

loadSection("hero-section", "sections/hero.html");

loadSection("cta-section", "sections/cta.html");
 