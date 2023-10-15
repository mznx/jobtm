import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import * as crypto from './crypto.utils';

export default fastifyPlugin(async (fastify: FastifyInstance) => {
    fastify.decorate('utils', {
        crypto: crypto,
    });
});
