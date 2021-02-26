/* Clase que representa un comprador en nuestra API */
const Advertiser = require('./Advertiser');
class Purchaser extends Advertiser {
    constructor(id, firstName, lastName, phone, email, password, location, bio, profilePhoto) {
        super(id, firstName, lastName, phone, email, password, location, bio, profilePhoto)

    }
}



module.exports = Purchaser;