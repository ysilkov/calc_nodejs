import { Router } from "express";

const router = new Router();

router.post("/add",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let ans = a + b; 
    res.send(JSON.stringify({ans: ans}))
})
router.post("/sub",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let ans = a / b;
    res.send(JSON.stringify({ans: ans}))
})
router.post("/mul",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let ans = a * b;
    res.send(JSON.stringify({ans: ans}))
})
router.post("/div",(req,res)=>{
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let ans = a - b;
    res.send(JSON.stringify({ans: ans}))
})

export default router;
