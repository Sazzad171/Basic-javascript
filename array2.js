//shallow copy(change only value)
var a=10;
var b=a;
b=5;
console.log(a,b);

//deep copy(change value with reference)
var arr=[
    "sat",      //0 = -7
    "sun",      //1 = -6
    "mon",      //2 = -5
    "tue",      //3 = -4
    "wed",      //4 = -3
    "thu",      //5 = -2
    "fri"];     //6 = -1

    var arr2=arr;
    arr2[6]="off day";
    console.log(arr,arr2);

//copy an array without deep copy
var arr3=[
    "sat",      //0 = -7
    "sun",      //1 = -6
    "mon",      //2 = -5
    "tue",      //3 = -4
    "wed",      //4 = -3
    "thu",      //5 = -2
    "fri"];     //6 = -1

    var arr4=arr3.slice();
    arr4[6]="off day";
    console.log(arr3,arr4);


//merge two or more array
var mr=["a","b"];
var mr2=["c","d"];
var mr3=["e"];
var mr4=mr.concat(mr2,mr3);
console.log(mr4);

//sorting
var sr=[
    "c",      //0 = -7
    "s",      //1 = -6
    "m",      //2 = -5
    "t",      //3 = -4
    "w",      //4 = -3
    "t",      //5 = -2
    "f"];

    sr.sort();
    console.log(sr);

//string to array
var sa="hey, how are you";
var sa2=sa.split(" ");
console.log(sa2);

//array to string
sa3=sa2.join(".");
console.log(sa3);

//reverse
var r="Sazzad bin jafor";
var rev=r.split("").reverse().join("");
console.log(rev);