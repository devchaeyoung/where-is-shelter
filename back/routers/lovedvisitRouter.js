import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { lovedvisitService } from "../db/services/lovedvisitService";



const lovedVisitRouter=Router();

//inserting new data to lovedVisit collection
// data sent from request is in req.body
lovedVisitRouter.post("/bookmark",
login_required,
async function (req,res, next){

    try {
        if (is.emptyObject(req.body)) {
          throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요"
          );
        }

        // getting user_id and shelter_id from req.body
        const { user_id, shelter_id } = req.body;  
        const newvisit = await lovedvisitService.addlovedvisit({user_id,shelter_id});

        if(newvisit.errorMessage){
            throw new Error(newvisit.errorMessage);
        }
        res.status(201).json(newvisit);
    }catch(error){
        next(error);
    }
});


// i should get information from shelter table...
lovedVisitRouter.get("/bookmark/:user_id",
login_required,
async function(req,res,next){
    try{
        const user_id=req.params.user_id;
        const visits =await lovedvisitService.getuservisits({user_id});

        if(visits.errorMessage){
            throw new Error(visits.errorMessage);
        }

        /*
        I should write code for response with shelter info later here.
        */

    }catch(error){
        next(error);
    }
});

lovedVisitRouter.get("/bookmark/:user_id/:shelter_id",
login_required,
async function(req,res,next){
    try{
        const user_id=req.params.user_id;
        const shelter_id=req.params.shelter_id;
        const visits =await lovedvisitService.getuservisit({user_id,shelter_id});

        if(visits.errorMessage){
            throw new Error(visits.errorMessage);
        }

        /*
        I should write code for response with shelter info later here.
        */

    }catch(error){
        next(error);
    }
});

//deleting one lovedvisit document
lovedVisitRouter.delete("/bookmark/:user_id/:shelter_id",
login_required,
async function(req,res,next){
    try{
        const user_id=req.params.user_id;
        const shelter_id=req.params.shelter_id;
        const deletedvisit = await lovedvisitService.deleteusersvisit({user_id,shelter_id});
        if(deletedvisit.errorMessage){
            throw new Error(visits.errorMessage);
        }

    }catch(error){
        next(error);
    }
})

//deleting all lovedvisitsdocuments from one user
lovedVisitRouter.delete("/bookmark/:user_id",
login_required,
async function(req,res,next){
    try{
        const user_id=req.params.user_id;
        const deletedvisits = await lovedvisitService.deleteusersvisits({user_id});
        if(deletedvisits.errorMessage){
            throw new Error(visits.errorMessage);
        }

    }catch(error){
        next(error);
    }
})