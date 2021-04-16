let mongoDBPath = "mongodb://localhost/webd6201";

let sessionSecret = "someSecret";

function myFunction(){
    console.log{"this function has nothing"};
}

module.exports = {
    DB: mongoDBPath,
    Secret: sessionSecret,
    Nothing: myFunction
}