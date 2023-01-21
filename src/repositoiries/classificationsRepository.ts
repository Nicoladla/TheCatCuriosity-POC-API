import { QueryResult } from "pg";
import connection from "../database/db.js";

import {
  Classification,
  ClassificationInsert,
} from "../protocols/ClassificationProtocol.js";

export function fetchClassifications() {
  return connection.query<Classification>(`SELECT * FROM classifications`);
}

export function insertClassifications(Classification: string) {
  return connection.query<ClassificationInsert>(
    `INSERT INTO classifications (name) VALUES ($1)`,
    [Classification]
  );
}
