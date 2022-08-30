const { Router } = require('express');
const { getAllCount, GetCountryId } = require('../controller/controllerCountries')
const router= Router();

router.get('/', getAllCount)  
router.get('/:idPais', GetCountryId)  

module.exports = router;