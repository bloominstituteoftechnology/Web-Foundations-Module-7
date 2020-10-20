const animal1 = "Armadillo";

const animal2 = "Lynx";

let animal3 = "Ferret";

let animal4 = "Walrus";

let nameOfZoo = "North Topanga Zoo";

let enclosureOne = [animal1, animal3];

let enclosureTwo = [animal2, animal4];

let zoo = [enclosureOne, enclosureTwo];

enclosureTwo.pop();

enclosureTwo.push("Mountain Goat");

let enclosureThree = [animal4];

zoo.unshift(enclosureThree);
