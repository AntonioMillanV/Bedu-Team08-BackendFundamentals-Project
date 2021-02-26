const router = require('express').Router();
const {
    createPurcharser,
    getPurcharsers,
    updatePurcharser,
    deletePurcharser
} = require('../controllers/purcharser');

router.get('/', getPurcharsers);
router.post('/', createPurcharser);
router.put('/:id', updatePurcharser);
router.delete('/:id', deletePurcharser);

module.exports = router;