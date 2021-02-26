const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a carbedu-ApI');
});


router.use('/pu', require('./purcharser'));
router.use('/ad', require('./advertiser'));

//EXPORTAMOS NUESTRO ROUTER;
module.exports = router;