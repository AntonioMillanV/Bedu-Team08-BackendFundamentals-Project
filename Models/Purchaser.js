/* Clase que representa un comprador en nuestra API */

class Purchaser {
    constructor(purchaserID, username, firstName, lastName, phone, email, password, location, bio, profilePhoto, purchaseRequestsList) {
        this.purchaserID = purchaserID;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.location = location;
        this.bio = bio;
        this.profilePhoto = profilePhoto;
        this.purchaseRequestsList = purchaseRequestsList;
    }
}

module.exports = Purchaser;