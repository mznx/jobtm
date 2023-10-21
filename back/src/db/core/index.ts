import { Knex } from 'knex';
import user from './user';
import token from './token';

export default (knex: Knex) => ({
    knex: knex,
    user: new user.query(knex),
    token: new token.query(knex),
});
