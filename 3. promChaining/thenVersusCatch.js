'use strict'
let alert = console.log;

function resolve(value) {
    alert(`Promise resolved with value:${value}`);
    throw new Error('Throw from resolve function.');
}

function rejectOrCatch(error) {
    alert(`Promise rejected/ caught with message:${error.message}`);
}

console.log('1. Reject comparision.');
// let promiseRejected = new Promise((resolve, reject) => reject('failed'));
new Promise((resolve, reject) => reject(new Error('failed'))).then(resolve, rejectOrCatch),
    new Promise((resolve, reject) => reject(new Error('failed'))).then(resolve).catch(rejectOrCatch)

setTimeout(() => {
    console.log('\n2. Throw comparision.');
    let promiseThrown = new Promise((resolve, reject) => { throw new Error('thrown'); });
    promiseThrown.then(resolve, rejectOrCatch);
    promiseThrown.then(resolve).catch(rejectOrCatch);
}, 0);

setTimeout(() => {
    console.log('\n3. Throw within resolve comparision.');
    let promiseThrown = new Promise((resolve, reject) => { resolve('succeed'); });
    promiseThrown.then(resolve, rejectOrCatch);
    promiseThrown.then(resolve).catch(rejectOrCatch);
}, 10);