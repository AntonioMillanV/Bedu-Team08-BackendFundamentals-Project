/* Clase que representa un anuciante de algun automovil en nuestra API */
class Advertiser {

    constructor(id, firstName, lastName, phone, email, password, location, bio, profilePhoto) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.location = location;
        this.bio = bio;
        this.profilePhoto = profilePhoto;
        this.historial = []
    }
}


module.exports = Advertiser;