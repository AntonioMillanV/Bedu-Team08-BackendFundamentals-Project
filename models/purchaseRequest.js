/* Clase que representa una petición de compra de un auto */

class PurchaseRequest {
    constructor(id, carId, announcerId, purchaserId, creationDate, status) {
        this.id = id;
        this.carId = carId;
        this.announcerId = announcerId;
        this.purchaserId = purchaserId;
        this.creationDate = creationDate;
        this.status = status;
    }
}

module.exports = PurchaseRequest;