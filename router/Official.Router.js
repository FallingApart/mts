const Router = require('express'); 
const OfficialController = require('../controller/OfficalController'); 
const router = new Router(); 

router.post('/post', OfficialController.createOffical); 

module.exports = router;