function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles > 10 && miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDesnseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDesnseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDesnseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = restDenseAnimals + firstDenseAnimals + secondDesnseAnimals;
        return totalAnimals;

    }
}
// console.log((animalCount(35)));


// ******Traveling the jungle and counting wild animals *****
// suppose,in first 10 miles, animal density per miles is 10 in the jungle. in second 10 miles, animal density per miles is 50.and rest miles animal density per miles is 100. you need to go 35 miles and in 35 miles how many animals you can count ? 
function animalCount(miles) {
    const firstDenseAnimalsPer10Miles = 10;
    const secondDesnseAnimalsPer10Miles = 50;
    const restDenseAnimalsPerMiles = 100;
    if (miles <= 10) {
        const count = miles * firstDenseAnimalsPer10Miles;
        return count;
    }
    else if (miles > 10 && miles <= 20) {
        const firstDenseAnimals = 10 * firstDenseAnimalsPer10Miles;
        const secondRestDenseMiles = miles - 10;
        const secondRestDesnseAnimals = secondRestDenseMiles * secondDesnseAnimalsPer10Miles;
        const totalAnimals = firstDenseAnimals + secondRestDesnseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * firstDenseAnimalsPer10Miles;
        const secondDesnseAnimals = 10 * secondDesnseAnimalsPer10Miles;
        const restDenseMiles = miles - 20;
        const restDenseAnimals = restDenseMiles * restDenseAnimalsPerMiles;
        const totalAnimals = restDenseAnimals + firstDenseAnimals + secondDesnseAnimals;
        return totalAnimals;
    }
}
console.log((animalCount(35)));