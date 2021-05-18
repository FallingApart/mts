const Router = require('express'); 
const OfficialController = require('../controller/OfficialController'); 
const router = new Router(); 

router.post('/post', OfficialController.createOffical); 

module.exports = router;