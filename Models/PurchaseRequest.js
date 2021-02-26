/* Clase que representa una petición de compra de un auto */

class PurchaseRequest {
    constructor(purchaseRequestID, creationDate, status, purchaserID, carID) {
        this.purchaseRequestID = purchaseRequestID;
        this.creationDate = creationDate;
        this.status = status;
        this.purchaserID = purchaserID;
        this.carID = carID;
    }
}

module.exports = PurchaseRequest;