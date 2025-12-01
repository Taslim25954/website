// Select menu links
const menuLinks = document.querySelectorAll(".nav-links a");

// Select all page sections
const sections = document.querySelectorAll("[data-section]");

// Default: Show only Home section
sections.forEach(sec => sec.style.display = "none");
document.querySelector('[data-section="Home"]').style.display = "block";

// HOME ITEMS CONTAINER (IMPORTANT FOR GAP FIX)
const homeItems = document.querySelector(".home-items");

// Add click function
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    const filter = link.getAttribute("data-filter");

    // Hide all sections
    sections.forEach(sec => {
      sec.style.display = "none";
    });

    // Show selected section
    const showSection = document.querySelector(`[data-section="${filter}"]`);
    if (showSection) {
      showSection.style.display = "block";
    }

    // GAP FIX ---- hide home items on other pages
    if (filter === "Home") {
      homeItems.style.display = "block";
    } else {
      homeItems.style.display = "none";
    }
  });
});


// only home and item show

let buttons = document.querySelectorAll(".nav-links a");
let products = document.querySelectorAll(".item");

// ---- universal filter function ----
function filterItems(filterName) {
  products.forEach(p => {
    if (p.classList.contains(filterName)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}

// ---- default: Home show ----
filterItems("Home");

// ---- nav click event ----
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let filter = btn.getAttribute("data-filter");
    filterItems(filter);   // <-- main function call
  });
});















// custome say whay you say 

const cards = document.querySelectorAll(".testi-card");
const dots = document.querySelectorAll(".dot");

let index = 0;

// Show function
function show(i) {
    cards.forEach(c => c.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    cards[i].classList.add("active");
    dots[i].classList.add("active");

    // 🔥 Smooth scroll card into view
    cards[i].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });

    
}

// Dot click
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        show(i);
    });
});

// Card click → scroll + active
cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        index = i;
        show(i);
    });
});

// Auto slide
setInterval(() => {
    index = (index + 1) % cards.length;
    show(index);
}, 500000);