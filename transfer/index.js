import { Worker } from "worker_threads"

const sharedBuffer = new SharedArrayBuffer(16)
const buffer = new Uint32Array(sharedBuffer)
buffer.fill(5)

console.log('buffer Before: ', buffer)

const worker = new Worker('./w.js', {
    workerData: {
        sharedBuffer
    }
})

worker.on('message', () => {
    console.log('buffer After: ', buffer);
})