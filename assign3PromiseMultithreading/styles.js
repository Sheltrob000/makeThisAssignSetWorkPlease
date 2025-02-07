

const promiseassign = new Promise((resolve, reject) => {
    resolve(15)
    reject("hello")
}
);

promiseassign
    .then(value => value * 2)
    .then(value => value + 10)
    .then(value => value - 5)
    .then(value => console.log(value))
    .catch(reject => console.log(reject));



