const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require('fs');
const winston = require('winston');

const logger = winston.createLogger({
    level:'info',
    format: winston.format.json(),
    defaultMeta: {service: 'calculate-service'},
    transport: [
        new winston.transport.File({ filename: 'error.log', level: 'error'}),
        new winston.transport.File({ filename: 'combined.log'}),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
const add = (n1,n2) => {
    return n1+n2;
}

//Addition
app.get("/add", (req,res)=>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        logger.info('Parameters '+n1+ ' and '+n2+' received for addition');
        const result = add(n1,n2);
        res.status(200).json({statuscode:200, data: result});
    }
    catch(error) {
        console.error(error)
        res.status(500).json({statuscode:500, msg: error.toString()})
    }
});

//Subtraction
const sub=(n1,n2)=>{
    return n1-n2
  }
  
app.get("/sub", (req,res)=>{
    try{
        const n1=parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)){
            logger.error("n1 incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            logger.error("n2 incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
  
        logger.info("Paramenters"  +n1+'and' +n2+'received for addition')
        const result = sub(n1,n2);
        res.status(200).json({statuscode:100,data: result})
    } catch(error){
        console.error(error)
        res.status(500).json({statuscode:500,msg:error.toString()})
    }
});

//Multiplication
const mul=(n1,n2)=>{
    return n1*n2
  }
  
app.get("/mul", (req,res)=>{
    try{
        const n1=parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)){
            logger.error("n1 incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            logger.error("n2 incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
  
        logger.info("Paramenters"  +n1+'and' +n2+'received for addition')
        const result = mul(n1,n2);
        res.status(200).json({statuscode:100,data: result})
    } catch(error){
        console.error(error)
        res.status(500).json({statuscode:500,msg:error.toString()})
    }
});

//Division
const div=(n1,n2)=>{
    return n1/n2
  }
  
app.get("/div", (req,res)=>{
    try{
        const n1=parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)){
            logger.error("n1 incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)){
            logger.error("n2 incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }
  
        logger.info("Paramenters"  +n1+'and' +n2+'received for addition')
        const result = div(n1,n2);
        res.status(200).json({statuscode:100,data: result})
    } catch(error){
        console.error(error)
        res.status(500).json({statuscode:500,msg:error.toString()})
    }
});
const port = 3040;
app.listen(port,()=> {
console.log("hello i'm listening to port " + port);
})