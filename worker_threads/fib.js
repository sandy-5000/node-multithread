import { workerData, parentPort } from "worker_threads";

function fibonacci(n) {
    return n <= 1 ? 0
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2)
}

if (workerData) {
    const result = fibonacci(workerData.iterations)
    parentPort.postMessage(result)
} else {
    let start = Date.now()
    for (let i = 0; i < 10; ++i) {
        console.log(fibonacci(40))
    }
    console.log(`Time taken: ${Date.now() - start}`)
}