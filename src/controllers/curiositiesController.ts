import { Request, Response } from "express";

import {
  fetchCuriosities,
  fetchCuriosityById,
  fetchCuriositiesByClassification,
  insertCuriosity,
  updateCuriosity,
  deleteCuriosity,
} from "../repositoiries/curiositiesRepository.js";

export async function getCuriosities(req: Request, res: Response) {
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
) {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function postCuriosities(req: Request, res: Response) {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function updateCuriosities(req: Request, res: Response) {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function deleteCuriosities(req: Request, res: Response) {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
