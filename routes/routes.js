const express = require('express');
const router = express.Router();

const readfile = require('../middleware/read');
const createfile = require('../middleware/create');
const updatefile = require('../middleware/update');
const deletefile = require('../middleware/delete');





router.get('/read',readfile.readdata);

router.post('/create',createfile.createdata);

router.put('/update',updatefile.updatedata);

router.delete('/delete/:id',deletefile.deletedata);

module.exports = router;
