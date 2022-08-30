const { Router } = require('express');
const { newAct } = require('../controller/controllerActivities')
const router= Router();

router.post('/', newAct )  


module.exports = router;