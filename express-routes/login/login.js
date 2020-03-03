const express = require('express');
const router = express.Router();

router.post('/validate', (req,res) => {
    const response = {
        errors: false, 
        message: 'Login information sent',
        postedData: req.body,
    }
    
    console.log('Post Sent Login Information');
    res.json(response);
});

module.exports = router;