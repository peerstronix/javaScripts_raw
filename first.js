let date = new Date();

let year = date.getFullYear();

console.log(year);

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let session = "AM";

// Formating hour
if(h == 0) h = 12;
if(h > 12){
    h = h - 12;
    session = "PM";
}
if(h < 10) h = "0" + h;

// Formating minutes
if(m < 10) m = "0" + m;

// Formating seconds
if(s < 10) s = "0" + s;

let myTime = h + ":" + m + " " + session;

let expectedTime = "06:36 PM";

if(myTime == expectedTime){
    console.log("Times are equal.");
}else{
    console.log("Times are not equal");
}