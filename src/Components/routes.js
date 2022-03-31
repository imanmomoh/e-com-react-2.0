const express = require('express');
const router = express.Router();
const db = require('./dboperations')



router.get('/', (req,res, next) => {
    // res.json({test : test});
    try{
        let results = await db.all();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});



module.exports = router;