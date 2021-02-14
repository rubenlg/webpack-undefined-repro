const worker = new Worker(new URL('./worker1.js', import.meta.url));
worker.postMessage('ping main1');