/* Clase que representa un anuciante de algun automovil en nuestra API */

class Advertiser {
    constructor(advertiserID, username, firstName, lastName, phone, email, password, location, bio, profilePhoto, announcementsList) {
        this.advertiserID = advertiserID;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.location = location;
        this.bio = bio;
        this.profilePhoto = profilePhoto;
        this.announcementsList= announcementsList;
    }
}

module.exports = Advertiser;