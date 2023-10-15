import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
// import mysql from '@fastify/mysql';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import utils from '../plugin/utils';

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    // fastify.register(mysql, {
    //     connectionString: 'mysql://root@127.0.0.1/mysql',
    // });

    fastify.register(cookie);

    fastify.register(jwt, {
        secret: '123', // TODO добавить загрузку
    });

    fastify.register(utils);
});
