const worker = new Worker(new URL('./worker2.js', import.meta.url));
worker.postMessage('ping main2');