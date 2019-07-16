//using object literal syntax

let student = {
    name: "Nyarko",
    age: 27,
    course: "BSc Computer Science",
    graduation: 2020,

    graduate: function () {
        if(this.graduation < 2021){
            console.log(this.name + " will graduate in " + this.graduation);
        }
    }
}


console.log(student.graduation);
student.graduate();


let tenant = {};
tenant.name = "David";
tenant.religion = "Christian";
tenant.movedIn = 2015;

console.log(tenant);



let house = {
    landLord : {name: "Leticia", gender: "Female", phone: "0507882310"},

    tenants : [
        {name: "David", gender: "Male", religion: "Christian", movedIn: 2015, phone: "0248399477"},
        {name: "Selorm", gender: "Male", religion: "Christian", movedIn: 2016, phone: "0248277944"},
        {name: "Ebenezer", gender: "Male", religion: "Christian", movedIn: 2017, phone: "0543880082"},
    ],
};