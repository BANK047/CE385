const fetchDataWithCallback = (callback) => {
    setTimeout(() => {
        const data = "Data fetched with Callback";
        callback(null ,data);
    }, 2000); 
};

fetchDataWithCallback((error, result) => {
    if (error) {
        console.log("Error", error);
    } else {
        console.log("Callback Complete: ", result);
    }
});

const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            const data = "Data fetched with Promise";
            const success = true;
            if (success) {
                resolve(data);
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    }); 
};

fetchDataWithPromise()
    .then((data) => {
        console.log("Promise Complete: ", data);
    })
    .catch((error) => {
        console.log("Error fetching Promise", error);
    });

 console.log(fetchDataWithCallback);
 console.log(fetchDataWithPromise);