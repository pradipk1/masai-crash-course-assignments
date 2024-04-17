

function counterFn() {
    let count = 0;

    return () => {
        console.log(++count);
    }
}

const counter = counterFn();

counter();
counter();
counter();
counter();

