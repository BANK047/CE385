const simulateAsyncOperation = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (timeout >= 1000) {
                resolve(`Successful Async Operation after ${timeout/1000} ms`);
            } else {
                reject("Async Operation Failed: Timeout too short");
            }
        }, timeout);
    });
};

const performAsyncTask = async (timeout) => {
    try {
        const result = await simulateAsyncOperation(timeout);
        console.log(result);
    }   catch (error) {
        console.log("Error:", error);
    }
};

performAsyncTask(1500);
performAsyncTask(500);