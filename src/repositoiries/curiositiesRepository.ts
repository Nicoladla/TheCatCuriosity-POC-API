import connection from "../database/db.js";

import {
  Curiosities,
  CuriositiesInsert,
  CuriositiesUpdate,
} from "../protocols/curiositiesProtocol";

export function getCuriositie() {
  return connection.query<Curiosities>(`SELECT * FROM curiosities`);
}

export function getByIdCuriositie(classificationId: number) {
  return connection.query<Curiosities>(
    `SELECT * FROM curiosities WHERE "classificationId"=$1`,
    [classificationId]
  );
}

export function insertCuriositie(curiosity: CuriositiesInsert) {
  return connection.query<CuriositiesInsert>(
    `INSERT INTO curiosities 
        (author, title, description, classificationId) 
    VALUES 
        ($1, $2, $3, $4)`,
    [
      curiosity.author,
      curiosity.title,
      curiosity.description,
      curiosity.classificationId,
    ]
  );
}

export function updateCuriositie(
  curiosity: CuriositiesUpdate,
  curiosityId: number
) {
  return connection.query<CuriositiesInsert>(
    `UPDATE curiosities SET title=$1 , description=$2 WHERE id= $3`,
    [curiosity.title, curiosity.description, curiosityId]
  );
}

export function deleteCuriositie(curiosityId: number) {
  return connection.query(`DELETE FROM curiosities WHERE id=$1`, [curiosityId]);
}
