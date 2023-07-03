import { workerData, parentPort } from "worker_threads"

const buffer = new Uint32Array(workerData.sharedBuffer)

for (let i = 0; i < buffer.length; i++) {
    buffer[i] = 7
}

parentPort.postMessage('done')