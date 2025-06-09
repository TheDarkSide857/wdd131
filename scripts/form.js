const products = [
    { id: "prd100", name: "SuperVac 3000" },
    { id: "prd101", name: "SparkleMop X2" },
    { id: "prd102", name: "CleanSweep Pro" },
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