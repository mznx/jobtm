import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import knex from 'knex';
import db from '../../db';

declare module 'fastify' {
    interface FastifyInstance { db: ReturnType<typeof init> }
}

const init = (fastify: FastifyInstance) => ({
    core: db.core(knex(fastify.conf.database.core)),
});

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    const data = init(fastify);
    fastify.decorate('db', data);
});
