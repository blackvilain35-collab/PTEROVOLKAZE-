// ============================================
// PTEROVOLKAZE - PUSAT KONFIGURASI
// GANTI SEMUA PENGATURAN DI SINI SAJA!
// ============================================

const CONFIG = {
    // ============ PANEL PTERODACTYL ============
    PANEL_URL: 'https://panel.andabisa.com',           // GANTI URL PANEL ANDA
    PANEL_API_KEY: 'ptla_ANDABISAISIAPIKEY',           // GANTI API KEY ANDA
    PANEL_USER_ID: 1,                                   // GANTI USER ID DEFAULT
    
    // ============ NODE, EGG, NEST ============
    NODE_ID: 1,          // GANTI NODE ID ANDA
    EGG_ID: 15,          // GANTI EGG ID ANDA (15 = Minecraft Java)
    NEST_ID: 1,          // GANTI NEST ID ANDA
    
    // ============ DOCKER IMAGE ============
    DOCKER_IMAGE: 'ghcr.io/pterodactyl/yolks:java_17',
    STARTUP_COMMAND: 'java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}',
    
    // ============ PAKASIR (PEMBAYARAN) ============
    PAKASIR_API_KEY: 'VtAEeAx0P1QifyMl5SKIF3iMkIGuXGFS',           // GANTI API KEY PAKASIR
    PAKASIR_API_URL: 'https://api.pakasir.com/v1',
    
    // ============ EMAILJS (KIRIM EMAIL KE PEMBELI) ============
    EMAILJS_SERVICE_ID: 'service_kes00hn',     // GANTI Service ID
    EMAILJS_TEMPLATE_ID: 'template_iapynyc',   // GANTI Template ID
    EMAILJS_PUBLIC_KEY: 'DGDB-0s5InZWICO4O',     // GANTI Public Key
    EMAILJS_FROM_EMAIL: 'kurirpanelpterovolkaze@gmail.com',         // Email kurir (Anda)
    
    // ============ WHATSAPP ============
    WHATSAPP_NUMBER: '628568122701',                  // GANTI NOMOR WHATSAPP
    
    // ============ DEVELOPER INFO ============
    DEVELOPER_NAME: 'ILHAM',
    
    // ============ PAKET HOSTING ============
    PACKAGES: [
        {
            id: 1,
            name: "Paket Basic",
            price: 1000,
            ram: "1 GB",
            disk: "5 GB",
            cpu: "50%",
            popular: false
        },
        {
            id: 2,
            name: "Paket Standard",
            price: 2000,
            ram: "2 GB",
            disk: "10 GB",
            cpu: "100%",
            popular: true
        },
        {
            id: 3,
            name: "Paket Premium",
            price: 3500,
            ram: "3 GB",
            disk: "15 GB",
            cpu: "150%",
            popular: false
        },
        {
            id: 4,
            name: "Paket Elite",
            price: 5000,
            ram: "4 GB",
            disk: "20 GB",
            cpu: "200%",
            popular: false
        },
        {
            id: 5,
            name: "Paket Ultimate",
            price: 7500,
            ram: "6 GB",
            disk: "30 GB",
            cpu: "300%",
            popular: false
        },
        {
            id: 6,
            name: "Paket Extreme",
            price: 10000,
            ram: "8 GB",
            disk: "40 GB",
            cpu: "400%",
            popular: false
        }
    ]
};