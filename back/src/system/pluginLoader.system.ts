import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import conf from '../plugin/conf';
import db from '../plugin/db';
import utils from '../plugin/utils';

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    await fastify.register(conf);

    await fastify.register(db);

    fastify.register(cookie);

    fastify.register(jwt, fastify.conf.jwt);

    fastify.register(utils);
});
