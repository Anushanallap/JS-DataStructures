/*Generates 10 Random 3 Digit number.
*/


function GenerateRandomNum(){
    return Math.floor(Math.random() * 20 + 80);
}
/*Store this random numbers into a array.*/
let NumArray = new NumArray();

    console.log(GenerateRandomNum)
for(i = 0; i<3;i++ ){
    NumArray.push(GenerateRandomNum());
    console.log(NumArray(i));
}
/*Then find the 2nd largest and the 2nd smallest element without sorting the array.*/

NumArray.sort();
console.log("sort this random numbers in to array");
for(i = 0; i<3;i++ ){
console.log(NumArray(i));
}

console.log("Largest Array:" +NumArray(1) );
console.log("Smallest Array:" +NumArray(1) );
