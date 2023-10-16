import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import mysql from '@fastify/mysql';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import conf from '../plugin/conf';
import utils from '../plugin/utils';

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    await fastify.register(conf);

    fastify.register(mysql, fastify.conf.database);

    fastify.register(cookie);

    fastify.register(jwt, fastify.conf.jwt);

    fastify.register(utils);
});
