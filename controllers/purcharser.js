//CONTROLADOR PARA COMPRADOR

//IMPORTACION DEL MODELO PURCHARSER
const Purchaser = require('../models/Purcharser');

const createPurcharser = (req, res) => {
    //INTANCIAMOS UN NUEVO USUARIO UTILIZANDO LA CLASE PURCHARSER
    let purcharser = new Purchaser(req.body);
    req.status(201).send(usuario);
    console.log(purcharser);
    console.log(req);
};

const getPurcharsers = (req, res) => {
    let antonio = new Purchaser(1, 'Jose Antonio', 'Millan', 5547445412, 'joseantonio@bedu.com', 'Bedu1', 'Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México, CDMX', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no')
    let said = new Purchaser(2, 'Said', 'Mandujano', 557845487, 'saidmandujano@bedu.com', 'Bedu2', 'Miguel Hidalgo, Ciudad de México, CDMX', null, 'https://lh5.googleusercontent.com/p/AF1QipOtsojGOvbJPmiBTauT1Ku3Yf1Ztt2vntEiqOaM=w408-h320-k-no');
    let brandon = new Purchaser(1, 'Brandon', 'Alberto', 457445412, 'brandon@bedu.com', 'Bedu3', '55800 San Juan Teotihuacan de Arista, Méx.', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no')
    console.log({ antonio, said, brandon });
    res.send([antonio, said, brandon]);
}

const updatePurcharser = (req, res) => {
    let brandon = new Purchaser(req.params.id, 'Brandon', 'Alberto', 457445412, 'brandon@bedu.com', 'Bedu3', '55800 San Juan Teotihuacan de Arista, Méx.', null, 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no');
    let modificaciones = req.body;
    brandon = {...brandon, ...modificaciones };
    res.send(brandon);
}


const deletePurcharser = (req, res) => {
    req.status(200).send(`Usuario ${req.param.id} eliminado correctamente`);
};


module.exports = {
    createPurcharser,
    getPurcharsers,
    updatePurcharser,
    deletePurcharser
}