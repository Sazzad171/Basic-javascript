var arr=[10,20,30,"apple","mango"];      //take array
console.log(arr[2]);

var len=arr.length;       //find length of an array
console.log(len);

var arr2=["mango","orange","banana"];   //insert,delete item
console.log(arr2);
arr2.unshift("apple");     //insert first
console.log(arr2);
arr2.push("jackfruit");  //insert last
console.log(arr2);   
arr2.shift();     //delete first
console.log(arr2);
arr2.pop();        //delete last
console.log(arr2);

//slice
var arr3=["sat",    //0 = -7
        "sun",      //1 = -6
        "mon",      //2 = -5
        "tue",      //3 = -4
        "wed",      //4 = -3
        "thu",      //5 = -2
        "fri"];     //6 = -1

var sl=arr3.slice(1,6);    //from top
console.log(sl);
var sl1=arr3.slice(-6,-1);
console.log(sl1);

//splice
var arr4=["sat",    //0 = -7
        "sun",      //1 = -6
        "mon",      //2 = -5
        "tue",      //3 = -4
        "wed",      //4 = -3
        "thu",      //5 = -2
        "fri"];     //6 = -1

var sp=arr4.splice(1,5);
console.log(arr4,sp);