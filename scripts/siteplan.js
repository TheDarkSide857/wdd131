document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "transform 0.2s ease-in-out";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });

    const products = [
        { id: "prd100", name: "Lords of the Fallen" },
        { id: "prd101", name: "Final Fantasy VII Rebirth" },
        { id: "prd102", name: "Stellar Blade" },
        { id: "prd103", name: "DustBuster Elite" },
        { id: "prd104", name: "SteamMaster 9000" }
    ];
      
    const select = document.getElementById("product");
      
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
    
    const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.placeholder = "Search categories...";
  searchBar.style.display = "block";
  searchBar.style.margin = "1rem auto";
  searchBar.style.padding = "0.5rem";
  searchBar.style.width = "80%";
  searchBar.style.maxWidth = "400px";
  searchBar.style.border = "1px solid #ccc";
  searchBar.style.borderRadius = "5px";

  const featureSection = document.querySelector(".features");
  featureSection.parentNode.insertBefore(searchBar, featureSection);

  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    cards.forEach(card => {
      const content = card.textContent.toLowerCase();
      card.style.display = content.includes(query) ? "block" : "none";
    });
  });
  
    searchBar.addEventListener("input", () => {
      const query = searchBar.value.toLowerCase();
      cards.forEach(card => {
        const content = card.textContent.toLowerCase();
        card.style.display = content.includes(query) ? "block" : "none";
      });
    });
    const form = document.getElementById("reviewForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const reviewData = {
        title: document.getElementById("gameTitle").value,
        rating: document.getElementById("rating").value,
        review: document.getElementById("review").value
      };
      localStorage.setItem("userReview", JSON.stringify(reviewData));
      alert("Thanks for your review!");
      e.target.reset();
    });
  }
});