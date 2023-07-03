import { Worker } from "worker_threads"

const doFib = async (iterations) => {
    return new Promise((resolve, reject) => {
        const start = Date.now()
        const worker = new Worker('./fib.js', {
            workerData: {
                iterations
            }
        })
        worker.on('message', (data) => {
            console.log(`worker [${worker.threadId}]: done in ${Date.now() - start}ms`)
            resolve(data)
        })
        worker.on('error', err => reject(err))
    })
}

const main = async () => {
    try {
        const start = Date.now()
        const values = await Promise.all([
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
            doFib(40),
        ])
        console.log('values: ', values)
        console.log(`All done in ${Date.now() - start}ms`)
    } catch (err) {
        console.error(err)
    }
}

main()
