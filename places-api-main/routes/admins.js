var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController')
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isDifferentAdmin } = require('../middlewares/isDifferentAdmin');

router.get('/', adminController.index);
router.post('/', adminController.signup);
router.post('/login', adminController.login);
router.get('/:id', adminController.show);
router.put('/:id',  adminController.update);
router.delete('/:id',  isDifferentAdmin, adminController.delete);

module.exports = router;
