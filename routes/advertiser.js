const router = require('express').Router();
const {
    createAdvertiser,
    getAdvertiser,
    updateAdvertirser,
    deleteAdvertirser
} = require('../controllers/advertiser');

router.get('/', getAdvertiser);
router.post('/', createAdvertiser);
router.put('/:id', updateAdvertirser);
router.delete('/:id', deleteAdvertirser);

module.exports = router;