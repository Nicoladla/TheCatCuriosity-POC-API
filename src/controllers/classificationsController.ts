import { Request, Response } from "express";
import { fetchClassifications } from "../repositoiries/classificationsRepository.js";

export async function getClassifications(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const listClassifications = await fetchClassifications();

    res.status(200).send(listClassifications.rows);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function postClassifications(
  req: Request,
  res: Response
): Promise<void> {
    const classification = req.body


  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function deleteClassifications(
  req: Request,
  res: Response
): Promise<void> {
  try {
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
