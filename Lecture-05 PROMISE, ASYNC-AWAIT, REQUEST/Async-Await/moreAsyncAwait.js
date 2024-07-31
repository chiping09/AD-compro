function Who() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("it");
        }, 200);
    });
}

function What() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("lurks");
        }, 300);
    });
}

function Where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("in the shadows");
        }, 500);
    })
}

async function msg() {
    const a = await Who();
    const b = await What();
    const c = await Where();

    console.log(`${a} ${b} ${c}`);
}

console.log("We are looking for:");
msg();
console.log("Hello");