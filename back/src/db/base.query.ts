import { Knex } from 'knex';

export abstract class BaseQuery {
    constructor(protected db: Knex) {}
}
