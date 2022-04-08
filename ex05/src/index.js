var myPetsArray = [
    {
        animaltype: "Dog",
        name: "Pujdo"
    },
    {
        animaltype: "Cat",
        name: "Maca"
    },
    {
        animaltype: "Bird",
        name: "Tweety"
    }
];


function myPetsFunction(pets) {
    pets = myPetsArray[1].name;
     return pets;
}
console.log(myPetsFunction(myPetsArray[1]));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;