import knex from "knex";
import { dbConfig } from "../../knexfile.js";

const db = knex(dbConfig);

export default db;
