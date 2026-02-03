const fetchDataFromServer1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Server 1");
    }, 2000);
});

const fetchDataFromServer2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error Server 2");
    }, 1000);
});

const fetchDataFromServer3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data Server 3");
    }, 3000);
});

// Using Promise.race

Promise.race([fetchDataFromServer1, fetchDataFromServer2, fetchDataFromServer3])
    .then((result) => {
        console.log("");
        console.log("First completed:","\n", result);
    })
    .catch((error) => {
        console.log("");
        console.log("First error:","\n", error);
    });

// Using Promise.allSettled
Promise.allSettled([fetchDataFromServer1, fetchDataFromServer2, fetchDataFromServer3])
    .then((result) =>{
        console.log("");
        console.log("All Settled Results:", result);
    })
    .catch((error) => {
        console.log("");
        console.log("Error in All Settled:", error);
    });
