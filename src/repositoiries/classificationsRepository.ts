import { QueryResult } from "pg";
import connection from "../database/db.js";

type Classification = {
  id: number;
  name: string;
};

export function fetchClassifications() {
  return connection.query<Classification>(`SELECT * FROM classifications`);
}
