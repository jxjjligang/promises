'use strict'
let alert = console.log;

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve('done'), ms);
    });
}

delay(3000).then((v) => alert(`After 3000 ms, result resolved with value:${v}`))