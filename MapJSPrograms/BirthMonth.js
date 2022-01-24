/* program to generate a birth month of 50 individuals 
between inthe year of 92& 93*/


let NoOfPersons = 1;
var birthMonthMap = new Map();

function GenerateaBirthMonth(){
    return Math.floor(Math.random()* 10) +1;
}

while(NoOfPersons != 51)
{
    let month = generateABirthMonth();
    console.log("noofPersons : "+NoOfPersons+"\tBirth Month is : "+month);
    let personArray = new Array();

    if(birthMonthMap.has(month))
        personArray = birthMonthMap.get(month);
    
    personArray.push(Persons);
    birthMonthMap.set(month,personArray);
    NoOfPersons++;
}

console.log("People with same birthday month");
for(let [key,value] of birthMonthMap.entries()){
    console.log("Month : " + key + "\tPeople : [" + value+ "]");
}