/* Clase que representa un automovil en nuestra API */

class Car {
    constructor(carID, price, make, model, year, miles, drivetrain, chasisType, photos, description, advertiserID) {
        this.carID = carID;
        this.price = price;
        this.make = make;
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.drivetrain = drivetrain;
        this.chasisType = chasisType;
        this.photos = photos;
        this.description = description;
        this. advertiserID = advertiserID;
    }
}

module.exports = Car;