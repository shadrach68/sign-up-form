function logAll(){
    console.log(diffDatatypes.string);
    console.log(diffDatatypes.secondName);
    console.log(diffDatatypes.remainMoney);
    console.log(diffDatatypes.lvlInSch);
    console.log(diffDatatypes.int);
    console.log(diffDatatypes.fullName);
    console.log(diffDatatypes.float);
    console.log(diffDatatypes.Boolean);
    console.log(diffDatatypes.car);
    console.log(diffDatatypes.netWorth);
    console.log(diffDatatypes.lifeSpan);
}

const diffDatatypes = {
    Boolean: true,
    float: 1.105,
    int: 5,
    string: "chukwunweike",
    array: [1,2,3,4,5],
    object: {
        name: "Ugwoke",
    },
    secondName: "shadrach",
    fullName: "ugwoke shadrach chinweike",
    lvlInSch: 300,
    remainMoney: 55.66,
}
console.log(diffDatatypes);
delete diffDatatypes.array;
delete diffDatatypes.object;
console.log(diffDatatypes);
diffDatatypes.car = "Benz";
diffDatatypes.netWorth = "1 billion";
diffDatatypes.lifeSpan = 200;
console.log(diffDatatypes);
logAll();
console.log(Object.keys(diffDatatypes).length);

// ARRAY
const arrElements = [1,2,3,4,5,6,7,8,9,10];
console.log(arrElements);
arrElements.pop();
arrElements.pop()
console.log(arrElements);
// arrElements = ["goat","lion","fox","tiger","leopard","panther","snake","gorilla","tortise","hyena"];
arrElements[0] = "goat";
arrElements[1] = "lion";
arrElements[2] = "fox";
arrElements[3] = "tiger";
arrElements[4] = "leopard";
arrElements[5] = "panther";
arrElements[6] = "snake";
arrElements[7] = "gorilla";
arrElements[8] = "tortise";
arrElements[9] = "cheetah";
console.log(arrElements);

// CONDITIONAL STATEMENTS
if (arrElements.includes("lion")){
    console.log("Lion is the king of the jungle.");
}else if(arrElements.includes("tortise","snake.")){
     console.log("snake and tortise are known for being cunning and smart.");
}else{
    console.log( "All these animals are mammals expect snake which is a reptile.");
}

