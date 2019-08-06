function first(name){
    console.log("Function"+name);
}

first(",hi sazzad");

    //using return
function isEven(no){
    if(no%2==0){
        return true;
    }
    return false;
}

console.log(isEven(19));

    //new features
function sayHi(name="hello"){
    console.log(name);
}

sayHi("hi");
sayHi();