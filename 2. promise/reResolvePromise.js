'use strict'
let alert = console.log;

let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

// promise.then(alert);  // value 1 printed here

promise.then(alert).then(alert).then(alert);  // value 1 printed here