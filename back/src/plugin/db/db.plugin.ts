import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import knex, { Knex } from 'knex';
import db from '../../db';

interface DatabaseConfig {
    core: Knex.Config;
}

declare module 'fastify' {
    interface FastifyInstance { db: ReturnType<typeof init> }
}

const init = (conf: DatabaseConfig) => ({
    core: db.core(knex(conf.core)),
});

export default fastifyPlugin(async (fastify: FastifyInstance, dbConfig: DatabaseConfig) => {
    const data = init(dbConfig);
    fastify.decorate('db', data);
});
