import { Request, Response } from "express";

import { CuriositiesInsert } from "../protocols/curiositiesProtocol.js";

import {
  fetchCuriosities,
  fetchCuriosityById,
  fetchCuriositiesByClassification,
  insertCuriosity,
  updateACuriosity,
  deleteACuriosity,
} from "../repositoiries/curiositiesRepository.js";

export async function getCuriosities(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { rows: listCuriosities } = await fetchCuriosities();

    res.status(200).send(listCuriosities);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function getCuriositiesByClassification(
  req: Request,
  res: Response
): Promise<void> {
  const classificationId: number = Number(req.params.classificationId);

  try {
    const { rows: listCuriositiesByClassification } =
      await fetchCuriositiesByClassification(classificationId);

    res.status(200).send(listCuriositiesByClassification);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function postCuriosity(req: Request, res: Response) {
  const curiosity = req.body as CuriositiesInsert;

  try {
    await insertCuriosity(curiosity);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function updateCuriosity(req: Request, res: Response) {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function deleteCuriosity(req: Request, res: Response) {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
