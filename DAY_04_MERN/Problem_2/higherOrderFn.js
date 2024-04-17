

// custom map method attaching to the prototype

Array.prototype.myMap = function(fn) {
    let newArr = [];

    for(let i=0; i<this.length; i++) {
        let returnedVal = fn(this[i], i, this);
        newArr.push(returnedVal);
    }

    return newArr;
}

const arr = [1,2,3,4,5];

const res = arr.myMap((ele, i) => (ele*2));
console.log(res);


// custom filter method attaching to the prototype

Array.prototype.myFilter = function(fn) {
    let newArr = [];

    for(let i=0; i<this.length; i++) {
        let flag = fn(this[i], i, this);
        if(flag) {
            newArr.push(this[i]);
        }
    }

    return newArr;
}

const oddArr = arr.myFilter((ele, i) => (ele%2 !== 0));
console.log(oddArr);


// custom reduce method attaching to the prototype

Array.prototype.myReduce = function(fn, initialValue) {
    
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let startIteration = initialValue === undefined ? 1 : 0;

    for(let i=startIteration; i<this.length; i++) {
        accumulator = fn(accumulator, this[i], i, this);
    }

    return accumulator;
}

const sum = arr.myReduce((acc, ele, i) => (acc+ele),0);
console.log(sum);

