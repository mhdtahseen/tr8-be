import express from 'express';
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Hello")
})

router.post("/", (req,res)=>{
    
})


export default router