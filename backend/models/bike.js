// Jhonattan Aponte - 20212578062
// Laura Aponte - 20212578082

const bikesList = []

class Bike {
    constructor(id, color, model, location) {
        this.id = id;
        this.color = color;
        this.model = model;
        this.location = location;
    }

    toString() {
        return `id: ${this.id} || color: ${this.color}`;
    }
}

const add_bike = (bike) => {
    bikesList.push(bike)
}

let bike1 = new Bike(1, "red", "gw", [4.579583235006287, -74.15714591958991])
let bike2 = new Bike(2, "blue", "Gtx", [4.579583235006287, -74.160])

bikesList.push(bike1)
bikesList.push(bike2)

const delete_bike = (id) =>{
    const index = bikesList.findIndex(bike => bike.id === id);
    if (index !== -1) {
        bikesList.splice(index, 1);
        console.log(`Bike with id ${id} deleted successfully.`);
    } else {
        console.log(`Bike with id ${id} not found.`);
    }
}

const find_bike = (id) => {
    console.log("finding....")
    console.log({id: id})
    console.log("finding....")

    return bikesList.find(bike => bike.id === parseInt(id));
}

module.exports = {
    Bike,
    bikesList,
    add_bike,
    delete_bike,
    find_bike
};
