
let items = ["oranges", "mangoes", "bananas", "pineapples"];
let i;
// for(i=0; i<items.length; i++){
//     console.log(items[i]);
// }

console.log(items);

console.log(items.sort());

let nums = [65, 34, 77, 90, 22, 13, 21, 37];
let counter = 0;
for(let i=0; i<nums.length; i++){
    if(nums[i] % 2 ==0){
        counter +=1;

        console.log(nums[i]);
    }
}

