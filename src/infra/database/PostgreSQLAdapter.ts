import Connection from "./Connection";
import pgp from "pg-promise";

export default class PostgreSQLAdapter implements Connection {
  connection: any;

  constructor() {
    this.connection = pgp()("URL HERE");
  }

  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  one(statement: string, params: any): Promise<any> {
    return this.connection.one(statement, params);
  }

  close(): Promise<any> {
    return this.connection.$pool.end();
  }
}
