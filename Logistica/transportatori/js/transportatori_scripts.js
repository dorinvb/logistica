// Fisier: transportatori/js/transportatori_scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Funcție pentru a trimite titlul paginii curente către iframe-ul părinte (index.html)
    if (window.parent && window.parent.updatePageTitle) {
        window.parent.updatePageTitle("Lista transportatorilor");
    }
    
    // Puteți adăuga aici alte scripturi specifice modului Transportatori
    console.log("Scripturi Transportatori încărcate.");
});