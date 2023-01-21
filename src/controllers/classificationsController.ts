import { Request, Response } from "express";

export async function getClassifications(req: Request, res: Response): Promise<void>{
    try{

    }catch(err){
        res.status(500).send({message: err.message})
    }
}

export async function postClassifications(req: Request, res: Response): Promise<void>{
    try{

    }catch(err){
        res.status(500).send({message: err.message})
    }
}

export async function deleteClassifications(req: Request, res: Response): Promise<void>{
    try{

    }catch(err){
        res.status(500).send({message: err.message})
    }
}