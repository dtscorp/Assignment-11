const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/studentsController");

router.get('/', function(req, res){
    res.send('hello indonesia')
})
router.get('/student', StudentController.index);
router.post('/student', StudentController.store);
router.put('/student/:id', StudentController.update );
router.delete('/student/:id', StudentController.destroy);

module.exports = router;