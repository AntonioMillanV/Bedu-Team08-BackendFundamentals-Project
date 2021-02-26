/* Clase que representa a un usuario de la API */

class User {
    constructor(id, userType, username, firstName, lastName, phone, email, password, location, bio, profilePhoto, announcesList, purchaseRequestsList) {
        this.id = id;
        this.userType = userType;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.location = location;
        this.bio = bio;
        this.profilePhoto = profilePhoto;
        this.announcesList = announcesList;
        this.purchaseRequestsList = purchaseRequestsList
    }
}

module.exports = User;