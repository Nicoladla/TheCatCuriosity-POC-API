import { Request, Response, NextFunction } from "express";

import { CuriositiesInsert } from "../protocols/curiositiesProtocol.js";
import { fetchClassificationById } from "../repositoiries/classificationsRepository.js";
import { curiositySchema } from "../schema/curiositiesSchema.js";

export async function validPostCuriosity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const curiosity = req.body as CuriositiesInsert;

  try {
    const { error } = curiositySchema.validate(curiosity, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send({ message: errors });
    }

    const classificationExist = await fetchClassificationById(
      curiosity.classificationId
    );
    if(classificationExist.rowCount === 0){
        return res.status(400).send({message: "Invalid classification"})
    }

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
