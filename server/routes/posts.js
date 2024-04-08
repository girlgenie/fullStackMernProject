import express from 'express'; 

const router = express.Router(); 


//http://localhost:5001/posts
router.get('/', (req,res) => { 
    res.send('THIS WORKS!');
});

export default router; 