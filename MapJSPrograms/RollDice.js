/* Roll a die and find the number between 1 to 6
@return the dieroll value count
*/

function DieRoll(){
    let dieroll = Math.floor(Math.random() * 6 + 1);
    console.log(dieroll);
    return dieroll;
}
/*repeat the dieroll to find the result each time*/

function RepeatDie(){
    let dieroll = DieRoll();
    let dierollrepeat = [];
    for(i = 0; i<10;i++){
        dieroll = DieRoll();
        console.log(RepeatDie);
    }

}
RepeatDie();

/* store the result in a dictonary and repeat
til any one of the number reaches to 10 times*/

function DictStore(){
    let dierollmap = new Map();
    for(i = 0; i<10;i++){
        dierollmap.set(i,DieRoll()); 
    }
return dierollmap;

}
console.log(DictStore());
