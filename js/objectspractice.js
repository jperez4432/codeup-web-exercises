var Truck = {
    make: "Toyota",
    model: "Tacoma",
    truck: true,
    seat: 5,
    color: "Voodoo Blue",
    mileage: 10,
    packages: {
        technology: false,
        navigation: false,
        premiumOffRoad: true
    },
    drive: function(){
        console.log("vroom vroom!");
        this.mileage++
    }
}
function isNew(car) {
    return car.mileage <= 15;
}

var yourTruck = {
    make: "Ford",
    model: "F150",
    truck: true,
    seats: 5,
    color: "red",
    mileage: 101250,

}