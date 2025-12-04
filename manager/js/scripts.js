// Fisier: js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const mainLinks = document.querySelectorAll('.menu-link[data-target]');
    const submenuLinks = document.querySelectorAll('.submenu-link');
    const allSubmenus = document.querySelectorAll('.submenu-section');
    const contentIframe = document.getElementById('content-iframe');

    // 1. GESTIONAREA MENIULUI PRINCIPAL (Deschide/Închide Submeniul)
    mainLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const targetId = link.getAttribute('data-target');
            const targetSubmenu = document.getElementById(targetId);

            // Ascunde toate sub-meniurile nevizate și scoate clasa 'active'
            allSubmenus.forEach(submenu => {
                if (submenu !== targetSubmenu) {
                    submenu.classList.remove('open');
                }
            });
            document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));

            // Afișează/Ascunde submeniul vizat și adaugă clasa 'active'
            if (targetSubmenu) {
                targetSubmenu.classList.toggle('open');
                link.classList.toggle('active'); 

                // Dacă se deschide, încarcă automat prima pagină din submeniu
                if (targetSubmenu.classList.contains('open')) {
                    const firstSubmenuLink = targetSubmenu.querySelector('.submenu-link');
                    if (firstSubmenuLink) {
                        // Simulează click-ul pe primul link pentru a încărca conținutul
                        firstSubmenuLink.click();
                    }
                }
            }
        });
    });

    // 2. GESTIONAREA SUBMENIULUI (ÎNCARCĂ CONȚINUTUL ÎN IFRAME)
    submenuLinks.forEach(link => {
        // Interceptăm click-ul pe link-urile din submeniu
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const pageUrl = link.getAttribute('href');
            
            // Seteaza linkul din submeniu ca activ
            document.querySelectorAll('.submenu-link').forEach(sl => sl.classList.remove('submenu-active'));
            link.classList.add('submenu-active');

            // Încărca pagina în IFRAME
            if (contentIframe && pageUrl) {
                contentIframe.src = pageUrl;
            }
        });
    });
    
    // 3. INIȚIALIZARE: Simulează click pe primul link principal la încărcarea paginii
    const transportatoriLink = document.getElementById('main-link-transportatori');
    if (transportatoriLink) {
        transportatoriLink.click(); 
    }
});