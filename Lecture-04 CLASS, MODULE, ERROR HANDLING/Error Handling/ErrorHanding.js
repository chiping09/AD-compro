function criticalcode() {
    throw "throwing an exception";
}

function logError(theExcption){
    console.log(theExcption);
}

console.log("\n*****Try..Catch*****\n");

try {
    criticalcode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n*****Throwing in Try...Catch*****\n");

try {
    throw "An excption bmithat is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n*****try...catch..Finally*****\n");

try{
    criticalcode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("code that alway will run");
}

function hello() {
    console.log("\n*****throwing excptions*****\n");
}